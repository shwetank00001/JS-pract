import React from 'react'
import { Link } from 'react-router'

const Home = () => {
  return (
    <div>
      <p>CLick here to redirect to login page!</p>
      <Link to={'/login'}>Login Page</Link>
      <br />
      <p>View Dashbaord!</p>
      <Link to={'/dashboard'}>Dashboard</Link>
    </div>
  )
}

export default Home