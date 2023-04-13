import React, { useState } from 'react'
import '../sass/Login.scss'
import { useNavigate } from 'react-router-dom';
import { BsArrowLeft } from "react-icons/bs";


export const SignUp = ({ setSignUp }) => {


    const navigate = useNavigate();
    const handleBack = () => {
        navigate('/')
    }

    const handleLogin = () => {
        setSignUp(false)
    }



    return (
        <div className="right">
            <BsArrowLeft className='back' onClick={handleBack} />
            <div className="name_slogan">
                <img src='../../images/logo.png' alt='logo' />
                <span>Register to InnovateX Academy</span>
            </div>
            <div className="login-container">
                <form>
                    <div className="form-group">
                        <label htmlFor="email">Full Name</label>
                        <input type="text" className="form-control" id="email" placeholder="Full Name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" id="password" placeholder="Password" />
                    </div>
                    <div className="button">
                        <button type="submit" className="btn btn-primary">Sign Up</button>
                        <span>Already have an account? <a onClick={handleLogin}>Login</a></span>
                    </div>
                </form>
            </div>
        </div>
    )
}
