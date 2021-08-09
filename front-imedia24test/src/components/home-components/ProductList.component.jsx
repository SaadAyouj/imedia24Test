import React, { useState, useEffect } from 'react'

const ProductList = () => {
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const data = await fetch (
      'http://localhost:8081/imedia/v1/products/all'
    );

    const products = await data.json();
    console.log(products);
  }
  return (
    <div>
      <h1>Product List</h1>
    </div>
  )
}

export default ProductList
