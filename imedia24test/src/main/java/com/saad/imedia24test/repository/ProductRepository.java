package com.saad.imedia24test.repository;

import com.saad.imedia24test.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface ProductRepository extends JpaRepository<Integer, Product> {

    Optional<Product> findArticleByCodeProduct(String codeProduct);

    List<Product> findAllByCategoryId(Integer idCategory);

}
