import React, { useState } from 'react'
import '../sass/Login.scss'
import { useNavigate } from 'react-router-dom';
import Login from './Login';
import { BsArrowLeft } from "react-icons/bs";
import { SignUp } from './SignUp';





export const LoginSignUp = () => {

    const [signUp, setSignUp] = useState(false)
    const navigate = useNavigate();
    const handleBack = () => {
        navigate('/')
    }

    return (
        <div className="logInSignUp">
            <div className="left">
                <span className='slogan'>Innovate. Empower. Succeed.</span>
                <img src='../../images/login.jpg' />
            </div>

            {signUp ? (
               <SignUp setSignUp={setSignUp}/>

            ) : (
                <Login setSignUp={setSignUp}  />
            )}
        </div>
    )
}
