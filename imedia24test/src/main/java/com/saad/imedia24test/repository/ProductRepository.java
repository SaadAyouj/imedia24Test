package com.saad.imedia24test.repository;

import com.saad.imedia24test.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface ProductRepository extends JpaRepository<Product, Integer> {

    Optional<Product> findProductByCodeProduct(String codeProduct);

    List<Product> findAllByCategoryId(Integer idCategory);

}
