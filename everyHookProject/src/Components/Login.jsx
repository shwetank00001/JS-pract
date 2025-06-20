import { useContext, useEffect, useState } from "react"
import {Link, useNavigate} from 'react-router'
import { globalContext } from "./globalContext";

import './login.css'
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

    }
    else alert("Invalid email or password")
  }

  useEffect(() => {
      if(auth){
        console.log(auth);
        nav('/dashboard')
      }
  }, [auth])
  
  return (
      <>
      <h3>Login here</h3>
      <form className="login-form" onSubmit={handleLogin}>
        <input placeholder="enter email address" value={email} onChange={(e) => setEmail(e.target.value)}/>        
        <input placeholder="enter password" value={password} onChange={(e) => setPassword(e.target.value)}/>        
        <button type="submit">Login</button>
      </form>
      <Link to={'/'}>Visit Homepage</Link>
      </>
    )
  }
  
  export default Login
  