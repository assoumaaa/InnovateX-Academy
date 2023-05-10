import React from 'react'
import '../sass/Product.scss'

export const Product = () => {
    return (
        <div className="product">
            <div className="wrapper">
                <div className="info_wrapper">
                    <span className='title'>What We Offer</span>
                    <span className='information'>We offer a 14-week program that covers the main principles of entrepreneurship, taught by experienced entrepreneurs. Each module is designed to teach individuals the foundational knowledge and skills necessary to start and grow a successful venture. </span>
                </div>
                <div className="our_product">
                    <div className="each_feature">
                        <img src='../../images/landing/workflow.png' alt='workflow'/>
                        <span className='title'>Workflows That Work</span>
                        <span className='information'>By analyzing your workflow and identifying inefficiencies, you can optimize your time and energy to work smarter, not harder.</span>
                    </div>
                    <div className="each_feature">
                        <img src='../../images/landing/solution.png' alt='solution'/>
                        <span className='title'>All-In-One Solution</span>
                        <span className='information'>14-week program covers the main principles of entrepreneurship, innovation.</span>
                    </div>
                    <div className="each_feature">
                        <img src='../../images/landing/user-friendly.png' alt='user-friendly'/>
                        <span className='title'>User-Friendly interface</span>
                        <span className='information'>User-friendly interfaces that enable students to learn by doing.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
