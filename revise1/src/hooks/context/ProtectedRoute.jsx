import React from 'react'
import { globalContext } from './globalContext';
import { Navigate } from 'react-router';

const ProtectedRoute = ({children}) => {
    const {auth} = React.useContext(globalContext);
    
  return auth ? children : <Navigate to={'/login'} />
}

export default ProtectedRoute