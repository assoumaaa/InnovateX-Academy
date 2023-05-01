
import React from 'react'



export const Start = ({ SetDef }) => {

    const handleDef = () => {
        SetDef(true)
    }

    return (
        <div className="wrapper">
            <div className="left">
                <div className="left-wrapper">
                    <h1>Design Thinking?</h1>
                    <span>The main objective of this module is to define the problem that the entrepreneur will tackle in this program.</span>
                    <button onClick={handleDef}> Start </button>
                </div>
            </div>

            <div className="right">
                <img src='../../images/m0.jpeg' />
            </div>
        </div>
    )
}
