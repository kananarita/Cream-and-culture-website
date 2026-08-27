package com.yoghurtshop.backend.controller;

import com.yoghurtshop.backend.dto.request.CartItemRequest;
import com.yoghurtshop.backend.dto.response.CartResponse;
import com.yoghurtshop.backend.service.CartService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/cart")
@RequiredArgsConstructor
public class CartController {

    private final CartService cartService;

    @GetMapping
    public ResponseEntity<CartResponse> getCart(Authentication authentication) {
        return ResponseEntity.ok(cartService.getCart(authentication.getName()));
    }

    @PostMapping("/items")
    public ResponseEntity<CartResponse> addItem(Authentication authentication,
                                                 @Valid @RequestBody CartItemRequest request) {
        return ResponseEntity.ok(cartService.addItem(authentication.getName(), request));
    }

    @PutMapping("/items/{cartItemId}")
    public ResponseEntity<CartResponse> updateItem(Authentication authentication,
                                                     @PathVariable Long cartItemId,
                                                     @RequestParam Integer quantity) {
        return ResponseEntity.ok(cartService.updateItem(authentication.getName(), cartItemId, quantity));
    }

    @DeleteMapping("/items/{cartItemId}")
    public ResponseEntity<CartResponse> removeItem(Authentication authentication, @PathVariable Long cartItemId) {
        return ResponseEntity.ok(cartService.removeItem(authentication.getName(), cartItemId));
    }

    @DeleteMapping
    public ResponseEntity<CartResponse> clearCart(Authentication authentication) {
        return ResponseEntity.ok(cartService.clearCart(authentication.getName()));
    }
}
