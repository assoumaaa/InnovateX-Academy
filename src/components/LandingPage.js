import React from 'react'
import '../sass/LandingPage.scss'

export const LandingPage = () => {
    return (
        <div className="landingPage">
            <div className="left">
                <div className="information">
                    <span className='main'>Empowering the next generation of entrepreneurs.</span>
                    <div className="secondary-text">
                        <span className='secondary'>The perfect place for our </span>
                        <span className='secondary'>next millionaires.</span>
                    </div>
                </div>
                <div className="icons">
                    <button> Get Started </button>
                </div>
            </div>
            <div className="right">
                <img src='../../images/landing.png'/>
            </div>
            <div className="bottom">
                
            </div>
        </div>
    )
}
