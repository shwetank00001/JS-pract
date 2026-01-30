import React, { useContext } from 'react'
import { globalContext } from './globalContext'
import { Navigate, useNavigation } from 'react-router-dom'

const ProtectedRoute = ({children}) => {
    const {auth} = useContext(globalContext)
    return auth ? children : "Hello Bro"
}

export default ProtectedRoute