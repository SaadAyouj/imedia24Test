package com.saad.imedia24test.services.impl;

import com.saad.imedia24test.dto.ProductDto;
import com.saad.imedia24test.exception.EntityNotFoundException;
import com.saad.imedia24test.exception.ErrorCodes;
import com.saad.imedia24test.exception.InvalidEntityException;
import com.saad.imedia24test.repository.ProductRepository;
import com.saad.imedia24test.services.ProductService;
import com.saad.imedia24test.validator.ProductValidator;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Slf4j
public class ProductServiceImpl implements ProductService {

    private ProductRepository productRepository;

    @Autowired
    public ProductServiceImpl(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }
    @Override
    public ProductDto save(ProductDto dto) {

        List<String> errors = ProductValidator.Validator(dto);

        if (!errors.isEmpty()) {
            log.error("Product is not valid {}", dto);
            throw new InvalidEntityException("Invalid Product", ErrorCodes.PRODUCT_NOT_VALID, errors);
        }
        return ProductDto.fromEntity(
                productRepository.save(
                        ProductDto.toEntity(dto)
                )
        );
    }

    @Override
    public ProductDto findById(Integer id) {
        if (id == null) {
            log.error("Product ID is null");
            return null;
        }

        return productRepository.findById(id).map(ProductDto::fromEntity).orElseThrow(() ->
                new EntityNotFoundException(
                        "None product with ID = " + id + " found in the DB",
                        ErrorCodes.PRODUCT_NOT_FOUND)
        );
    }

    @Override
    public ProductDto findByCodeProduct(String codeProduct) {
        if (!StringUtils.hasLength(codeProduct)) {
            log.error("Product CODE is null");
            return null;
        }

        return productRepository.findProductByCodeProduct(codeProduct)
                .map(ProductDto::fromEntity)
                .orElseThrow(() ->
                        new EntityNotFoundException(
                                "None product with CODE = " + codeProduct + " found in the DB",
                                ErrorCodes.PRODUCT_NOT_FOUND)
                );
    }

    @Override
    public List<ProductDto> findAll() {
        return productRepository.findAll().stream()
                .map(ProductDto::fromEntity)
                .collect(Collectors.toList());
    }

    @Override
    public void delete(Integer id) {
        if (id == null) {
            log.error("Product ID is null");
            return;
        }
        productRepository.deleteById(id);
    }
}
