import React from 'react'
import "../style.scss"
import avatarPic from "../img/addAvatar.png"

function Register() {
    return (
        <div className='formContainer'>
            <div className='formWrapper'>
                <span className='logo'>Lama Chat</span>
                <span className='title'>Register</span>
                <form>
                    <input type="text" placeholder='display name'></input>
                    <input type="email" placeholder='email'></input>
                    <input type="password" placeholder='password'></input>
                    <input style={{ display: 'none' }} type="file" id='file'></input>
                    <label htmlFor='file'>
                        <img src={avatarPic} alt="" /> <span>Add avatar</span>
                    </label>
                    <button>Sign Up</button>
                </form>
                <p>Do you have an account? Login</p>
            </div>
        </div>
    )
}

export default Register