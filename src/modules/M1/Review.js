import React, { useState } from 'react'
import '../../sass/Modules/M1/Review.scss'
import Rating from 'react-rating-stars-component';



export const Review = () => {
    const [rating, setRating] = useState(0);

    const handleRatingChange = (newRating) => {
        setRating(newRating);
    };


    return (
        <div className="review">
            <h2> You have completed the first module and learnt about three different tools that you will use throughout the course
                Please rate your understanding  of the three tools:</h2>
            <Rating
                count={5}
                onChange={handleRatingChange}
                size={24}
                activeColor="#ffd700"
            />

        </div>
    )
}
