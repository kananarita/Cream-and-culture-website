package com.backend.service;

import com.backend.dto.request.CartItemRequest;
import com.backend.dto.response.CartResponse;

public interface CartService {
    CartResponse getCart(String userEmail);
    CartResponse addItem(String userEmail, CartItemRequest request);
    CartResponse updateItem(String userEmail, Long cartItemId, Integer quantity);
    CartResponse removeItem(String userEmail, Long cartItemId);
    CartResponse clearCart(String userEmail);
}
