import React from 'react'
import { Link } from 'react-router-dom'

const Nabvar = () => {
  return (
    <nav className='top'>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">about</Link></li>
            <li><Link to="/people">people</Link></li>
        </ul>
    </nav>
  )
}

export default Nabvar