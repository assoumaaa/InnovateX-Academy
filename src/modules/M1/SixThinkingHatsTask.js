import React from 'react'
import '../../sass/Modules/M1/sixThinkingHatsTask.scss'

export const SixThinkingHatsTask = () => {
    return (
        <div className="sixThinkingHatsTask">
            <div className="problem">
                <span>Write the problem :</span>
            </div>
            <div className="grid-container">
                <div className="grid-item">
                    <div className="eachGrid">
                        <h1>PROCESS</h1>
                        <span>Structured and Big Picture Thinking</span>
                    </div>
                    <textarea />
                </div>
                <div className="grid-item">
                    <div className="eachGrid">
                        <h1>FACTS</h1>
                        <span>Analytical and Objective</span>

                    </div>
                    <textarea />
                </div>
                <div className="grid-item">
                    <div className="eachGrid">
                        <h1>IDEAS</h1>
                        <span>Analytical and Objective</span>
                    </div>
                    <textarea />
                </div>
                <div className="grid-item">
                    <div className="eachGrid">
                        <h1>RISKS</h1>
                        <span>Critical and Skeptical</span>
                    </div>
                    <textarea />
                </div>
                <div className="grid-item">
                    <div className="eachGrid">
                        <h1>BENEFITS</h1>
                        <span>Optimisitc and Speculative</span>
                    </div>
                    <textarea />
                </div>
                <div className="grid-item">
                    <div className="eachGrid">
                        <h1>INTUITION</h1>
                        <span>Emotional and Subjective</span>
                    </div>
                    <textarea />
                </div>
            </div>
        </div>
    )
}
