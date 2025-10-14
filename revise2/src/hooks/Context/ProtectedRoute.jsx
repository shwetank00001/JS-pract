import React, { useContext} from 'react'
import { globalContext } from './globalContext'
import { Navigate } from 'react-router';

const ProtectedRoute = ({children}) => {
    const {auth} = useContext(globalContext);
    return auth ? children : <Navigate to='/accessdenied' />
}

export default ProtectedRoute