import React from 'react'
import '../../sass/Modules/M3/startingEmpathyMap.scss'

export const StartingEmpathyMap = ({ SetEmpathyMapTask }) => {
    return (
        <div className="startingEmpathyMap">
            <h1>We will be going over every part of the empathy map. And for more understanding, select few people around you ( preferably interested in your business ) to fill out the map and understand more how it works.</h1>
            <h2>Fill in the blank with your answer!</h2>
            <button onClick={() => { SetEmpathyMapTask(true); }}>Let's Start!</button>
        </div>
    )
}
