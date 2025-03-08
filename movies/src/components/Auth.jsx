import React, { useState, useEffect, useContext } from 'react';
import { auth, googleProvider } from './Firebase';
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { GlobalContext } from './globalContext';
import { useNavigate } from 'react-router';

const Auth = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const nav = useNavigate()

    const { isAuth, setAuth} = useContext(GlobalContext)

    async function signIn() {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            setAuth(true)
            nav('/movies')
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        console.log(auth?.currentUser);
    }, []);

    async function signWithGoogle() {
        try {
            await signInWithPopup(auth, googleProvider);
            setAuth(true)
            nav('/movies')
        } catch (error) {
            console.error(error);
        }
    }

    async function logOut() {
        try {
            await signOut(auth);
            console.log("User Logged Out!");
            setAuth(false)
            nav('/')
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="bg-white p-6 shadow-lg rounded-lg w-full max-w-sm mx-auto mt-10">
            <h2 className="text-2xl font-semibold text-center mb-4">Authentication</h2>
            <div className="flex flex-col gap-3">
                <input className="border border-gray-400 p-2 rounded" placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input className="border border-gray-400 p-2 rounded" placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button className="bg-blue-500 text-white py-2 rounded shadow hover:bg-blue-600 transition" onClick={signIn}>Sign Up</button>
                <button className="bg-red-500 text-white py-2 rounded shadow hover:bg-red-600 transition" onClick={signWithGoogle}>Sign In with Google</button>
                <button className="bg-gray-500 text-white py-2 rounded shadow hover:bg-gray-600 transition" onClick={logOut}>Log Out</button>
            </div>
        </div>
    );
};

export default Auth;
