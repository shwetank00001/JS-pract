import { Route, Routes, Link } from "react-router-dom"
import Signup from "./Signup"
import Login from "./Login"
import HomePage from "./HomePage"
import Admin from './Admin'
import {globalContext} from './globalContext'
import { useState } from "react"
import ProtectedRoute from "./ProtectedRoute"

const Welcome = () => {

  const [auth, setAuth] = useState(false);
  return (
    <>
    <globalContext.Provider value={{auth, setAuth}}>
        <Routes>
            <Route path="/" element={<HomePage />} />    
            <Route path="/signup" element={<Signup />} />    
            <Route path="/login" element={<Login />} />    
            <Route path="/admin" element={<ProtectedRoute> <Admin /></ProtectedRoute>} />    
        </Routes> 
      </globalContext.Provider>
      <div>
        <Link to={'/'}>Navigate to home</Link>
      </div>
    </>
  )
}

export default Welcome