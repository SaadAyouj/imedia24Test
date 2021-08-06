package com.saad.imedia24test.controller.api;

import java.util.List;

import static com.saad.imedia24test.utils.Constants.APP_ROOT;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

import com.saad.imedia24test.dto.CategoryDto;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@Api(APP_ROOT + "/categories")
public interface CategoryApi {

    @PostMapping(value = APP_ROOT + "/categories/create", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    @ApiOperation(value = "Register a category", notes = "This method is for register and save category", response =
            CategoryDto.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Object Category saved/modified"),
            @ApiResponse(code = 400, message = "Oject Category not valid")
    })
    CategoryDto save(@RequestBody CategoryDto dto);

    @GetMapping(value = APP_ROOT + "/categories/{idCategory}", produces = MediaType.APPLICATION_JSON_VALUE)
    @ApiOperation(value = "Search category by ID", notes = "This method is for searching the category by ID", response =
            CategoryDto.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Category found in the DB"),
            @ApiResponse(code = 404, message = "None category found in the DB with the ID given")
    })
    CategoryDto findById(@PathVariable("idCategory") Integer idCategory);

    @GetMapping(value = APP_ROOT + "/categories/filter/{codeCategory}", produces = MediaType.APPLICATION_JSON_VALUE)
    @ApiOperation(value = "Search category by CODE", notes = "This method is for searching the category by his CODE", response =
            CategoryDto.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "The category is found in the DB"),
            @ApiResponse(code = 404, message = "None category found in the DB with the CODE given")
    })
    CategoryDto findByCode(@PathVariable("codeCategory") String codeCategory);

    @GetMapping(value = APP_ROOT + "/categories/all", produces = MediaType.APPLICATION_JSON_VALUE)
    @ApiOperation(value = "Show the category list", notes = "This methode search and show the list of the existing categories "
            + "in the DB", responseContainer = "List<CategoryDto>")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Category List / Empty list")
    })
    List<CategoryDto> findAll();

    @DeleteMapping(value = APP_ROOT + "/categories/delete/{idCategory}")
    @ApiOperation(value = "Delete a category", notes = "This method is for deleting a category by ID")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "The category has been deleted")
    })
    void delete(@PathVariable("idCategory") Integer id);

}
