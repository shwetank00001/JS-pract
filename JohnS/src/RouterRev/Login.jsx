import React from "react";
import { globalContext } from "./globalContext";

function Login() {
  const { isAuth, setAuth } = React.useContext(globalContext);

  const loginuser = () => {
    setAuth(function (item) {
      return true;
    });
  };
  return (
    <div>
      <h3>Login here</h3>
      <button onClick={loginuser}>Login</button>
    </div>
  );
}

export default Login;
