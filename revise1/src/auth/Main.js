
import Home from './Home';
import Details from './Details';
import Login from './Login'
import {Routes, Route} from 'react-router'
import {authContext} from './authContext';
import { useState } from 'react';
import ProtectedRoute from './ProtectedRoute';

const Main = () => {
    const [auth, setAuth] = useState(false);    

    
  return (
    <authContext.Provider value={{auth, setAuth}}>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/details' element={
                <ProtectedRoute>
                    <Details/>
                </ProtectedRoute>
                } />
            
            <Route path='/login' element={<Login />} />
        </Routes>
    </authContext.Provider>
    )
}

export default Main