package com.saad.imedia24test.repository;

import com.saad.imedia24test.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CategoryRepository extends JpaRepository<Integer, Category> {

    Optional<Category> findCategoryByCode(String code);
}

