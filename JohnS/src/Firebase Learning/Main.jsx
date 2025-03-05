import React from 'react'
import FirebaseLearning from './FirebaseLearning'
import Login from './Login'
import { Route, Routes } from 'react-router-dom'

const Main = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element ={<Login />} />
            <Route path='/data' element ={<FirebaseLearning />} />
        </Routes>

    </div>
  )
}

export default Main