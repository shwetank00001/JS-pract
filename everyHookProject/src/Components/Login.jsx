import { useContext, useState } from "react"
import {Link, useNavigate} from 'react-router'
import { globalContext } from "./globalContext";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const nav = useNavigate();
  const {auth, setAuth} = useContext(globalContext)

  function handleLogin(e){
    e.preventDefault();
    if(window.localStorage.getItem("email") === email && window.localStorage.getItem("password") === password){
      alert("Logged In!");
      setAuth(true);
      console.log(auth);
      if(auth){
        nav('/dashboard')
      }
    }
    else alert("Invalid email or password")
  }
  
  return (
      <>
      <h3>Login here</h3>
      <form onSubmit={handleLogin}>
        <input placeholder="enter email address" value={email} onChange={(e) => setEmail(e.target.value)}/>        
        <input placeholder="enter password" value={password} onChange={(e) => setPassword(e.target.value)}/>        
        <button type="submit">Login</button>
      </form>
      </>
    )
  }
  
  export default Login
  