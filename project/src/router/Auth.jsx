import React from "react";
import { globalContext } from "./globalContext";
import { Link, useNavigate } from "react-router";

export default function Auth() {
  const { auth, setAuth } = React.useContext(globalContext);
  const nav = useNavigate();

  const handleAuth = () => {
    setAuth(function (item) {
      return true;
    });
    console.log(auth);
    nav('/people')
  };
  // React.useEffect(() => {
  //   nav("/people");
  // }, [auth]);

  function moveToDash(){
    nav('/people');
    if(!auth){
      alert("Please click on login first")
    }
  }

  return (
    <>
      <h1>Login</h1>
      <button onClick={handleAuth}>Click to login!</button>
      <button><Link to={'/'}>Go to homepage</Link></button>
      <button onClick={moveToDash}>Go to People list</button>
    </>
  );
}
