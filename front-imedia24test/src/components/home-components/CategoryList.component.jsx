import * as ReactBootStrap from "react-bootstrap"
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const CategoryList = () => {
    const mystyle = {
        marginTop: "30px",
        marginLeft: "10px",
        marginBottom: "30px"
      };

      useEffect(() => {
        fetchCategories();
      }, []);
    
      const [categories, setCategories] = useState([]);
    
      const fetchCategories = async () => {
        const data = await fetch (
          'http://localhost:8081/imedia/v1/categories/all'
        );
    
        const categories = await data.json();
        setCategories(categories);
      }

    return (
        <div style={mystyle}>
            <ReactBootStrap.ListGroup>
                <ReactBootStrap.ListGroup.Item variant="dark">Categories</ReactBootStrap.ListGroup.Item>
                {categories.map(category => (
                <ReactBootStrap.ListGroup.Item key={category.id}>
                    <Link to={`/products/filter/category/${category.id}`}>
                        {category.name}
                    </Link>
                </ReactBootStrap.ListGroup.Item>
            ))}
            </ReactBootStrap.ListGroup>
            
        </div>
    )
}

export default CategoryList
