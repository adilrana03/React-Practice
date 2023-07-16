import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

const ProductsDetails = () => {
        // const id = localStorage.getItem("id");

        const {id}=useParams();
        const [state, setState] = useState("");



        useEffect(() => {
                fetch(`http://fakestoreapi.com/products/${id}`)
                        .then((res) => res.json())
                        .then((data) => {
                                setState(data)
                                console.log(data);
                        })
        },[])

        return (
                <div>
                        <h1>Product Detail</h1>
                       
                        <div>
                                <h1>{state.title}</h1>
                                <img src={state.image} alt="a" /> 
                        </div>

                </div>
        )
}

export default ProductsDetails;