import React from 'react'
import '../sass/Start.scss'


export const Start = ({ Title, Summary, Image, SetAsTrue, SetAsFalse }) => {


    return (
        <div className="m0">
            <div className="wrapper">
                <div className="left">
                    <div className="left-wrapper">
                        <h1>{Title} </h1>
                        <span> {Summary}</span>
                        <button onClick={() => {
                            SetAsTrue(true);
                            SetAsFalse(false);
                        }}> Start </button>
                    </div>
                </div>

                <div className="right">
                    <img src={Image} alt={Title} />
                </div>
            </div>
        </div>
    )
}


