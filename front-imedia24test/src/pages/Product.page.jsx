import React, { useState, useEffect } from 'react'
import * as ReactBootStrap from "react-bootstrap"

const Product = ({ match }) => {
    useEffect(() => {
        fetchProduct();
      });
    
      const [product, setProduct] = useState({
          category: {}
      });
    
      const fetchProduct = async () => {
        const fetchProduct = await fetch (
            `http://localhost:8081/imedia/v1/products/${match.params.id}`
        );
        const product = await fetchProduct.json();
        setProduct(product);    
      }
      return (
        <div>
          <h1>{product.name}</h1>
        </div>  
       )   
}       

export default Product
