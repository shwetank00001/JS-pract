import React, { useContext } from 'react'
import { globalContext } from './globalContext'
import { Navigate, useNavigation } from 'react-router-dom'

const ProtectedRoute = ({children:any}) => {
    const {auth} = useContext(globalContext)
    return auth ? children : "Please sign in"
}

export default ProtectedRoute