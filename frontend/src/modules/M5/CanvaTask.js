import React from 'react'
import '../../sass/Modules/M5/CanvaTask.scss'
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

export const CanvaTask = () => {
    return (
        <div className="canvaTask">
            <div className="left">
                <div className="title">
                    <h1>Value Proposition</h1>
                    <hr />
                </div>

                <div className="square">
                    <div className="left-square">
                        <h1>Products & Services</h1>
                        <textarea placeholder='Write here.' />
                    </div>
                    <div className="right-square">
                        <div className="each">
                            <h1>Gain Creators</h1>
                            <textarea placeholder='Write here.' />
                        </div>
                        <div className="each">
                            <h1>Pain Relievers</h1>
                            <textarea placeholder='Write here.' />
                        </div>
                    </div>
                </div>
            </div>

            <div className="right">
                <div className="title">
                    <h1>Customer Segment</h1>
                    <hr />
                </div>
                <div className="circle">
                    <div className="left-circle">
                        <div className="each">
                            <h1>Gains </h1>
                            <textarea placeholder='Write here.' />
                        </div>
                        <div className="each">
                            <h1>Pains </h1>
                            <textarea placeholder='Write here.' />
                        </div>
                    </div>
                    <div className="right-circle">
                        <h1>Customer Jobs </h1>
                        <textarea placeholder='Write here.' />
                    </div>
                </div>
            </div>
        </div>
    )
}
