package com.saad.imedia24test.services;

import com.saad.imedia24test.dto.ProductDto;

import java.util.List;

public interface ProductService {

    ProductDto save(ProductDto dto);

    ProductDto findById(Integer id);

    ProductDto findByCodeProduct(String codeProduct);

    List<ProductDto> findAll();

    List<ProductDto> findAllProductByIdCategory(Integer idCategory);

    void delete(Integer id);
}
