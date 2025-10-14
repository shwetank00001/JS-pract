import React, { useState } from 'react'
import Welcome from './Welcome'
import { Route, Routes } from 'react-router'
import Contact from './Contact'
import About from './About'
import Login from './Login'
import PersonalData from './PersonalData'
import Access from './Access'

import {globalContext} from './globalContext';
import ProtectedRoute from './ProtectedRoute'

const Home = () => {

  const [auth, setAuth] = useState(false);
  console.log("State", auth)
  return (
    <globalContext.Provider value={{auth, setAuth}}>
      <Routes>
          <Route path='/' element={<Welcome />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/auth' element={<Login />} />
          <Route path='/personal' element={
            <ProtectedRoute>
              <PersonalData />
            </ProtectedRoute>
            } />
          <Route path='/accessdenied' element={<Access/>} />
      </Routes>
    </globalContext.Provider>
  )
}

export default Home