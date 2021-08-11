import React from 'react'
import * as ReactBootStrap from "react-bootstrap"

const AboutPage = () => {
    const mystyle = {
        marginTop: "30px",
      };

    return (
        <div className="page" style={mystyle}>
            <ReactBootStrap.Row>
            <h1>About this application</h1> <small>made by Saad AYOUJ</small>
            </ReactBootStrap.Row>
            <ReactBootStrap.Row>
            <p style={{marginTop: "40px"}}>This application is using the following technologies:</p>  <br /> 
            </ReactBootStrap.Row>
            <ReactBootStrap.Row className="justify-content-md-center">
                <ReactBootStrap.Col md="auto">
                <p style={{marginTop: "40px"}}>
                    <span style={{color: "red"}}>For the BACK END:</span> <br />
                    - Spring ( jpa / web / security)<br />
                    - Maven<br />
                    - MySQL (i'm using MySQL Workbench)<br />
                    - Lombok<br />
                    - Swagger 2 / ui<br />
                    - JUnit 5<br />
                    - API Flickr (for storing pictures in cloud)<br />
                    - Postman<br />
                    -Git: GitHub<br />
                    <br />
                    and working with best practices like: <br />
                    - DTO<br />
                    - DAO<br />
                    - Implementations <br />
                    - Interfaces ...<br />
                    <br /> 
                </p>
                </ReactBootStrap.Col>
                <ReactBootStrap.Col md="auto">
                    <p style={{marginTop: "40px"}}>
                        <span style={{color: "red"}}>And for the FRONT END:</span><br />
                        - ReactJS ( Router / Hooks / ES6)<br />
                        - React Spring for the animations<br />
                        - React transition group<br />
                        - React BootStrap<br />
                        - API Fixer (for storing pictures in cloud)<br />
                        - Visual Code<br />
                    </p>
                </ReactBootStrap.Col>
            </ReactBootStrap.Row>
        </div>
    )
}

export default AboutPage
