import * as ReactBootStrap from "react-bootstrap"
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Axios from "axios"

const CategoryList = () => {

    const mystyle = {
        marginTop: "30px",
        marginLeft: "10px",
        marginBottom: "30px"
      };
      
      const deleteCategory = async (id) => {
          await Axios.delete(`http://localhost:8081/imedia/v1/categories/delete/${id}`);
          fetchCategories();
      }

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
                <ReactBootStrap.ListGroup.Item variant="dark">SHOW PRODUCTS BY CATEGORY</ReactBootStrap.ListGroup.Item>
                {categories.map(category => (
                  <>
                <ReactBootStrap.ListGroup.Item key={category.id}>
                    <Link style={{textDecoration: "none", fontWeight: "bold"}} to={`/products/filter/category/${category.id}`}>
                       {category.name}
                    </Link>
                </ReactBootStrap.ListGroup.Item>
                <ReactBootStrap.Button variant="danger" onClick={() => {deleteCategory (category.id)} }>
                 Delete this category
                </ReactBootStrap.Button>
                </>
                ))}
                <ReactBootStrap.ListGroup.Item variant="dark">
                    ACTIONS
                  </ReactBootStrap.ListGroup.Item>
                  <Link to={'/categories/create'} style={{color: "white", textDecoration: "none"}}>
                    <ReactBootStrap.ListGroup.Item style={{ cursor: "pointer" }} variant="primary">
                      <AddCircleOutlineIcon /> Add a Category
                    </ReactBootStrap.ListGroup.Item>
                  </Link>
                  <Link to={'/create'} style={{color: "white", textDecoration: "none"}}>
                    <ReactBootStrap.ListGroup.Item style={{ cursor: "pointer" }} variant="primary">
                      <AddCircleOutlineIcon /> Add a Product
                    </ReactBootStrap.ListGroup.Item>
                  </Link>  
            </ReactBootStrap.ListGroup>
            
        </div>
    )
}


export default CategoryList
