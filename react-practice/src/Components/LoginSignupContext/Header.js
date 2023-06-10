import { useContext } from "react";
import loginContext from "./Context";


var divStyle = {
  backgroundColor: "black",
  padding: "13px",
  color: "white",
  display: "flex",
  justifyContent: "space-between",
};
var astyle = {
  color: "white",
  textDecoration: "none",
  marginRight: "50px",
};
function Header() {
  const {state,fnloggedOut} = useContext(loginContext);
  return (
    <div style={divStyle}>
      <div>
        <span style={{ fontSize: "25px" }}>React </span>
      </div>
      <div>
        <a style={astyle} href="#">Home </a>
        <a style={astyle} href="profile">Profile</a>
        <a style={astyle} href="#">Product</a>
        <a style={astyle} href="todo">Todo</a>

        <span style={{ marginRight: "30px", color: "green", fontSize: "20px" }}>{state.user}</span>
           <button style={{ marginRight: "50px" }}  onClick={() => {fnloggedOut()}}> LogOut </button>
      </div>
    </div>
  );
}

export default Header;
