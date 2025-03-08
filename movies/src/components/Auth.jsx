import React from 'react'
import { auth, googleProvider } from './Firebase'
import {createUserWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'

const Auth = () => {
    const [email, setMail] = React.useState()
    const [password, setPassword] = React.useState()

    async function signIn(){
        console.log(email, password)
        try {
            await createUserWithEmailAndPassword(auth, email, password)
        } catch (error) {
            console.log(error)
        }

    }
    React.useEffect(() => {
        console.log(auth?.currentUser?.email)
    })

    async function signWithGoogle(){
        try {
            await signInWithPopup(auth, googleProvider)
            
        } catch (error) {
            console.log(error)
        }

    }

    async function logOut(){
        try {
            await signOut(auth)
            console.log("User Logged Out!")
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div>
        <input placeholder='email' type='email' value={email} onChange={(e) =>setMail(e.target.value) }/>
        <input placeholder='passw' type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button onClick={signIn}>Sign Up</button>
        <br/>
        <button onClick={signWithGoogle}>Sign In With your google account!</button>
        <br />
        <button onClick={logOut}>Log Out</button>
    </div>
  )
}

export default Auth