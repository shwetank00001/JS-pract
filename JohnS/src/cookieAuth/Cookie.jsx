import React from 'react'
import Home from './Home'
import Dash from './Dash'
import Login from './Login'
import {authContext} from './authContext'

import {Routes, Route } from 'react-router'


const Cookie = () => {
  const [auth, setAuth] = React.useState(false)
  return (
    <authContext.Provider value={{auth, setAuth}}>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/dashboard' element={<Dash />} />
    </Routes>
    </authContext.Provider>
  )
}

export default Cookie