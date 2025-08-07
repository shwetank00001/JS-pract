import React from 'react'
import { Link } from 'react-router';

function Home(){
    return (
        <>
            <div>
                <Link to='/welcome'>Click here to go the welcome page</Link>
            </div>
            <div>
                <p>Secret Data:Click <span><Link to={'/secretdata'} >here</Link></span></p>
            </div>

            <span>To see secret data, please <Link to={'/login'}>login.</Link></span>

            <div>
                <button><Link to={'/signup'}>Signup</Link> </button>
            </div>
        </>
    )
}

export default Home