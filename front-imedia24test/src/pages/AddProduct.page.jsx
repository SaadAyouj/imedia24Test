import React, {useState, useEffect} from 'react'
import * as ReactBootStrap from "react-bootstrap"
import Axios from 'axios';

const AddProduct = () => {

    const url = "http://localhost:8081/imedia/v1/products/create";

    const [product, setProduct] = useState({
        name: "",
        description: "",
        codeProduct: "",
        price: "",
        category: {
            id: ""
        }
    })

    function handle(e) {
       const newProduct = {...product}
       newProduct[e.target.id] = e.target.value
       setProduct(newProduct)
       console.log(newProduct)
    }

    function handleSubmit(e) {
        e.preventDefault();
        Axios.post(url, {
            name: product.name,
            description: product.description,
            codeProduct: product.codeProduct,
            price: product.price,
            category: product.category.id
        })
        .then(res => {
            console.log(res.data);
            alert("Product added successfully !")
        })
    }


    useEffect(() => {
        fetchCategories();
      }, []);
    
      const [categories, setCategories] = useState([]);

      const fetchCategories = async () => {
        const data = await fetch (
          'http://localhost:8081/imedia/v1/categories/all'
        );
    
        const categories = await data.json();
        setCategories(categories);
      }

   
    return (
        <div style={{textAlign: "left"}}>
            <ReactBootStrap.Container>
           <ReactBootStrap.Form style={{marginTop: "50px"}}>
            <ReactBootStrap.Form.Group className="mb-3">
                <ReactBootStrap.Form.Label>Product Name</ReactBootStrap.Form.Label>
                <ReactBootStrap.Form.Control id="name" onChange={(e)=>handle(e)} value={product.name} type="text" placeholder="Enter product name" />
            </ReactBootStrap.Form.Group>

            <ReactBootStrap.Form.Group className="mb-3">
                <ReactBootStrap.Form.Label>Product Code</ReactBootStrap.Form.Label>
                <ReactBootStrap.Form.Control id="codeProduct" onChange={(e)=>handle(e)} value={product.codeProduct}  type="text" placeholder="Enter product code" />
                <ReactBootStrap.Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </ReactBootStrap.Form.Text>
            </ReactBootStrap.Form.Group>

            <ReactBootStrap.Form.Group className="mb-3" >
                <ReactBootStrap.Form.Label>Product Description</ReactBootStrap.Form.Label>
                <ReactBootStrap.Form.Control id="description" onChange={(e)=>handle(e)} value={product.description}  as="textarea" rows={3} />
            </ReactBootStrap.Form.Group>

            <ReactBootStrap.Form.Group className="mb-3">
                <ReactBootStrap.Form.Label>Product Price</ReactBootStrap.Form.Label>
                <ReactBootStrap.Form.Control id="price" onChange={(e)=>handle(e)} value={product.price}  type="text" placeholder="Enter product price" />
            </ReactBootStrap.Form.Group>
            
            <ReactBootStrap.Form.Label>Categories</ReactBootStrap.Form.Label>
            <ReactBootStrap.Form.Select id="id" onChange={(e)=>handle(e)} value={product.category.id}  aria-label="categories">
                <option>Select a category for the product</option>
                {categories.map(category => (
                 <option key={category.id} value={category.id}>{category.name}</option>  
                ))}
                
            </ReactBootStrap.Form.Select>

            <ReactBootStrap.Button onClick={handleSubmit} variant="primary" type="submit" style={{marginTop:"20px"}}>
                ADD
            </ReactBootStrap.Button>
            </ReactBootStrap.Form>
            </ReactBootStrap.Container>
        </div>
    )
}

export default AddProduct
