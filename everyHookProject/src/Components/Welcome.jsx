import {Link, useNavigate} from 'react-router';


function Welcome() {

  const nav = useNavigate();

  function loginToggle(e){
    e.preventDefault();
    nav('/login');
  }
  function signupToggle(e){
    e.preventDefault();
    nav('/signup');
  }
    return (
      <>
      <h3>Welcome to my page</h3>
      <h4>you can visit different APIs and see diferent responses. </h4>
      <h5>PokeAPi is only accessible when a user is logged in while todo is accessible anytime</h5>
      <Link to={'/dashboard'}>Click here to go to PokeAPI</Link>
      <br />
      <Link to ={'/todos'}>Click here to go to Todo API </Link>

        <div>
          <button onClick={loginToggle}>Login</button>    
          <button onClick={signupToggle}>Signup</button>    
        </div>
      </>
    )
  }
  
  export default Welcome
  