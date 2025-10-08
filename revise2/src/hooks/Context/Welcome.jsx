import React from 'react'
import { Link } from 'react-router'


const Welcome = () => {
  return (
    <div>
        <h1>Testing</h1>
        <button><Link to={'/about'}>About</Link></button>
        <button><Link to={'/contact'}>Contact</Link></button>
        <button><Link to={'/auth'}>Auth</Link></button>

    </div>
  )
}

export default Welcome