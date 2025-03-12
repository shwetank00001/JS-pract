import React from "react";
import { Link } from "react-router-dom";

function Home() {
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
