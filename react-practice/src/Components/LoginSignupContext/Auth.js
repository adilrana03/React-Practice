import {useContext } from "react";
import Login from "./Login";
import Home from "./Home";
import loginContext from './Context';

function Auth() {

  const {state} = useContext(loginContext)

  return (
    <div>
      {state.isLoggedIn ? <Home /> : <Login />}
    </div>
  );
}

export default Auth;
