import React from 'react'
import People from './People'
import { Route,Routes } from 'react-router'
import Error from './Error'
import Home from './Home'
import UserProfile from './UserProfile'

const Main = () => {
  return (
    <Routes>
        <Route path='/' element = {<Home>Hello world</Home>} />
        <Route path='/people' element={<People />} />
        <Route path='/*' element={<Error />} />

        // lets make dynamic routing -
        <Route path='/people-profile/:name' element = {<UserProfile />} />
    </Routes>
  )
}

export default Main