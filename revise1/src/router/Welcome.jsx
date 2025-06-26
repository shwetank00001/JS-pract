import {Link} from 'react-router'
export default function Welcome(){
    return (
        <>
            <h3>Welcome to page</h3>
            <Link to={'/people'} >Go to Person List </Link>
        </>
    )
}