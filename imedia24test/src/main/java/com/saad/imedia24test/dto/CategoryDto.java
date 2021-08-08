package com.saad.imedia24test.dto;

import com.saad.imedia24test.model.Category;
import lombok.Builder;
import lombok.Data;
import java.util.List;
import java.util.stream.Collectors;

@Builder
@Data
public class CategoryDto {

    private Integer id;

    private String name;

    private String code;

    private List<ProductDto> products;

    public static CategoryDto fromEntity(Category category) {
        if (category == null) {
            return null;
            //Throw an exception
        }
        //Mapping from Category to CategoryDto
        return CategoryDto.builder()
                .id(category.getId())
                .code(category.getCode())
                .name(category.getName())
                .products(
                        category.getProducts() != null ?
                                category.getProducts().stream()
                                        .map(ProductDto::fromEntity)
                                        .collect(Collectors.toList()) : null
                )
                .build();
    }

    public static Category toEntity(CategoryDto categoryDto){
        if (categoryDto == null) {
            return null;
            //Throw Exception
        }

        //Mapping from CategoryDto to Category
        Category category = new Category();
        category.setId(categoryDto.getId());
        category.setCode(categoryDto.getCode());
        category.setName(categoryDto.getName());

        return category;
    }
}
