import React, {useContext, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { globalContext} from './globalContext';

const Login = () => {
      const [email, setEmail] = useState('')
      const [password, setPassword] = useState('');

      const nav = useNavigate();
      const {auth, setAuth} = useContext(globalContext)
      

      const handleSubmit = (e:any) => {
        e.preventDefault();
        if(window.localStorage.getItem("email") === email && window.localStorage.getItem("password") === password ){
          alert("Passwords match");
          nav('/admin');
          setAuth(true)

        }
        else alert('password dont')
      }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='add email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type='text' placeholder='add pass' value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Login