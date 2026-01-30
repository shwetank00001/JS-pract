import { Link, useNavigate } from "react-router-dom";


const HomePage = () => {

  const nav = useNavigate();

  function handleLogin(){
    nav('/login')
  }

  const handleSignup = () => {
    nav('/signup')
  }
  return (
    <div>
        <h3>This Page will keep the fake routes and an admin protected data.</h3>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleSignup}>Sign Up</button>
        <Link to='/admin'>Admin Data</Link>
    </div>
  )
}

export default HomePage