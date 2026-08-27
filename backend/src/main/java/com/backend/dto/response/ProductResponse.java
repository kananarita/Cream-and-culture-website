package com.yoghurtshop.backend.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ProductResponse {
    private Long id;
    private String name;
    private String description;
    private String flavor;
    private String size;
    private BigDecimal price;
    private Integer stockQuantity;
    private String imageUrl;
    private boolean active;
    private Long categoryId;
    private String categoryName;
}
