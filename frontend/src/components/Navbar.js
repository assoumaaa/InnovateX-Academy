
import React, { useEffect, useState } from 'react'
import '../sass/Navbar.scss'
import { CiUser } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';



export const Navbar = () => {

    const navigate = useNavigate();
    const [userID, setUserID] = useState()

    const handleModules = () => {
        console.log(userID)
        if (userID) navigate('/modules')
        else navigate('/login')
    }

    const handleLogout = () => {
        window.localStorage.removeItem('userID')
        setUserID()
    }

    useEffect(() => {
        if (!userID)
            setUserID(window.localStorage.getItem('userID'))
    }, [])


    return (
        <div className='navbar'>
            <div className="title">
                <div className="name_slogan">
                    <img src='../../images/logo.png' alt='logo' />
                    <div className="names">
                        <span className='name'>InnovateX Academy</span>
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
                    {!userID ?
                        (<a onClick={() => navigate('/login')}>
                            Login
                        </a>) :
                        (
                            <a onClick={handleLogout}> Logout </a>
                        )}
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
