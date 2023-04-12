import React from 'react'
import '../sass/LandingPage.scss'
import Typewriter from 'typewriter-effect';


export const LandingPage = () => {
    return (
        <div className="landingPage">
            <div className="left">
                <div className="information">
                    <span className='main'>Empowering the next generation of <Typewriter
                        options={{
                            autoStart: true,
                            strings: ["Entreprenerus.", "Innovaters.", "Learners."],
                            delay: 50,
                            loop: true,
                        }}
                        className="type-writer"
                    /></span>
                    <div className="secondary-text">
                        <span className='secondary'>The perfect hub for our </span>
                        <span className='secondary'>next millionaires.</span>
                    </div>
                </div>
                <div className="icons">
                    <button> Get Started </button>
                </div>
            </div>
            <div className="right">
                <img src='../../images/landing.png' alt='landing'/>
            </div>
            <div className="bottom">
                
            </div>
        </div>
    )
}
