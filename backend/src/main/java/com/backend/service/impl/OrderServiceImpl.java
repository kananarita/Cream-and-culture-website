package com.backend.service.impl;

import com.backend.dto.request.CheckoutRequest;
import com.backend.dto.response.OrderItemResponse;
import com.backend.dto.response.OrderResponse;
import com.backend.entity.Cart;
import com.backend.entity.Order;
import com.backend.entity.OrderItem;
import com.backend.entity.Product;
import com.backend.entity.User;
import com.backend.enums.OrderStatus;
import com.backend.exception.EmptyCartException;
import com.backend.exception.InsufficientStockException;
import com.backend.exception.ResourceNotFoundException;
import com.backend.repository.CartRepository;
import com.backend.repository.OrderRepository;
import com.backend.repository.ProductRepository;
import com.backend.repository.UserRepository;
import com.backend.service.OrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;

@Service
@RequiredArgsConstructor
public class OrderServiceImpl implements OrderService {

    private final OrderRepository orderRepository;
    private final CartRepository cartRepository;
    private final ProductRepository productRepository;
    private final UserRepository userRepository;

    @Override
    @Transactional
    public OrderResponse checkout(String userEmail, CheckoutRequest request) {
        User user = userRepository.findByEmail(userEmail)
                .orElseThrow(() -> new ResourceNotFoundException("User not found: " + userEmail));

        Cart cart = cartRepository.findByUserId(user.getId())
                .orElseThrow(() -> new EmptyCartException("Your cart is empty"));

        if (cart.getItems().isEmpty()) {
            throw new EmptyCartException("Your cart is empty");
        }

        Order order = Order.builder()
                .user(user)
                .shippingAddress(request.getShippingAddress())
                .contactPhone(request.getContactPhone())
                .status(OrderStatus.PENDING)
                .totalAmount(BigDecimal.ZERO)
                .build();

        BigDecimal total = BigDecimal.ZERO;

        // Re-check stock at checkout time (it may have changed since items were added to the cart)
        // and decrement it atomically as part of this transaction.
        for (var cartItem : cart.getItems()) {
            Product product = productRepository.findById(cartItem.getProduct().getId())
                    .orElseThrow(() -> new ResourceNotFoundException("Product no longer exists: " + cartItem.getProduct().getId()));

            if (!product.hasStock(cartItem.getQuantity())) {
                throw new InsufficientStockException(
                        "Only " + product.getStockQuantity() + " unit(s) of '" + product.getName() + "' left in stock");
            }

            product.setStockQuantity(product.getStockQuantity() - cartItem.getQuantity());
            productRepository.save(product);

            OrderItem orderItem = OrderItem.builder()
                    .productName(product.getName())
                    .product(product)
                    .quantity(cartItem.getQuantity())
                    .priceAtPurchase(product.getPrice())
                    .build();
            order.addItem(orderItem);

            total = total.add(product.getPrice().multiply(BigDecimal.valueOf(cartItem.getQuantity())));
        }

        order.setTotalAmount(total);
        Order saved = orderRepository.save(order);

        cart.getItems().clear();
        cartRepository.save(cart);

        return toResponse(saved);
    }

    @Override
    @Transactional(readOnly = true)
    public Page<OrderResponse> getOrdersForUser(String userEmail, Pageable pageable) {
        User user = userRepository.findByEmail(userEmail)
                .orElseThrow(() -> new ResourceNotFoundException("User not found: " + userEmail));
        return orderRepository.findByUserId(user.getId(), pageable).map(this::toResponse);
    }

    @Override
    @Transactional(readOnly = true)
    public OrderResponse getOrderForUser(String userEmail, Long orderId) {
        User user = userRepository.findByEmail(userEmail)
                .orElseThrow(() -> new ResourceNotFoundException("User not found: " + userEmail));
        Order order = orderRepository.findById(orderId)
                .orElseThrow(() -> new ResourceNotFoundException("Order not found with id: " + orderId));

        if (!order.getUser().getId().equals(user.getId())) {
            throw new AccessDeniedException("You do not have permission to view this order");
        }
        return toResponse(order);
    }

    @Override
    @Transactional(readOnly = true)
    public Page<OrderResponse> getAllOrders(Pageable pageable) {
        return orderRepository.findAll(pageable).map(this::toResponse);
    }

    @Override
    @Transactional(readOnly = true)
    public Page<OrderResponse> getOrdersByStatus(OrderStatus status, Pageable pageable) {
        return orderRepository.findByStatus(status, pageable).map(this::toResponse);
    }

    @Override
    public OrderResponse updateStatus(Long orderId, OrderStatus status) {
        Order order = orderRepository.findById(orderId)
                .orElseThrow(() -> new ResourceNotFoundException("Order not found with id: " + orderId));
        order.setStatus(status);
        return toResponse(orderRepository.save(order));
    }

    private OrderResponse toResponse(Order order) {
        var items = order.getOrderItems().stream()
                .map(item -> OrderItemResponse.builder()
                        .productId(item.getProduct() != null ? item.getProduct().getId() : null)
                        .productName(item.getProductName())
                        .quantity(item.getQuantity())
                        .priceAtPurchase(item.getPriceAtPurchase())
                        .subtotal(item.getPriceAtPurchase().multiply(BigDecimal.valueOf(item.getQuantity())))
                        .build())
                .toList();

        return OrderResponse.builder()
                .id(order.getId())
                .totalAmount(order.getTotalAmount())
                .status(order.getStatus())
                .shippingAddress(order.getShippingAddress())
                .contactPhone(order.getContactPhone())
                .items(items)
                .createdAt(order.getCreatedAt())
                .build();
    }
}
