package com.yoghurtshop.backend.service.impl;

import com.yoghurtshop.backend.dto.request.CartItemRequest;
import com.yoghurtshop.backend.dto.response.CartItemResponse;
import com.yoghurtshop.backend.dto.response.CartResponse;
import com.yoghurtshop.backend.entity.Cart;
import com.yoghurtshop.backend.entity.CartItem;
import com.yoghurtshop.backend.entity.Product;
import com.yoghurtshop.backend.entity.User;
import com.yoghurtshop.backend.exception.InsufficientStockException;
import com.yoghurtshop.backend.exception.ResourceNotFoundException;
import com.yoghurtshop.backend.repository.CartItemRepository;
import com.yoghurtshop.backend.repository.CartRepository;
import com.yoghurtshop.backend.repository.ProductRepository;
import com.yoghurtshop.backend.repository.UserRepository;
import com.yoghurtshop.backend.service.CartService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.util.List;

@Service
@RequiredArgsConstructor
public class CartServiceImpl implements CartService {

    private final CartRepository cartRepository;
    private final CartItemRepository cartItemRepository;
    private final ProductRepository productRepository;
    private final UserRepository userRepository;

    @Override
    @Transactional(readOnly = true)
    public CartResponse getCart(String userEmail) {
        Cart cart = getOrCreateCart(userEmail);
        return toResponse(cart);
    }

    @Override
    public CartResponse addItem(String userEmail, CartItemRequest request) {
        Cart cart = getOrCreateCart(userEmail);
        Product product = productRepository.findById(request.getProductId())
                .orElseThrow(() -> new ResourceNotFoundException("Product not found with id: " + request.getProductId()));

        CartItem existing = cartItemRepository.findByCartIdAndProductId(cart.getId(), product.getId()).orElse(null);
        int desiredQuantity = (existing != null ? existing.getQuantity() : 0) + request.getQuantity();

        if (!product.hasStock(desiredQuantity)) {
            throw new InsufficientStockException(
                    "Only " + product.getStockQuantity() + " unit(s) of '" + product.getName() + "' left in stock");
        }

        if (existing != null) {
            existing.setQuantity(desiredQuantity);
            cartItemRepository.save(existing);
        } else {
            CartItem item = CartItem.builder()
                    .product(product)
                    .quantity(request.getQuantity())
                    .build();
            cart.addItem(item);
            cartItemRepository.save(item);
        }

        return toResponse(cartRepository.findById(cart.getId()).orElseThrow());
    }

    @Override
    public CartResponse updateItem(String userEmail, Long cartItemId, Integer quantity) {
        Cart cart = getOrCreateCart(userEmail);
        CartItem item = findOwnedItem(cart, cartItemId);

        if (quantity <= 0) {
            cart.removeItem(item);
            cartItemRepository.delete(item);
        } else {
            if (!item.getProduct().hasStock(quantity)) {
                throw new InsufficientStockException(
                        "Only " + item.getProduct().getStockQuantity() + " unit(s) of '"
                                + item.getProduct().getName() + "' left in stock");
            }
            item.setQuantity(quantity);
            cartItemRepository.save(item);
        }

        return toResponse(cartRepository.findById(cart.getId()).orElseThrow());
    }

    @Override
    public CartResponse removeItem(String userEmail, Long cartItemId) {
        Cart cart = getOrCreateCart(userEmail);
        CartItem item = findOwnedItem(cart, cartItemId);
        cart.removeItem(item);
        cartItemRepository.delete(item);
        return toResponse(cartRepository.findById(cart.getId()).orElseThrow());
    }

    @Override
    public CartResponse clearCart(String userEmail) {
        Cart cart = getOrCreateCart(userEmail);
        cart.getItems().clear();
        cartRepository.save(cart);
        return toResponse(cart);
    }

    private CartItem findOwnedItem(Cart cart, Long cartItemId) {
        return cart.getItems().stream()
                .filter(i -> i.getId().equals(cartItemId))
                .findFirst()
                .orElseThrow(() -> new ResourceNotFoundException("Cart item not found with id: " + cartItemId));
    }

    private Cart getOrCreateCart(String userEmail) {
        User user = userRepository.findByEmail(userEmail)
                .orElseThrow(() -> new ResourceNotFoundException("User not found: " + userEmail));

        return cartRepository.findByUserId(user.getId())
                .orElseGet(() -> cartRepository.save(Cart.builder().user(user).build()));
    }

    private CartResponse toResponse(Cart cart) {
        List<CartItemResponse> items = cart.getItems().stream()
                .map(item -> CartItemResponse.builder()
                        .id(item.getId())
                        .productId(item.getProduct().getId())
                        .productName(item.getProduct().getName())
                        .unitPrice(item.getProduct().getPrice())
                        .quantity(item.getQuantity())
                        .subtotal(item.getProduct().getPrice().multiply(BigDecimal.valueOf(item.getQuantity())))
                        .build())
                .toList();

        BigDecimal total = items.stream()
                .map(CartItemResponse::getSubtotal)
                .reduce(BigDecimal.ZERO, BigDecimal::add);

        return CartResponse.builder()
                .cartId(cart.getId())
                .items(items)
                .totalAmount(total)
                .build();
    }
}
