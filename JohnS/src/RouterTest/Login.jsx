import React, {useState, useContext} from 'react';
import { authContext } from './authContext';
import {useNavigate} from 'react-router';



function Login(){

    const {auth, setAuth} = useContext(authContext);
    console.log(auth);
    
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const nav = useNavigate();

    function handleSubmit(e){
        e.preventDefault();

        if(email && pass){
            if(window.localStorage.getItem("password") === pass){
                setAuth(true);
                nav('/secretdata');
            }
            else alert("Wrong ID or Pass!")
        }
        else alert("Enter email or pass!")

        
    }
    console.log("auth", auth);

    return (
        <>
            <p>This is the login form.</p>
            <form onSubmit={handleSubmit}>
                <input placeholder ="email.." value={email} onChange={(e) => {setEmail(e.target.value)}} />
                <input placeholder ="password.." value={pass} onChange={(e) => {setPass(e.target.value)}} />
                <button type="submit">Login </button>
            </form>
        </>
    )
}

export default Login