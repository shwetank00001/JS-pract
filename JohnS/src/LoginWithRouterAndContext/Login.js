import React, { useContext, useEffect, useState} from 'react'
import { GlobalContext } from './GlobalContext'
import { useNavigate, Link } from 'react-router-dom'

const Login = () => {
    const {isAuth, setAuth} = useContext(GlobalContext)

    const [loginName, setLoginName] = useState();
    const [loginPass, setLoginPass] = useState();

    const nav = useNavigate()

    const handleSubmit = (e) => {
      e.preventDefault();
      if(loginName === window.localStorage.getItem("userName") && loginPass === window.localStorage.getItem("userPassword")){
        setAuth(true)
      }
      else setAuth(false)
    }
    useEffect(() => {
      if(isAuth){
        nav('/details')
      }
    })
  return (
    <div>
        <h4>Login in to see the details</h4>
        <form onSubmit={handleSubmit}>
        <label htmlFor="nameID">Enter Name:-</label>
        <input id="nameID" type="text" placeholder="User Name" value={loginName} onChange={(e) => setLoginName(e.target.value)} />
        
        <label htmlFor="pass">Enter Password:-</label>
        <input id="pass" type="password" placeholder="User Pass" value={loginPass} onChange={(e) => setLoginPass(e.target.value)} />
        <button type='submit'>Log in</button>
        </form>

        <br />
        <h3>New User? <Link to={'/signup'}>Sign Up here</Link></h3>
        <h3>Head to <Link to={'/'}>Home</Link></h3>
    </div>
  )
}

export default Login