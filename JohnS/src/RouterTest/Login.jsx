import React, {useState, useContext} from 'react';
import { authContext } from './authContext';


function Login(){

    const {auth, setAuth} = useContext(authContext);
    console.log(auth)
    
    return (
        <>
            <p>This is the login form.</p>
            <form>
                <input  />
            </form>
        </>
    )
}

export default Login