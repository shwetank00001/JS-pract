
import { useRef, useEffect } from "react";
import {useNavigate} from 'react-router'


function SIgnup() {

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const nav = useNavigate();

  function handleSubmit(e){
    e.preventDefault();
    window.localStorage.setItem("email", emailRef.current.value);
    window.localStorage.setItem("password", passwordRef.current.value);
    alert("You have signed up! Redirecting you to Login Page");
    nav('/login')
  }

  useEffect(() => {
    emailRef.current.focus()
  },[])
    return (
      <>
        <h1>Signup Page</h1>
        <form onSubmit={handleSubmit}>
          <input placeholder="email" ref={emailRef}  />
          <input placeholder="password" ref={passwordRef}  />
          <button type="submit">Submit</button>
        </form>
        
      </>
    )
  }
  
  export default SIgnup
  