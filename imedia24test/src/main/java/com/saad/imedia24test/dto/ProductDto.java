package com.saad.imedia24test.dto;

import com.saad.imedia24test.model.Category;
import lombok.Builder;
import lombok.Data;

import javax.persistence.Column;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import java.math.BigDecimal;

@Builder
@Data
public class ProductDto {

    private String name;

    private String description;

    private String code;

    private BigDecimal price;

    private String picture;

    private CategoryDto category;
}
