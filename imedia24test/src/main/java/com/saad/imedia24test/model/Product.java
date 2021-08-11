package com.saad.imedia24test.model;

import lombok.*;

import javax.persistence.*;
import java.math.BigDecimal;


@EqualsAndHashCode()
@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity

@Table(name = "product")
public class Product extends AbstractEntity{

    @Column(name = "name")
    private String name;

    @Column(name = "description")
    private String description;

    @Column(name = "codeProduct")
    private String codeProduct;

    @Column(name = "price")
    private BigDecimal price;

    @ManyToOne
    @JoinColumn(name = "idCategory")
    private Category category;
}
