import React from "react";
import { globalContext } from "./globalContext";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const { isAuth, setAuth } = React.useContext(globalContext);

  const nav = useNavigate();
  const loginuser = () => {
    setAuth(true);
    console.log(isAuth);
    nav("/personalData");
  };

  return (
    <div>
      <h3>Login here</h3>
      <button onClick={loginuser}>Login</button>
    </div>
  );
}

export default Login;
