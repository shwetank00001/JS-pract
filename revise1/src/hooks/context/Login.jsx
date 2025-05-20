import { globalContext } from "./globalContext";
import { useContext } from "react";
import { useNavigate } from "react-router";

const Login = () => {
  const {auth, setAuth} = useContext(globalContext);
  const nav= useNavigate()

  function changeAuth(){
    setAuth(true);
    if(auth){
      console.log(auth)
      nav('/');
    }
  }
  return (
    <div>
      Welcome to login page
      <p>Click the button to change the state of auth to TRUE</p>
      <button onClick={changeAuth}>Change</button>
    </div>
  )
}

export default Login