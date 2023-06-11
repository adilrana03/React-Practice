import React from "react";
import "./Nav.css";
import { Link } from 'react-router-dom';


function Nav() {
  return (
    <div className="nav">
      <Link to="profile">Profile</Link>
      <Link to="/timer">Timer</Link>
      <Link to="/">Home</Link>
      <Link to="/product">Products</Link>
      <Link to="todo">todo</Link>
      
    </div>
  );
}

export default Nav;







