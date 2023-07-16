import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

function Jewelery(props) {

    const [state, setState] = useState([]);

    useEffect(() => {
        fetch("http://fakestoreapi.com/products/category/jewelery")
            .then((res) => res.json())
            .then((jdata) => setState(jdata))
    })
    const addtoLocalStorage=(id)=>{
        localStorage.setItem("id", id)
    }



    return (
        <div>
            <h1>
                JEWELERY COMPONENT
            </h1>
            <ul>
                {
                    state.length > 0 ? (
                        state.map((e, i) => {
                            return (
                                <NavLink to={`/productDetails/${e.id}`} style={{ color: "blue" }}
                                //  onClick={()=>{addtoLocalStorage(e.id)}}
                                 >
                                    <li key={i + 1}>{e.title}</li>
                                </NavLink>
                            )
                        })
                    ) : <h3>.....LOADING......</h3>

                }
            </ul>
        </div>
    );
}

export default Jewelery;