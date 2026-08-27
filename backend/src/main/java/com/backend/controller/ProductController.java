package com.yoghurtshop.backend.controller;

import com.yoghurtshop.backend.dto.response.ProductResponse;
import com.yoghurtshop.backend.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/products")
@RequiredArgsConstructor
public class ProductController {

    private final ProductService productService;

    @GetMapping
    public ResponseEntity<Page<ProductResponse>> getAll(
            @RequestParam(required = false) Long categoryId,
            @RequestParam(required = false) String search,
            Pageable pageable) {

        if (categoryId != null) {
            return ResponseEntity.ok(productService.getByCategory(categoryId, pageable));
        }
        if (search != null && !search.isBlank()) {
            return ResponseEntity.ok(productService.search(search, pageable));
        }
        return ResponseEntity.ok(productService.getAll(pageable));
    }

    @GetMapping("/{id}")
    public ResponseEntity<ProductResponse> getById(@PathVariable Long id) {
        return ResponseEntity.ok(productService.getById(id));
    }
}
