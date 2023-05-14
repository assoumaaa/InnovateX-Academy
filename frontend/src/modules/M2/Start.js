import React from 'react'
import '../../sass/Modules/M0/Start.scss'

export const Start = ({ SetVideo, SetStart }) => {


    return (
        <div className="m0">
            <div className="wrapper">
                <div className="left">
                    <div className="left-wrapper">
                        <h1>Prioritization - Selection </h1>
                        <span> This module teaches aspiring entrepreneurs how to select and prioritize effectively. It equips them with key principles and tools to identify important opportunities, evaluate challenges, and make informed decisions. Practical exercises help users prioritize goals, evaluate ideas, and create action plans for entrepreneurial success.</span>
                        <button onClick={() => {
                            SetVideo(true);
                            SetStart(false);
                        }}> Start </button>
                    </div>
                </div>

                <div className="right">
                    <img src='../../images/m2/m2.jpeg' alt='m0' />
                </div>
            </div>
        </div>
    )
}


