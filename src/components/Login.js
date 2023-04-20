
import React, { useState } from 'react'
import '../sass/Login.scss'
import { useNavigate } from 'react-router-dom';
import { BsArrowLeft } from "react-icons/bs";


import firebase from 'firebase/compat/app';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import 'firebase/compat/firestore';



// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAYvRaNKEe5XGhrSl-rPydEggrC-YXb1wI",
    authDomain: "innovate-x-academy.firebaseapp.com",
    databaseURL: "https://innovate-x-academy-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "innovate-x-academy",
    storageBucket: "innovate-x-academy.appspot.com",
    messagingSenderId: "403985743454",
    appId: "1:403985743454:web:895ee060dd9adc84a03ecf",
    measurementId: "G-4YYN3W3PWV"
};

// Initialize Firebase app
firebase.initializeApp(firebaseConfig);


const Login = ({ setSignUp }) => {

    const auth = getAuth();
    const navigate = useNavigate();
    const handleBack = () => {
        navigate('/')
    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    

    const handleLogin = async (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                const userID = userCredential.user.uid;
                window.localStorage.setItem("userID",userID);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }

    const handleSignUp = () => {
        setSignUp(true)
    }


    return (
        <div className="right">
            <BsArrowLeft className='back' onClick={handleBack} />
            <div className="name_slogan">
                <img src='../../images/logo.png' alt='logo' />
                <span>Sign in to InnovateX Academy</span>
            </div>
            <div className="login-container">
                <form>
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="button">
                        <button type="submit" className="btn btn-primary" onClick={handleLogin}>Log In</button>
                        <span>Don't have an account? <a onClick={handleSignUp}>Sign up</a></span>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login