import React from 'react'
import "../style.scss"
import avatarPic from "../img/addAvatar.png"

function Login() {
    return (
        <div className='formContainer'>
            <div className='formWrapper'>
                <span className='logo'>Lama Chat</span>
                <span className='title'>Register</span>
                <form>

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