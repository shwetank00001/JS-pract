import React, {useContext} from "react";
import { GlobalContext } from "./GlobalContext";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  // const [isAuth, setAuth] = React.useState(false);
  const {isAuth, setAuth, name, setName, setPassword, password} = useContext(GlobalContext)
  const nav = useNavigate()

  const login = () => {
    setAuth(function (item) {
      return !item;
    });
    nav('/details')
  };
  const userState = isAuth ? "Sign In" : "Sign Out";

  function handleSub(e){
    e.preventDefault();
    window.localStorage.setItem("userName", name);
    window.localStorage.setItem("userPassword", password);
    nav('/login')
  }

  return (
    <div>
      <h3> This is Signup page</h3>
      <p>User is :{userState}</p>{" "}
      <form onSubmit={handleSub}>
        <label htmlFor="nameID">Enter Name:-</label>
        <input id="nameID" type="text" placeholder="User Name" value={name} onChange={(e) => setName(e.target.value)} />
        
        <label htmlFor="pass">Enter Password:-</label>
        <input id="pass" type="password" placeholder="User Pass" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
      <span>
        <button onClick={login}>Click to {isAuth ? "SignOut!": "SignIn!"}!</button>
      </span>
    </div>
  );
};

export default Signup;
