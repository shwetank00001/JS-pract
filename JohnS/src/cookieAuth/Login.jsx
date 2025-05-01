import React, {useState} from 'react'
import Cookies from 'js-cookie'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confPassword, setConfPassword] = useState('');

  const [mainData, setData] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMainData = {
      id: new Date().getTime(),
      email:email, password: password, confPassword: confPassword
    }

    setData(item => [...item, newMainData]);
    Cookies.set('Email', email,{ expires: 7 });
    Cookies.set('Password', password,{ expires: 7 });
    Cookies.set('Confirmed Password', confPassword, { expires: 7 } );

  }
  React.useEffect(() => {
    console.log(mainData)
  }, [mainData ])
  return (
    <div>
      <form onSubmit ={handleSubmit}>
        <input placeholder='email' type='email' required value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input placeholder='pass' type='text' required value={password} onChange={(e) => setPassword(e.target.value)}/>
        <input placeholder='confirm password..' required type='password' value={confPassword} onChange={(e) => setConfPassword(e.target.value)}/>
        <button type='submit'>Submit</button>     
      </form>
    </div>
  )
}

export default Login