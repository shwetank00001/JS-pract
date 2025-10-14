import { Link } from "react-router"

const Access = () => {
  return (
    <div>
        <h1>Access Denied! Login to access this resource.</h1>
        <button><Link to={'/'}>Home</Link></button>
        <button><Link to={'/auth'}>Login Page</Link></button>
    </div>
  )
}

export default Access