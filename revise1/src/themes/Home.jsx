import React, { useState } from 'react'
import Header from './Header';
import Child1 from './Child1';
import Child2 from './Child2';
import {Routes, Route} from "react-router";
import {globalContext} from './globalContext'

const Home = () => {
  const [color, setColor] = useState('');

  return (
    <globalContext.Provider value={{color, setColor}}>
      <Routes>
        <Route path='/' element={<Header />} />
        <Route path='/child1' element={<Child1 />} />
        <Route path='/child2' element={<Child2 />} />
      </Routes>

    </globalContext.Provider>
  )
}

export default Home