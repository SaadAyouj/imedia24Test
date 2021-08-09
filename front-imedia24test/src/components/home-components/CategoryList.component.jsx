import React from 'react'
import * as ReactBootStrap from "react-bootstrap"

const CategoryList = () => {
    const mystyle = {
        marginTop: "30px",
        marginLeft: "10px"
      };

    return (
        <div style={mystyle}>
            <ReactBootStrap.ListGroup>
                <ReactBootStrap.ListGroup.Item variant="dark">Categories</ReactBootStrap.ListGroup.Item>
                <ReactBootStrap.ListGroup.Item>Dapibus ac facilisis in</ReactBootStrap.ListGroup.Item>
                <ReactBootStrap.ListGroup.Item>Morbi leo risus</ReactBootStrap.ListGroup.Item>
                <ReactBootStrap.ListGroup.Item>Porta ac consectetur ac</ReactBootStrap.ListGroup.Item>
                <ReactBootStrap.ListGroup.Item>Vestibulum at eros</ReactBootStrap.ListGroup.Item>
            </ReactBootStrap.ListGroup>
        </div>
    )
}

export default CategoryList
