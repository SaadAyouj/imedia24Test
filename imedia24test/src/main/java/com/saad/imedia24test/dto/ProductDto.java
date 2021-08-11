package com.saad.imedia24test.dto;

import com.saad.imedia24test.model.Product;
import lombok.Builder;
import lombok.Data;
import java.math.BigDecimal;

@Builder
@Data
public class ProductDto {

    private Integer id;

    private String name;

    private String description;

    private String codeProduct;

    private BigDecimal price;

    private CategoryDto category;

    public static ProductDto fromEntity(Product product) {
        if (product == null) {
            return null;
        }

        return ProductDto.builder()
                .id(product.getId())
                .name(product.getName())
                .description(product.getDescription())
                .codeProduct(product.getCodeProduct())
                .price(product.getPrice())
                .category(CategoryDto.fromEntity(product.getCategory()))
                .build();
    }

    public static Product toEntity(ProductDto productDto) {
        if (productDto == null) {
            return null;
        }
        Product product = new Product();
        product.setId(productDto.getId());
        product.setName(productDto.getName());
        product.setDescription(productDto.getDescription());
        product.setCodeProduct(productDto.getCodeProduct());
        product.setPrice(productDto.getPrice());
        product.setCategory(CategoryDto.toEntity(productDto.getCategory()));
        return product;
    }
}
