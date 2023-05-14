import React from 'react'
import '../../sass/Modules/M1/MindMappingQuiz.scss'

export const MindMappingQuiz = ({ SetModuleOneQuiz, SetMindMappingQuizStart }) => {
    return (
        <div className="mindMappingQuiz">
            <img src='../../images/m1/mindMapQuiz.jpeg' alt='quiz' />
            <span>Let's test your knowledge with a small quiz!</span>
            <button onClick={() => {
                SetModuleOneQuiz(true);
                SetMindMappingQuizStart(false)
            }}>Start</button>
        </div>
    )
}
