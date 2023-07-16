import React, { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom';

function Electronic(props) {

  const [state, setState] = useState([]);
  useEffect(() => {
    fetch("http://fakestoreapi.com/products/category/electronics")
      .then((res) => res.json())
      .then((edata) => {
        setState(edata)
        console.log(edata)
      })
  }, [])

  const addtoLoaclStorage = (id) => {
    localStorage.setItem("id", id);
    console.log("function Working");
    console.log(id)
  }

  return (
    <div>
      <h2>Electronic Component</h2>
      <ul>
        {
          state.length > 0 ?
            state.map((e, i) => {
              return (
                <NavLink to={`/productDetails/${e.id}`}
                  // onClick={() => { addtoLoaclStorage(e.id) }}
                  >
                  <li key={i + 1} style={{ color: "blue" }}>
                    {e.title}
                  </li>
                </NavLink>
              )
            })
            : <h3>.....LOADING......</h3>
        }
      </ul>

    </div>
  );
}

export default Electronic;
