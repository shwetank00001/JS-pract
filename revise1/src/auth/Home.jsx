import { useState, useContext } from "react"
import { Link } from "react-router";
import { authContext } from "./authContext";


const Home = () => {

    const {auth, setAuth} = useContext(authContext);
    
  return (
    <div>
        <h3>Home</h3>
        <button onClick={() => {setAuth(true)}}>change auth</button>

        <h1>Visit the Details page</h1>
        <Link to={'/details'}>CLick here</Link>
    </div>
  )
}

export default Home