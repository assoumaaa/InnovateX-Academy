import React, { useState } from 'react'
import '../sass/Review.scss'
import Rating from 'react-rating-stars-component';
import { useNavigate } from 'react-router-dom';



export const Review = ({ Description, Modules, NextModule }) => {
    const [rating, setRating] = useState(0);
    const navigate = useNavigate();
    console.log(rating)


    const handleRatingChange = (newRating) => {
        setRating(newRating);
    };


    return (
        <div className="review">
            <h2>{Description}</h2>
            <div className="wrapper-review">
                <div className="module-review">
                    {Modules.map((eachModule) => (
                        <div className='eachModule'>
                            <span>{eachModule}</span>
                            <Rating
                                count={5}
                                onChange={handleRatingChange}
                                size={50}
                                activeColor="#ffd700"
                            />
                        </div>
                    ))}
                </div>
                <button onClick={() => navigate(NextModule)}>Start New Module!</button>
            </div>
        </div >
    )
}
