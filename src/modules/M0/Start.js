import React from 'react'
import '../../sass/Modules/M0/Start.scss'

export const Start = ({ SetDef }) => {

    const handleDef = () => {
        SetDef(true)
    }

    return (
        <div className="m0">
            <div className="wrapper">
                <div className="left">
                    <div className="left-wrapper">
                        <h1>Design Thinking?</h1>
                        <span>The main objective of this module is to define the problem that the entrepreneur will tackle in this program.</span>
                        <button onClick={handleDef}> Start </button>
                    </div>
                </div>

            <div className="right">
                <img src='../../images/m0.jpeg' alt='m0' />
            </div>
        </div>
    )
}
