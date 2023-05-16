import React, { useState } from 'react'
import '../sass/Login.scss'
import { useNavigate } from 'react-router-dom';
import { BsArrowLeft } from "react-icons/bs";

import { signUp } from '../hooks/hooks';



export const SignUp = ({ setSignUp }) => {

    const navigate = useNavigate();

    const [fullName, SetFullName] = useState('')
    const [email, SetEmail] = useState('');
    const [password, SetPassword] = useState('');



    const handleSignUp = async (e) => {
        e.preventDefault();
        const userID = await signUp(fullName, email, password);

        if (userID) {
            window.localStorage.setItem("userID", userID);
            navigate('/modules');
        }
    }



    return (
        <div className="right">
            <BsArrowLeft className='back' onClick={() => navigate('/')} />
            <div className="name_slogan">
                <img src='../../images/logo.png' alt='logo' />
                <span>Register to InnovateX Academy</span>
            </div>
            <div className="login-container">
                <form>
                    <div className="form-group">
                        <label htmlFor="email">Full Name</label>
                        <input type="text" className="form-control" placeholder="Full Name" onChange={(e) => SetFullName(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter email" value={email} onChange={(e) => SetEmail(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" id="password" placeholder="Password" value={password} onChange={(e) => SetPassword(e.target.value)} />
                    </div>
                    <div className="button">
                        <button type="submit" className="btn btn-primary" onClick={handleSignUp}>Sign Up</button>
                        <span>Already have an account? <a onClick={() => setSignUp(false)}>Login</a></span>
                    </div>
                </form>
            </div>
        </div>
    )
}
