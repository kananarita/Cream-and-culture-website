package com.yoghurtshop.backend.service;

import com.yoghurtshop.backend.dto.request.CategoryRequest;
import com.yoghurtshop.backend.dto.response.CategoryResponse;

import java.util.List;

public interface CategoryService {
    List<CategoryResponse> getAll();
    CategoryResponse create(CategoryRequest request);
    CategoryResponse update(Long id, CategoryRequest request);
    void delete(Long id);
}
