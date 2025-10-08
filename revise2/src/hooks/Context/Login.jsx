import React from 'react'
import { Link } from 'react-router'

const Login = () => {
  return (
    <div>
        <h1>Click the button to change the global state of auth from false to true, so that you can access the personal data. </h1>
        <button><Link to={'/personal'}>Personal Dashboard</Link></button>
    </div>
  )
}

export default Login