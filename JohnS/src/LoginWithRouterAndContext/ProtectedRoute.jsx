import React, {Children, useContext} from 'react'
import { GlobalContext } from './GlobalContext'
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
    const {isAuth} = useContext(GlobalContext);

  return isAuth ? children : <Navigate to={'/signup'} replace/>
}

export default ProtectedRoute