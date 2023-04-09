import React from 'react'
import '../sass/Footer.scss'

export const Footer = () => {
    return (
        <div className="footer">
            <div className="wrapper">

                <div className="name_slogan">
                    <span clßassName='name'>InnovateX Academy</span>
                    <span className='slogan'>Innovate. Empower. Succeed.</span>
                </div>

                <div className="information_wrapper">


                    <div className="details">

                        <span className='title'> Contact </span>
                        <span className='address'> ORTA MAH. UNIVERSTIE CAD NO:27
                            34956 ORHANLI, TUZLA / ISTANBUL
                        </span>
                    </div>
                    <div className="quick_links">
                        <span className='title'>Quick Links</span>
                        <a>Terms and conditions</a>
                        <a>Privacy Policy</a>
                    </div>
                    <div className="sales">
                        <span className='title'>Sales:</span>
                        <span className='email'>azzuqah@sabanciuniv.edu</span>
                        <span className='title'>Customer Care:</span>
                        <span className='email'>lulu@sabanciuniv.edu</span>
                    </div>
                    <div className="links">
                        <span>LinkedIn</span>
                        <span>Youtube</span>
                        <span>Facebook</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
