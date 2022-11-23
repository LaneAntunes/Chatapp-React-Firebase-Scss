import React from 'react'
import "../style.scss"
import avatarPic from "../img/addAvatar.png"
import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
// import { auth } from "../firebase";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';

function Login() {
    const [err, setErr] = useState(false)

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        const email = e.target[0].value;
        const password = e.target[1].value;

        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/login')

        } catch (err) {
            setErr(true)
        }
    }


    return (
        <div className='formContainer'>
            <div className='formWrapper'>
                <span className='logo'>Lama Chat</span>
                <span className='title'>Register</span>
                <form onSubmit={handleSubmit}>

                    <input type="email" placeholder='email'></input>
                    <input type="password" placeholder='password'></input>

                    <button>Sign in</button>
                    {err && <span> Something went wrong</span>}
                </form>
                <p>Do you have an account? <Link to="/register">Register </Link></p>
            </div>
        </div>
    )
}

export default Login