import React, { useState } from 'react'
import '../../sass/Modules/M1/ModuleOneQuiz.scss'
import { quiz_m1 } from '../../quizes/Quizes'




export const ModuleOneQuiz = ({ SetBrainStorming }) => {
    const [activeQuestion, SetActiveQuestion] = useState(0)
    const [selectedAnswer, SetSelectedAnswer] = useState('')
    const [showResult, SetShowResult] = useState(false)
    const [selectedAnswerIndex, SetSelectedAnswerIndex] = useState(null)
    const [result, SetResult] = useState({
        score: 0,
        correctAnswers: 0,
        wrongAnswers: 0,
    })
    const [allCorrect, SetAllCorrect] = useState(false)
    const { questions } = quiz_m1
    const { question, choices, correctAnswer } = questions[activeQuestion]

    const onClickNext = () => {
        SetSelectedAnswerIndex(null)
        SetResult((prev) =>
            selectedAnswer
                ? {
                    ...prev,
                    score: prev.score + 5,
                    correctAnswers: prev.correctAnswers + 1,
                }
                : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
        )
        if (activeQuestion !== questions.length - 1) {
            SetActiveQuestion((prev) => prev + 1)
        } else {

            if (result.correctAnswers + 1 === questions.length) {
                SetShowResult(false)
                SetAllCorrect(true)
                SetBrainStorming(true)
            } else {
                SetActiveQuestion(0)
                SetShowResult(true)
            }
        }
    }

    const handleTryAgain = () => {
        SetShowResult(false);
    }
    const onAnswerSelected = (answer, index) => {
        SetSelectedAnswerIndex(index)
        if (answer === correctAnswer) {
            SetSelectedAnswer(true)
        } else {
            SetSelectedAnswer(false)
        }
    }

    const addLeadingZero = (number) => (number > 9 ? number : `0${number}`)

    return (
        <div className="quiz-container">
            {!showResult ? (
                <div className='wrapper'>
                    <div>
                        <span className="active-question-no">
                            {addLeadingZero(activeQuestion + 1)}
                        </span>
                        <span className="total-question">
                            /{addLeadingZero(questions.length)}
                        </span>
                    </div>
                    <h2>{question}</h2>
                    <ul>
                        {choices.map((answer, index) => (
                            <li
                                onClick={() => onAnswerSelected(answer, index)}
                                key={answer}
                                className={
                                    selectedAnswerIndex === index ? 'selected-answer' : null
                                }>
                                {answer}
                            </li>
                        ))}
                    </ul>
                    <div className="flex-right">
                        <button
                            onClick={onClickNext}
                            disabled={selectedAnswerIndex === null}>
                            {activeQuestion === questions.length - 1 ? 'Finish' : 'Next'}
                        </button>
                    </div>
                </div>
            ) : (
                <div className="result">
                    {!allCorrect && (
                        <div className='result-div'>
                            <p>Not everything is correct!</p>
                            <button onClick={handleTryAgain}> Try again </button>
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}