import React, { useState } from 'react'
import '../sass/Login.scss'
import { useNavigate } from 'react-router-dom';
import { BsArrowLeft } from "react-icons/bs";
import axios from 'axios';

export const Login = ({ setSignUp }) => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    

    const handleLogin = async (e) => {        
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/login', {
              email: email,
              password: password,
            });

            if (response.status === 200) {
                navigate('/modules')
            } 
           
            else {
                console.log('login failed');
            }

          } catch (error) {
            console.error(error);
          }
    }


    return (
        <div className="right">
            <BsArrowLeft className='back' onClick={() => navigate('/')} />
            <BsArrowLeft className='back' onClick={() => navigate('/')} />
            <div className="name_slogan">
                <img src='../../images/login-signup/logo.png' alt='logo' />
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

