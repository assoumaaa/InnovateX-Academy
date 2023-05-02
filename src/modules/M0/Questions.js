import React from 'react'
import '../../sass/Modules/M0/Questions.scss'
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";



export const Questions = ({ SetQuestions }) => {
  return (
    <div className="questions">
      <div className="wrapper">
        <div className="title">
          <h1>Find the Problem</h1>
          <span> Task 1 : Answer the following questions</span>
        </div>
        <div className="each-question-div">
          <div className="questions-div">
            <span> Question 1 : Who is the user we are trying to serve?</span>
          </div>
          <textarea />
        </div>
        <div className="each-question-div">
          <div className="questions-div">
            <span> Question 1 : Who is the user we are trying to serve?</span>
          </div>
          <textarea />
        </div>
        <div className="each-question-div">
          <div className="questions-div">
            <span> Question 1 : Who is the user we are trying to serve?</span>
          </div>
          <textarea />
        </div>
        <div className="each-question-div">
          <div className="questions-div">
            <span> Question 1 : Who is the user we are trying to serve?</span>
          </div>
          <textarea />
        </div>
      </div>
      <div className="end">
        <button > Submit </button>
        <h1>Thank you for participating! </h1>
      </div>
      <BsArrowLeft onClick={() => SetQuestions(false)} className='back' />
    </div>
  )
}
