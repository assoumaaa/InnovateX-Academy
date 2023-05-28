import React from 'react'
import '../../sass/Modules/M6/SuccessTool.scss'

export const SuccessTool = () => {
    return (
        <div className="successTool">
            <div className="title">
                <h1>Define Success</h1>
                <span><h1>Quick guide:</h1> The definition of what success means is a central element in assessing, for example, how radically one is allowed to think. In addition, it enables a uniform understanding to be established between the design team, the client and other stakeholders. </span>
            </div>
            <div className="table-wrapper">
                <div className="eachTable">
                    <div className="titleInTable">
                        <h2>Define Questions</h2>
                        <p>Prepare a list of relevant questions</p>
                        <textarea />
                    </div>

                </div>
                <div className="eachTable">
                    <div className="titleInTable">
                        <h2>Answers</h2>
                        <p>Brainstormer enter the answers.</p>
                        <textarea />
                    </div>
                </div>
                <div className="eachTable">
                    <div className="titleInTable">
                        <h2>Evaluate and Select</h2>
                        <p>Evaluate the answers and define the characterstics</p>
                        <textarea />
                    </div>
                </div>
            </div>

        </div>
    )
}
