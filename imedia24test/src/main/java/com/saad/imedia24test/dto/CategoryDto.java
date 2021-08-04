package com.saad.imedia24test.dto;

import com.saad.imedia24test.model.Product;
import lombok.Builder;
import lombok.Data;

import javax.persistence.Column;
import javax.persistence.OneToMany;
import java.util.List;

@Builder
@Data
public class CategoryDto {

    private String name;

    private String code;

    private List<ProductDto> products;
}
