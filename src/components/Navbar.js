
import React from 'react'
import '../sass/Navbar.scss'
import { CiUser } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';



export const Navbar = () => {

    const navigate = useNavigate();
    const handleModules = () => {
        navigate('/modules')
    }

    const handleLogin = () => {
        navigate('/login')
    }


    return (
        <div className='navbar'>
            <div className="title">
                <div className="name_slogan">
                    <img src='../../images/logo.png' alt='logo' />
                    <div className="names">
                        <span clßassName='name'>InnovateX Academy</span>
                        <span className='slogan'>Innovate. Empower. Succeed.</span>
                    </div>
                </div>
            </div>

            <div className="right">
                <div className="bar-items">
                    <a href='#aboutUs'>
                        About Us
                    </a>
                </div>
                <div className="bar-items">
                    <a href='#skills'>
                        Pricing Plans
                    </a>
                </div>
                <div className="bar-items">
                    <a href='#projects'>
                        Contact US
                    </a>
                </div>
                <div className="bar-items">
                    <a>
                        <CiUser className='profile' onClick={handleLogin}/>
                    </a>
                </div>

                <div className="bar-items">
                    <a>
                        <button onClick={handleModules}>Get Started</button>
                    </a>
                </div>
            </div>
        </div>
    )
}
