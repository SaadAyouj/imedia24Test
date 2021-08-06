package com.saad.imedia24test.controller.api;

import com.saad.imedia24test.dto.CategoryDto;
import com.saad.imedia24test.dto.ProductDto;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import java.util.List;

import static com.saad.imedia24test.utils.Constants.APP_ROOT;

@Api(APP_ROOT + "/products")
public interface ProductApi {

    @PostMapping(value = APP_ROOT + "/products/create", consumes = MediaType.APPLICATION_JSON_VALUE, produces= MediaType.APPLICATION_JSON_VALUE)
    @ApiOperation(value = "Register a product", notes = "This method is for register and save product", response =
            CategoryDto.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Object product saved/modified"),
            @ApiResponse(code = 400, message = "Oject product not valid")
    })
    ProductDto save(ProductDto dto);

    @GetMapping(value = APP_ROOT + "products/{idProduct}", produces= MediaType.APPLICATION_JSON_VALUE)
    @ApiOperation(value = "Search product by ID", notes = "This method is for searching the product by ID", response =
            CategoryDto.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "product found in the DB"),
            @ApiResponse(code = 404, message = "None product found in the DB with the ID given")
    })
    ProductDto findById(@PathVariable("idProduct") Integer id);

    @GetMapping(value = APP_ROOT + "products/{codeProduct}", produces= MediaType.APPLICATION_JSON_VALUE)
    @ApiOperation(value = "Search product by CODE", notes = "This method is for searching the product by his CODE", response =
            CategoryDto.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "The product is found in the DB"),
            @ApiResponse(code = 404, message = "None product found in the DB with the CODE given")
    })
    ProductDto findByCodeProduct(@PathVariable("codeProduct") String codeProduct);

    @GetMapping(value = APP_ROOT + "products/all", produces= MediaType.APPLICATION_JSON_VALUE)
    @ApiOperation(value = "Show the product list", notes = "This methode search and show the list of the existing products "
            + "in the DB", responseContainer = "List<CategoryDto>")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Product List / Empty list")
    })
    List<ProductDto> findAll();

    @DeleteMapping(value = APP_ROOT + "/products/delete/{idProduct")
    @ApiOperation(value = "Delete a product", notes = "This method is for deleting a product by ID")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "The product has been deleted")
    })
    void delete(@PathVariable("idProduct") Integer id);
}
