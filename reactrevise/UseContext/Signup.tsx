import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [cnfPassword, setConfPassword] = useState('');

    const nav = useNavigate();

    function handleSubmit(e:any){
        e.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);

        if(email && password){
            window.localStorage.setItem("email", email);
            window.localStorage.setItem("password", password);

            if(password !== cnfPassword){
                alert('password match');
            }
            alert('Passwords match')
            nav('/login')
        }
        else (alert("Enter correct ID and Password!"))
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='add email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type='text' placeholder='add pass' value={password} onChange={(e) => setPassword(e.target.value)} />
            <input type='text' placeholder='add pass' value={cnfPassword} onChange={(e) => setConfPassword(e.target.value)} />
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Signup