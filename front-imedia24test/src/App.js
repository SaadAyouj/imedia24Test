import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from "./pages/Home.page";
import About from "./pages/About.page";
import Product from "./pages/Product.page";
import AddProduct from "./pages/AddProduct.page";
import AddCategory from "./pages/AddCategory.page";
import ProductByCategory from "./pages/ProductsByCategory.component"
import Nav from "./components/home-components/Nav.component";
import './App.css';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';


function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Route render={({ location }) => (
          <TransitionGroup>
            <CSSTransition
              key={location.key}
              timeout={30000}
              classNames="fade"
            >
                <Switch location ={ location }>
                  <Route path="/" exact component={HomePage} /> 
                  <Route path="/about" component={About} />
                  <Route path="/create" exact component={AddProduct} />
                  <Route path="/products/:id" exact component={Product} />
                  <Route path="/products/filter/category/:id" exact component={ProductByCategory} />
                  <Route path="/categories/create" exact component={AddCategory} />
                </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
        />
      </Router>
    </div>
   
  );
}

export default App;
