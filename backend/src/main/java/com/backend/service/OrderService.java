package com.backend.service;

import com.backend.dto.request.CheckoutRequest;
import com.backend.dto.response.OrderResponse;
import com.backend.enums.OrderStatus;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface OrderService {
    OrderResponse checkout(String userEmail, CheckoutRequest request);
    Page<OrderResponse> getOrdersForUser(String userEmail, Pageable pageable);
    OrderResponse getOrderForUser(String userEmail, Long orderId);

    // Admin
    Page<OrderResponse> getAllOrders(Pageable pageable);
    Page<OrderResponse> getOrdersByStatus(OrderStatus status, Pageable pageable);
    OrderResponse updateStatus(Long orderId, OrderStatus status);
}
