import { Navigate } from "react-router"
import { authContext } from "./authContext"
import { useContext } from "react"

const ProtectedRoute = ({children}) => {

    const {auth} = useContext(authContext);

    return auth ? children : <Navigate to={'/login'} />
}

export default ProtectedRoute