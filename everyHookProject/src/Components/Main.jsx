import React from 'react';
import {Route, Routes} from 'react-router'
import Signup from './SIgnup'
import Login from './Login'
import Dashboard from './Dashboard'
import Welcome from './Welcome';

function Main() {

    return (
        <Routes>
            <Route path='/' element={<Welcome />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<Login />} />
        </Routes>
    )
  }
  
  export default Main
  