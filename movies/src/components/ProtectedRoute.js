import React from 'react'
import { GlobalContext } from './globalContext'
import { Navigate } from 'react-router'

const ProtectedRoute = ({children}) => {
    const {isAuth} = React.useContext(GlobalContext)
  return isAuth ? children : <Navigate to={'/login'} replace />
}

export default ProtectedRoute