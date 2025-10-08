import React from 'react'
import Welcome from './Welcome'
import { Route, Routes } from 'react-router'
import Contact from './Contact'
import About from './About'
import Login from './Login'
import PersonalData from './PersonalData'

const Home = () => {
  return (
    <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/auth' element={<Login />} />
        <Route path='/personal' element={<PersonalData />} />
    </Routes>
  )
}

export default Home