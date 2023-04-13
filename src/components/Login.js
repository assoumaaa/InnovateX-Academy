import React, { useState } from 'react'
import '../sass/Login.scss'
import { useNavigate } from 'react-router-dom';
import { BsArrowLeft } from "react-icons/bs";


const Login = ({setSignUp}) => {

    const navigate = useNavigate();
    const handleBack = () => {
        navigate('/')
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
                        <input type="email" className="form-control" id="email" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" id="password" placeholder="Password" />
                    </div>
                    <div className="button">
                        <button type="submit" className="btn btn-primary">Log In</button>
                        <span>Don't have an account? <a onClick={handleSignUp}>Sign up</a></span>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login