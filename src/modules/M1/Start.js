import React from 'react'
import '../../sass/Modules/M0/Start.scss'

export const Start = ({ SetImage, SetStart }) => {

    return (
        <div className="m0">
            <div className="wrapper">
                <div className="left">
                    <div className="left-wrapper">
                        <h1>Thinking Hats - Mind Mapping - Brainstorming</h1>
                        <span>The main objective of this module is learning about different tools that will help us through the process in order to be able to define the persona later on and fix the problem</span>
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
