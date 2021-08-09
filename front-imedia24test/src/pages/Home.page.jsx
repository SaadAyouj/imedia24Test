import React from 'react'
import CategoryList from '../components/home-components/CategoryList.component';
import ProductList from '../components/home-components/ProductList.component'
import * as ReactBootStrap from "react-bootstrap"

const HomePage = () => {
  const mystyle = {
    marginTop: "30px",
  };

  return (
    <div style={mystyle}>
      <ReactBootStrap.Row>
        <ReactBootStrap.Col sm={3}>
          <CategoryList />
        </ReactBootStrap.Col>
        <ReactBootStrap.Col sm={9}>
          <ProductList />
        </ReactBootStrap.Col>
      </ReactBootStrap.Row>
    </div>
  )
}

export default HomePage
