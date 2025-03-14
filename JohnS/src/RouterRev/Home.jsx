import React from "react";
import { Link } from "react-router-dom";
import { globalContext } from "./globalContext";

function Home() {
  const { isAuth } = React.useContext(globalContext);
  console.log("login state of user :", isAuth);
  return (
    <div>
      <h3>This is the Home page.</h3>
      <Link to={"/login"}>Redirect to Login Page</Link>
      <br />
      <Link to={"/personalData"}>See personal details</Link>
    </div>
  );
}

export default Home;
