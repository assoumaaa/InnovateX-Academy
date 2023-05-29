import React, { useState } from 'react'
import '../../sass/Modules/M7/TimerTask.scss'
import Countdown from 'react-countdown';


export const TimerTask = () => {
    const [startCountdown, setStartCountdown] = useState(false);

    const handleStart = () => {
        setStartCountdown(true);
    };

    const renderer = ({ hours, minutes, seconds }) => {
        return (
            <span className='countdown'>
                {hours !== 0 ? `${hours}:` : ''}
                {minutes < 10 ? `0${minutes}` : minutes}:
                {seconds < 10 ? `0${seconds}` : seconds}
            </span>
        );
    };

    return (
        <div className='timerTask'>
            <span><h1>Step1: </h1>Set a 30-minute timer and generate as many ideas related to the problem you have stated earlier, there are no limits (Remember, the goal is to create a rich pool of diverse ideas, be creative and do not worry about feasibility now)</span>
            {!startCountdown ? (
                <button onClick={handleStart}>Start Countdown</button>
            ) : (
                <Countdown date={Date.now() + 30 * 60 * 1000} renderer={renderer} />
            )}
            <span><h1>Step2: </h1>Now group similar ideas together based on common themes, concepts, or characteristics.</span>

        </div>
    )
}
