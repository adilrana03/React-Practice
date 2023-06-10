import React, { useState, useContext } from 'react'
import loginContext from './Context';

var loginStyle = {
  width: "300px",
  padding: "30px",
  textAlign: "center",
  boxShadow: "0 0 10px black",
  margin: "50px auto",
};






const Login = () => {

  const {setState} = useContext(loginContext);

  const [input, setInput] = useState({
    name: "",
    password: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.name === "Adil" && input.password === "123") {
      setState({
        isLoggedIn:true,
        user:"Adil Rana"
      })
    } else {
      console.log("Wrong name")
      alert("wrong credentials")
    }
  }



  return (
    <div style={loginStyle}>
      <div>
        <h2>Login form</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="Enter Name"
              onChange={(e) => {
                setInput({
                  ...input,
                  name: e.target.value,
                });
              }}
            />
          </div>
          <br />
          <div>
            <input
              type="password"
              placeholder="Enter Password"
              onChange={(e) => {
                setInput({
                  ...input,
                  password: e.target.value,
                });
              }}
            />
          </div>
          <br />
          <div>
            <input type="submit" value="Login" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login