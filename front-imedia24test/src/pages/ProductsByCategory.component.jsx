import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import * as ReactBootStrap from "react-bootstrap"

const ProductByCategory = ({ match }) => {
  useEffect(() => {
    fetchProductsCat();
    console.log(match);
  });

  const [productsCat, setProductsCat] = useState([]);

  const fetchProductsCat = async () => {
    const data = await fetch (
        `http://localhost:8081/imedia/v1/products/filter/category/${match.params.id}`
    );

    const productsCat = await data.json();
    setProductsCat(productsCat);
    console.log(productsCat);
  }
  return (
    <div>
      <h1>Product List by category</h1>
      <ReactBootStrap.Row>
      {productsCat.map(product => (
        <ReactBootStrap.Col key={product.id} style={{ margin: '20px' }}>
           <ReactBootStrap.Card style={{ width: '18rem' }}>
            <ReactBootStrap.Card.Img variant="top" src="https://micoedward.com/wp-content/uploads/2018/04/Love-your-product-2.jpg" fluid={true} alt="Card image"/>
            <ReactBootStrap.Card.Body>
              <ReactBootStrap.Card.Title>{product.name}</ReactBootStrap.Card.Title>
              <ReactBootStrap.Card.Text>
              {product.description}
              </ReactBootStrap.Card.Text>
              <ReactBootStrap.Card.Text>
              {product.price}
              </ReactBootStrap.Card.Text>
              <ReactBootStrap.Button variant="primary">
                <Link to={`/products/${product.id}`} style={{color: "white", textDecoration: "none"}}>
                 Show Details
                </Link>
              </ReactBootStrap.Button>
            </ReactBootStrap.Card.Body>
          </ReactBootStrap.Card>          
          </ReactBootStrap.Col>
      ))}
      </ReactBootStrap.Row>
    </div>
  )
}

export default ProductByCategory
