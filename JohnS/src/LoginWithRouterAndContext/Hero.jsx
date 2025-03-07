import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div>
        <h1>This is the main page of our project</h1>
        <Link to={'/login'}>Click here to Login</Link>
        <br />
        <Link to={'/signup'}>Click here to Sign Up</Link>
    </div>
  )
}

export default Hero