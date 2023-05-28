import React from 'react'
import '../../sass/Modules/M7/ScamperTask.scss'

export const ScamperTask = () => {
    return (
        <div className="scamperTask">
            <div className="task-wrapper">
                <div className="eachColumn">
                    <p className='letter'>S</p>
                    <span className='word'> SUBSTITUE </span>
                    <div className="vertical-div">
                        <span>What elements of the idea could be substituted to create a new possibility?</span>
                        <textarea placeholder='Write here.' />
                    </div>
                </div>
                <div className="eachColumn">
                    <p className='letter'>C</p>
                    <span className='word'> COMBINE </span>
                    <div className="vertical-div">
                        <span>Can two existing ideas be combined to create a new one?</span>
                        <textarea placeholder='Write here.' />
                    </div>
                </div>
                <div className="eachColumn">
                    <p className='letter'>A</p>
                    <span className='word'> ADAPT </span>
                    <div className="vertical-div">
                        <span>Can an existing idea be adapted to a new situation?</span>
                        <textarea placeholder='Write here.' />
                    </div>
                </div>
                <div className="eachColumn">
                    <p className='letter'>M</p>
                    <span className='word'> MODIFY </span>
                    <div className="vertical-div">
                        <span>Can the idea be changed to create something new or improve it?</span>
                        <textarea placeholder='Write here.' />
                    </div>
                </div>
                <div className="eachColumn">
                    <p className='letter'>P</p>
                    <span className='word'> PUT USE </span>
                    <div className="vertical-div">
                        <span>Can the same idea be used for other purposes?</span>
                        <textarea placeholder='Write here.' />
                    </div>
                </div>
                <div className="eachColumn">
                    <p className='letter'>E</p>
                    <span className='word'> ELIMINATE </span>
                    <div className="vertical-div">
                        <span>Are there any elements of the idea that can be eliminated?</span>
                        <textarea placeholder='Write here.' />
                    </div>
                </div>
                <div className="eachColumn">
                    <p className='letter'>R</p>
                    <span className='word'> REARRANGE </span>
                    <div className="vertical-div">
                        <span>Can the order of the componenets of the idea be rearranged?</span>
                        <textarea placeholder='Write here.' />
                    </div>
                </div>
            </div>
        </div>
    )
}
