package com.saad.imedia24test.validator;

import org.springframework.util.StringUtils;
import com.saad.imedia24test.dto.CategoryDto;

import java.util.ArrayList;
import java.util.List;

public class CategoryValidator {

    public static List<String> validate(CategoryDto categoryDto) {
        List<String> errors = new ArrayList<>();

        if (categoryDto == null || !StringUtils.hasLength(categoryDto.getName())){
            errors.add("Please enter the name of the category");
        }

        if (categoryDto == null || !StringUtils.hasLength(categoryDto.getCode())){
            errors.add("Please enter the code of the category");
        }
        return errors;
    }
}
