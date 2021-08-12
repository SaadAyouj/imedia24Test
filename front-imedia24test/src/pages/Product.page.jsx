import React, { useState, useEffect } from 'react'
import * as ReactBootStrap from "react-bootstrap"
import Axios from 'axios'

const Product = ({ match }) => {
    useEffect(() => {
        fetchProduct();
        
      });
      useEffect(() => {
        getCurrency();
      }, []);
    
      const [country, setCountry] = useState([]);

      const [product, setProduct] = useState({
          category: {}
      });

      const [priceConverted, setPriceConverted] = useState();
      const [currVal, setCurrVal] = useState();
    
      const fetchProduct = async () => {
        const fetchProduct = await fetch (
            `http://localhost:8081/imedia/v1/products/${match.params.id}`
        );
        const product = await fetchProduct.json();
        setProduct(product);    
      }

      const getCurrency = async () => {
        const result = await Axios.get("http://data.fixer.io/api/latest?access_key=60d84d1a4ea136a9d397cacb18294e50")
        console.log(result.data);
        setCountry(result.data.rates);
      }

      function convert(e) {
        e.preventDefault();
        const price = product.price;
        let num =(price / 1) * currVal;
        console.log(price);
        console.log(currVal);
        setPriceConverted(num);
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
              Price: {priceConverted}
              </ReactBootStrap.Card.Text>
                <ReactBootStrap.Form.Select aria-label="currency" onChange={convert}>
                  <option>Select a currency</option>
                  {Object.keys(country).map((value, index) => 
                  <option key={index} value={country[value]}>{value}</option>  
                  )}
              </ReactBootStrap.Form.Select>
            </ReactBootStrap.Card.Body>
          </ReactBootStrap.Card>
        </div>  
       )   
}       

export default Product
