import React, { useState } from 'react'
import '../sass/Login.scss'
import { Login } from './Login';
import { SignUp } from './SignUp';



export const LoginSignUp = () => {

    const [signUp, setSignUp] = useState(false)

    return (
        <div className="logInSignUp">
            <div className="left">
                <span className='slogan'>Innovate. Empower. Succeed.</span>
                <img src='../../images/login.jpeg' alt='innovate' />
            </div>

            {signUp ? (
                <SignUp setSignUp={setSignUp} />

            ) : (
                <Login setSignUp={setSignUp} />
            )}
        </div>
    )
}
