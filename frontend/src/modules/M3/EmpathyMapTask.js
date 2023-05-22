import React from 'react'
import '../../sass/Modules/M3/EmpathyMapTask.scss'

export const EmpathyMapTask = () => {
    return (
        <div className="empathyMapTask">

            <div className="eachQuestion">

                <h1>1. Who are empathisising with?</h1>
                <ul>
                    <li>   Who is the person we want to understand?</li>
                    <li>   What is the situation they are in?</li>
                </ul>
                <h2>The goal of those questions is to know specific information about the persona in front of us like their name, age...</h2>
                <textarea />

                <hr />
            </div>
            <div className="eachQuestion">

                <h1>2.What do we want them to do?</h1>
                <ul>
                    <li>   What did they need to do differently ?</li>
                    <li> What job(s) do they want or need to get done?</li>
                    <li> What decisions do they need to make?</li>
                </ul>
                <h2>We can consider this part as answers to the question "What is their problem?", "What are they looking to solve"</h2>
                <textarea />
                <hr />
            </div>

            <div className="eachQuestion">

                <h1>3.What do they see?</h1>
                <ul>
                    <li>What do they see in the market place ?</li>
                    <li>What do they see in their immediate environment ?</li>
                    <li> What do they see others saying?</li>
                    <li> What do they see others doing?</li>
                </ul>
                <h2>In this part we focus in the environment, so we answer question like  "What surrounds them?", "Who’s around them?"</h2>
                <textarea />
                <hr />
            </div>

            <button>Start</button>
        </div>
    )
}