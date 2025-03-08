import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { GlobalContext } from "./GlobalContext";

const Details = () => {
  const {isAuth, setAuth} = React.useContext(GlobalContext);

  function logout(){
    setAuth(false);
    window.localStorage.removeItem("userName")
    window.localStorage.removeItem("userPassword")
  }
  return (
    <div>
      <h4>This detail is shown because user is logged in</h4>
      <Link to={'/'}>Home Page</Link>
      <button onClick={logout}>Click to logout!</button>
    </div>
  );
};

export default Details;
