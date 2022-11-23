import React from 'react'
import "../style.scss"

import avatarPic from "../img/addAvatar.png"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useState } from 'react';
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom"




function Register() {

    const [err, setErr] = useState(false)

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const file = e.target[3].files[0];


        try {
            const res = await createUserWithEmailAndPassword(auth, email, password)

            const storageRef = ref(storage, displayName);
            const uploadTask = uploadBytesResumable(storageRef, file);
            uploadTask.on(
                (error) => {
                    setErr(true);
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                        await updateProfile(res.user, {
                            displayName,
                            photoURL: downloadURL,
                        });
                        await setDoc(doc(db, "users", res.user.uid), {
                            uid: res.user.uid,
                            displayName,
                            email,
                            photoURL: downloadURL,
                        });
                        await setDoc(doc(db, 'userChats', res.user.uid), {});
                        navigate("/")


                    });
                }
            );
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
                    <input type="text" placeholder='display name'></input>
                    <input type="email" placeholder='email'></input>
                    <input type="password" placeholder='password'></input>
                    <input style={{ display: 'none' }} type="file" id='file'></input>
                    <label htmlFor='file'>
                        <img src={avatarPic} alt="" /> <span>Add avatar</span>
                    </label>
                    <button>Sign Up</button>
                    {err && <span>Something went wrong</span>}
                </form>
                <p>Do you have an account?<p>Do you have an account? <Link to="/login">Login</Link></p></p>
            </div>
        </div>
    )
}

export default Register