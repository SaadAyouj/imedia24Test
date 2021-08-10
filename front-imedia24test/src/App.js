import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BackOffice from './pages/BackOffice.page';
import HomePage from "./pages/Home.page";
import About from "./pages/About.page";
import Product from "./pages/Product.page";
import ProductByCategory from "./pages/ProductsByCategory.component"
import Nav from "./components/home-components/Nav.component";
import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
          <Switch>
            <Route path="/" exact component={HomePage} /> 
            <Route path="/back-office" component={BackOffice} /> 
            <Route path="/about" component={About} />
            <Route path="/products/:id" exact component={Product} />
            <Route path="/products/filter/category/:id" exact component={ProductByCategory} />
          </Switch>
      </Router>
    </div>
   
  );
}

export default App;
