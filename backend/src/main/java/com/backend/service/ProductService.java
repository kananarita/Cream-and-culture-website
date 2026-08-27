package com.yoghurtshop.backend.service;

import com.yoghurtshop.backend.dto.request.ProductRequest;
import com.yoghurtshop.backend.dto.response.ProductResponse;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface ProductService {
    Page<ProductResponse> getAll(Pageable pageable);
    Page<ProductResponse> getByCategory(Long categoryId, Pageable pageable);
    Page<ProductResponse> search(String name, Pageable pageable);
    ProductResponse getById(Long id);
    ProductResponse create(ProductRequest request);
    ProductResponse update(Long id, ProductRequest request);
    void delete(Long id);
}
