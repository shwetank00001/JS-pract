import React from "react";
import {  Link } from "react-router-dom";
import { GlobalContext } from "./GlobalContext";

const Details = () => {
  const {setAuth, products} = React.useContext(GlobalContext);

  const ele = products.map(function(item){
    return (
      <div key={item.key}>
        <h4>{item.title}</h4>
        <p>{item.price}</p>
        <p>{item.category}</p>
      </div>
    )
  })
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
      <div>
        {ele}
      </div>
    </div>
  );
};

export default Details;
