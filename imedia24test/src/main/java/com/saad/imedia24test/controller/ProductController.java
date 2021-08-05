package com.saad.imedia24test.controller;

import com.saad.imedia24test.controller.api.ProductApi;
import com.saad.imedia24test.dto.ProductDto;
import com.saad.imedia24test.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ProductController implements ProductApi {

    private ProductService productService;

    @Autowired
    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @Override
    public ProductDto save(ProductDto dto) {
        return productService.save(dto);
    }

    @Override
    public ProductDto findById(Integer id) {
        return productService.findById(id);
    }

    @Override
    public ProductDto findByCodeProduct(String codeProduct) {
        return productService.findByCodeProduct(codeProduct);
    }

    @Override
    public List<ProductDto> findAll() {
        return productService.findAll();
    }

    @Override
    public void delete(Integer id) {
        productService.delete(id);
    }
}
