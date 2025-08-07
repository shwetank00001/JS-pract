import React, {useState, useContext, useRef} from 'react';
import { authContext } from './authContext';
import {useNavigate} from 'react-router';

function Signup(){
    
    const {auth, setAuth} = useContext(authContext);
    console.log(auth);
    
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const cnfPassRef = useRef(null);

    const nav = useNavigate()

    function handleSubmit(e){
        e.preventDefault();
        if(email && pass && cnfPassRef.current.value){
            if(pass === cnfPassRef.current.value){
                window.localStorage.setItem("email", email);
                window.localStorage.setItem("password", pass);
                nav('/login')
            }
            else alert("Passwords do not match")
        }
        
    }


    return (
        <>
            <p>This is the login form.</p>
            <form onSubmit={handleSubmit}>
                <input placeholder ="email.." value={email} onChange={(e) => {setEmail(e.target.value)}} required/>
                <input placeholder ="password.." value={pass} onChange={(e) => {setPass(e.target.value)}} required />
                <input placeholder ="confirm pass.." ref={cnfPassRef} required />
                <button type="submit">Signup </button>
            </form>
        </>
    )
}

export default Signup