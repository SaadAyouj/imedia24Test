package com.saad.imedia24test.validator;

import com.saad.imedia24test.dto.ProductDto;
import org.springframework.util.StringUtils;

import java.util.ArrayList;
import java.util.List;

public class ProductValidator {

    public static List<String> Validator(ProductDto dto){
        List<String> errors = new ArrayList<>();

        if (dto == null) {
            errors.add("Please enter the name of the product");
            errors.add("Please enter the price of the product");
            errors.add("Please enter the description of the product");
            errors.add("Please enter the picture of the product");
            errors.add("Please enter the code of the product");
            errors.add("Please select a category");
        }

        if (!StringUtils.hasLength(dto.getName())){
            errors.add("Please enter the name of the product");
        }

        if (dto.getPrice() == null){
            errors.add("Please enter the price of the product");
        }

        if (!StringUtils.hasLength(dto.getDescription())){
            errors.add("Please enter the description of the product");
        }

        if (!StringUtils.hasLength(dto.getCodeProduct())){
            errors.add("Please enter the code of the product");
        }

        if (dto.getCategory() == null || dto.getCategory().getId() == null){
            errors.add("Please select a category");
        }

        return errors;
    }
}
