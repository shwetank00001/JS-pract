import React, { useContext} from 'react'
import { GlobalContext } from './GlobalContext'
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
    const {isAuth} = useContext(GlobalContext);

  return isAuth ? children : <Navigate to={'/login'} replace/>
}

export default ProtectedRoute