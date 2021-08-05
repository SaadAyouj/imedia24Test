package com.saad.imedia24test.controller.api;

import com.saad.imedia24test.dto.ProductDto;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.List;

import static com.saad.imedia24test.utils.Constants.APP_ROOT;

public interface ProductApi {

    @PostMapping(value = APP_ROOT + "/products/create", consumes = MediaType.APPLICATION_JSON_VALUE, produces= MediaType.APPLICATION_JSON_VALUE)
    ProductDto save(ProductDto dto);

    @GetMapping(value = APP_ROOT + "products/{idProduct}", produces= MediaType.APPLICATION_JSON_VALUE)
    ProductDto findById(@PathVariable("idProduct") Integer id);

    @GetMapping(value = APP_ROOT + "products/{codeProduct}", produces= MediaType.APPLICATION_JSON_VALUE)
    ProductDto findByCodeProduct(@PathVariable("codeProduct") String codeProduct);

    @GetMapping(value = APP_ROOT + "products/all", produces= MediaType.APPLICATION_JSON_VALUE)
    List<ProductDto> findAll();

    @DeleteMapping(value = APP_ROOT + "/products/delete/{idProduct")
    void delete(@PathVariable("idProduct") Integer id);
}
