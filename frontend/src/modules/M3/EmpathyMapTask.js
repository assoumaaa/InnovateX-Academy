import React, { useState } from 'react'
import '../../sass/Modules/M3/EmpathyMapTask.scss'
import { empathy_map } from '../../Information/QuestionsInfo';

export const EmpathyMapTask = ({ SetReview, SetEmpathyMapTask }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleClick = () => {
        if (currentIndex < empathy_map.empathy_map_info.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
        else {
            SetReview(true);
            SetEmpathyMapTask(false);
        }
    }

    return (
        <div className='empathyMapTask'>
            <h1>{empathy_map.empathy_map_info[currentIndex].Title}</h1>
            <ul>
                {empathy_map.empathy_map_info[currentIndex].BulletPoints.map((bulletPoint, index) =>
                    <li key={index}>{bulletPoint}</li>
                )}
            </ul>
            <p>{empathy_map.empathy_map_info[currentIndex].Goal}</p>
            <textarea />
            <button onClick={handleClick}>Next</button>
        </div>
    );
}
