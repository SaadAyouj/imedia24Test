package com.saad.imedia24test.controller;

import com.saad.imedia24test.controller.api.ProductApi;
import com.saad.imedia24test.dto.ProductDto;
import com.saad.imedia24test.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ProductController implements ProductApi {

    @Autowired
    private ProductService productService;

    @Autowired
    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @Override
    public ProductDto save(ProductDto dto) {
        return null;
    }

    @Override
    public ProductDto findById(Integer id) {
        return null;
    }

    @Override
    public ProductDto findByCodeProduct(String codeProduct) {
        return null;
    }

    @Override
    public List<ProductDto> findAll() {
        return null;
    }

    @Override
    public void delete(Integer id) {

    }
}
