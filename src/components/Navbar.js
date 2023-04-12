
import React from 'react'
import '../sass/Navbar.scss'
import { CiUser } from "react-icons/ci";


export const Navbar = () => {
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
                    <a href='#contactMe'>
                        <CiUser className='profile' />
                    </a>
                </div>

                <div className="bar-items">
                    <a href='#contactMe'>
                        <button>Get Started</button>
                    </a>
                </div>
            </div>
        </div>
    )
}
