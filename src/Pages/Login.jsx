import React from 'react'
import "../style.scss"
import avatarPic from "../img/addAvatar.png"
import { useState, useNavigate } from "react"

function Login() {
    const [err, setErr] = useState(false)

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        const email = e.target[0].value;
        const password = e.target[1].value;

        try {

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
                </form>
                <p>Do you have an account? Register</p>
            </div>
        </div>
    )
}

export default Login