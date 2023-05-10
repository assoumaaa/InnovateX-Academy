import React from 'react'
import '../../sass/Modules/M0/Start.scss'

export const Start = ({ SetImage, SetStart }) => {

    return (
        <div className="m0">
            <div className="wrapper">
                <div className="left">
                    <div className="left-wrapper">
                        <h1>Prioritization - Selection </h1>
                        <span> In this module, users will learn about the critical skills of selection and prioritization for entrepreneurs. The module aims to equip aspiring entrepreneurs with the key principles and tools for identifying and evaluating the most important opportunities and challenges and making informed decisions that can drive their business forward. Through a series of practical exercises, users will learn how to prioritize their goals, evaluate potential ideas and solutions, and create a plan of action that can help them achieve success in their entrepreneurial journey.</span>
                        <button onClick={() => {
                            SetImage(true);
                            SetStart(false);
                        }}> Start </button>
                    </div>
                </div>

                <div className="right">
                    <img src='../../images/m1.jpeg' alt='m0' />
                </div>
            </div>
        </div>
    )
}
