import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from './Home'
import Error from './Error'
import People from './People'
import About from './About'
import Nabvar from './Nabvar'

const Main = () => {
  return (
    <>
    <Nabvar />
      <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/people' element={<People />}/>
          <Route path='*' element = {<Error />} />
      </Routes>
    </>

  )
}

export default Main