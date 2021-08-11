import React from 'react'
import * as ReactBootStrap from "react-bootstrap"
import {Link} from 'react-router-dom'

const Nav = () => {
    const mystyle = {
        color: "white",
        textDecoration: "none",
        marginRight: "20px"
      };

    return (
        <div>
            <ReactBootStrap.Navbar bg="dark" variant="dark" expand="sm" fixed="top" sticky="top">
                <ReactBootStrap.Container>
                    <ReactBootStrap.Navbar.Brand>AYOUJ Saad <small style={{color: "grey", marginRight: "70px"}}>imedia24 test</small></ReactBootStrap.Navbar.Brand>
                    <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
                    <ReactBootStrap.Nav className="me-auto">
                        <ReactBootStrap.Nav.Link>
                            <Link to="/" style={mystyle}>All Products</Link>
                        </ReactBootStrap.Nav.Link>
                        <ReactBootStrap.Nav.Link>
                            <Link to="/about" style={mystyle}>About</Link>
                        </ReactBootStrap.Nav.Link>
                    </ReactBootStrap.Nav>
                    </ReactBootStrap.Navbar.Collapse>
                </ReactBootStrap.Container>
                </ReactBootStrap.Navbar>
        </div>
    )
}

export default Nav
