import {Link, useNavigate} from 'react-router';
import { globalContext } from './globalContext';
import { useContext } from 'react';
import './welcome.css'


function Welcome() {

  const nav = useNavigate();
  const {auth} = useContext(globalContext)
  function loginToggle(e){
    e.preventDefault();
    nav('/login');
  }
  function signupToggle(e){
    e.preventDefault();
    nav('/signup');
  }
  console.log(auth);


    return (
      <div className='welcome'>
        <h1>Welcome to my page</h1>
        <h4>you can visit different APIs and see diferent responses. </h4>
        <h5>PokeAPi is only accessible when a user is logged in while todo is accessible anytime</h5>
        <div className='link-container'>
          <Link to={'/dashboard'}>Click here to go to PokeAPI</Link>
          <Link to ={'/todos'}>Click here to go to Todo API </Link>
        </div>
        <div className='button-container'>
          <button onClick={loginToggle}>Login</button>    
          <button onClick={signupToggle}>Signup</button>    
        </div>
      </div>
    )
  }
  
  export default Welcome
  