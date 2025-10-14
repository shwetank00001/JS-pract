import React, {useContext} from 'react'
import { Link, useNavigate } from 'react-router';
import {globalContext} from './globalContext'

const Login = () => {
  const {auth, setAuth} = useContext(globalContext);
  const nav = useNavigate();

  function loggedIn(){
    console.log(auth);
    setAuth(item => !item);
  } 

  const value= auth ? "Set False" : "Set True"
  return (
    <div>
        <h1>Click the button to change the global state of auth from false to true, so that you can access the personal data. </h1>
        <button onClick={loggedIn}>{value}</button>
        <button><Link to='/personal'>Personal data</Link></button>
    </div>
  )
}

export default Login