import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BackOffice from './pages/BackOffice.page';
import HomePage from "./pages/Home.page";
import About from "./pages/About.page";
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
          </Switch>
      </Router>
    </div>
   
  );
}

export default App;
