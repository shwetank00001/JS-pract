import React, {useContext} from "react";
import { GlobalContext } from "./GlobalContext";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  // const [isAuth, setAuth] = React.useState(false);
  const {isAuth, setAuth} = useContext(GlobalContext)

  const nav = useNavigate()

  const login = () => {
    setAuth(function (item) {
      return !item;
    });
    nav('/details')
  };
  const userState = isAuth ? "Logged In" : "Logged Out";

  return (
    <div>
      <h3> This is Signup page</h3>
      <p>User is :{userState}</p>{" "}
      <span>
        <button onClick={login}>Click to {isAuth ? "LogOut!": "LogIn!"}!</button>
      </span>
    </div>
  );
};

export default Signup;
