import React from 'react'
import '../../sass/Modules/M0/Definition.scss'
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";


export const Definition = ({ SetDef, SetQuestions }) => {

    return (
        <div className="definition">
            <div className="wrapper">
                <h1>What is Design Thinking?</h1>
                <span>Design thinking is a human-centered approach to problem-solving and innovation that can be applied to a wide range of challenges, from product design to organizational strategy to social issues.By participating in a 14-week program that teaches design thinking and the necessary steps you will transform your concept into a business strategy.</span>
                <span>It involves empathizing with users, defining the problem, ideating and prototyping potential solutions, and testing and iterating on those solutions based on feedback. This approach is essential for entrepreneurs who want to turn their ideas into profitable, sustainable businesses. These strategies offer a comprehensive approach to problem-solving and decision-making, allowing you to develop a deeper understanding of your target audience and create a more effective business plan. </span>
                <span className='note'>Remember to stay curious and never be afraid of failure - it's okay to make mistakes as long as you learn from them. With the right mindset and tools, you can turn your entrepreneurial idea into a successful business. </span>
                <BsArrowRight onClick={() => SetQuestions(true)} className='next' />
                <BsArrowLeft onClick={() => SetDef(false)} className='back' />
            </div>
        </div>
    )
}
