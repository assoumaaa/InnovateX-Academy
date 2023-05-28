import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { BsArrowLeft } from "react-icons/bs";
import { logIn } from '../hooks/hooks';
import '../sass/Login.scss'



export const Login = ({ setSignUp }) => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleLogin = async (e) => {
        e.preventDefault();
        const userID = await logIn(email, password);

        if (userID) {
            window.localStorage.setItem("userID", userID);
            navigate('/modules');
        }
    };


    return (
        <div className="right">
            <BsArrowLeft className='back' onClick={() => navigate('/')} />
            <BsArrowLeft className='back' onClick={() => navigate('/')} />
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
                        <span>Don't have an account? <a onClick={() => setSignUp(true)}>Sign up</a></span>
                    </div>
                </form>
            </div >
        </div >
    )
}

