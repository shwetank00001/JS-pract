import React from 'react'
import { Link } from 'react-router'

const Home = ({children}) => {
  return (
    <>
        {children}
        <Link to={'/people'}>Lets go to the people page</Link>
    </>
  )
}

export default Home