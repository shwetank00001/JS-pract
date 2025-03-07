import React, {useCallback, useContext} from 'react'
import { GlobalContext } from './GlobalContext'

const Login = () => {
    const {isAuth, setAuth} = useContext(GlobalContext)
    
  return (
    <div>
        <h4>Login in to see the details</h4>
    </div>
  )
}

export default Login