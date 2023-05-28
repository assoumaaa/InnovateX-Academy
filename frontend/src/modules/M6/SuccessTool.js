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
                <div className="vertical">
                    <div className="eachTable">
                        <div className="titleInTable">
                            <h2>Define Questions</h2>
                            <p>Prepare a list of relevant questions</p>
                            <p className='number'>1</p>
                            <textarea placeholder='Write here.' />
                        </div>

                    </div>
                    <div className="eachTable">
                        <div className="titleInTable">
                            <h2>Answers</h2>
                            <p>Brainstormer enter the answers.</p>
                            <p className='number'>2</p>
                            <textarea placeholder='Write here.' />
                        </div>
                    </div>
                    <div className="eachTable">
                        <div className="titleInTable">
                            <h2>Evaluate and Select</h2>
                            <p>Evaluate and define the characterstics</p>
                            <p className='number'>3</p>
                            <textarea placeholder='Write here.' />
                        </div>
                    </div>
                </div>
                <div className="horizantal">
                    <div className="titleInTable">
                        <h2>Outcomes</h2>
                        <p>Record the resulsts</p>
                        <textarea placeholder='Write here.' />
                    </div>
                </div>

            </div>
            <button>Submit</button>
        </div>
    )
}
