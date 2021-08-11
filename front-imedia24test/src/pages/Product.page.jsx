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
        <div className="page">
          <ReactBootStrap.Card>
            <ReactBootStrap.Card.Img height="400vh" variant="top" src="https://micoedward.com/wp-content/uploads/2018/04/Love-your-product-2.jpg" />
            <ReactBootStrap.Card.Body>
            <ReactBootStrap.Card.Title>{product.name}</ReactBootStrap.Card.Title>
              <ReactBootStrap.Card.Text>
                Description: {product.description}
              </ReactBootStrap.Card.Text>
              <ReactBootStrap.Card.Text>
              Price: {product.price}
              </ReactBootStrap.Card.Text>
            </ReactBootStrap.Card.Body>
          </ReactBootStrap.Card>
        </div>  
       )   
}       

export default Product
