import React from "react";
import { globalContext } from "./globalContext";
import { useNavigate } from "react-router";

export default function Auth() {
  const { auth, setAuth } = React.useContext(globalContext);
  const nav = useNavigate();

  const handleAuth = () => {
    setAuth(function (item) {
      return !item;
    });
    console.log(auth);
    if (auth) {
      nav("/people");
    }
  };
  // React.useEffect(() => {
  //   nav("/people");
  // }, [auth]);

  return (
    <>
      <h1>Login</h1>
      <button onClick={handleAuth}>Click to login!</button>
    </>
  );
}
