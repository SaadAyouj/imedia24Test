import React, {useState} from 'react'
import Axios from 'axios';
import * as ReactBootStrap from "react-bootstrap"

const AddCategory = () => {

    const url = "http://localhost:8081/imedia/v1/categories/create";

    const [category, setCategory] = useState({
        name: "",
        code: "",
    })

    function handle(e) {
       const newCategory = {...category}
       newCategory[e.target.id] = e.target.value
       setCategory(newCategory)
       console.log(newCategory)
    }

    function handleSubmit(e) {
        e.preventDefault();
        Axios.post(url, {
            name: category.name,
            code: category.code,
        })
        .then(res => {
            console.log(res.data);
        })
    }

    return (
        <div style={{textAlign: "left"}}>
            <ReactBootStrap.Container>
           <ReactBootStrap.Form style={{marginTop: "50px"}}>
            <ReactBootStrap.Form.Group className="mb-3">
                <ReactBootStrap.Form.Label>Category Name</ReactBootStrap.Form.Label>
                <ReactBootStrap.Form.Control id="name" onChange={(e)=>handle(e)} value={category.name} type="text" placeholder="Enter category name" />
            </ReactBootStrap.Form.Group>

            <ReactBootStrap.Form.Group className="mb-3">
                <ReactBootStrap.Form.Label>Category Code</ReactBootStrap.Form.Label>
                <ReactBootStrap.Form.Control id="code" onChange={(e)=>handle(e)} value={category.code}  type="text" placeholder="Enter category code" />
                <ReactBootStrap.Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </ReactBootStrap.Form.Text>
            </ReactBootStrap.Form.Group>

            <ReactBootStrap.Button onClick={handleSubmit} variant="primary" type="submit" style={{marginTop:"20px"}}>
                ADD
            </ReactBootStrap.Button>
            </ReactBootStrap.Form>
            </ReactBootStrap.Container>
        </div>
    )
}

export default AddCategory
