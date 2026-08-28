package com.backend.controller;

import com.backend.dto.request.UpdateOrderStatusRequest;
import com.backend.dto.response.OrderResponse;
import com.backend.enums.OrderStatus;
import com.backend.service.OrderService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/admin/orders")
@RequiredArgsConstructor
public class AdminOrderController {

    private final OrderService orderService;

    @GetMapping
    public ResponseEntity<Page<OrderResponse>> getAll(@RequestParam(required = false) OrderStatus status,
                                                        Pageable pageable) {
        if (status != null) {
            return ResponseEntity.ok(orderService.getOrdersByStatus(status, pageable));
        }
        return ResponseEntity.ok(orderService.getAllOrders(pageable));
    }

    @PatchMapping("/{id}/status")
    public ResponseEntity<OrderResponse> updateStatus(@PathVariable Long id,
                                                        @Valid @RequestBody UpdateOrderStatusRequest request) {
        return ResponseEntity.ok(orderService.updateStatus(id, request.getStatus()));
    }
}
