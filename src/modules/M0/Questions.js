import React from 'react'
import '../../sass/Modules/M0/Questions.scss'




export const Questions = () => {
  return (
    <div className="questions">
      <div className="title">
        <h1>Find the Problem</h1>
        <span> Task 1 : Answer the following questions</span>
      </div>
      <div className="wrapper">

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
    </div>
  )
}
