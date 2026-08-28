package com.backend.controller;

import com.backend.dto.request.CheckoutRequest;
import com.backend.dto.response.OrderResponse;
import com.backend.service.OrderService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/orders")
@RequiredArgsConstructor
public class OrderController {

    private final OrderService orderService;

    @PostMapping("/checkout")
    public ResponseEntity<OrderResponse> checkout(Authentication authentication,
                                                    @Valid @RequestBody CheckoutRequest request) {
        return ResponseEntity.status(HttpStatus.CREATED).body(orderService.checkout(authentication.getName(), request));
    }

    @GetMapping
    public ResponseEntity<Page<OrderResponse>> getMyOrders(Authentication authentication, Pageable pageable) {
        return ResponseEntity.ok(orderService.getOrdersForUser(authentication.getName(), pageable));
    }

    @GetMapping("/{id}")
    public ResponseEntity<OrderResponse> getMyOrder(Authentication authentication, @PathVariable Long id) {
        return ResponseEntity.ok(orderService.getOrderForUser(authentication.getName(), id));
    }
}
