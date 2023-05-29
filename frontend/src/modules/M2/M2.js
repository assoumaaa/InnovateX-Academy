import React, { useState } from 'react'
import { Video } from '../../components/Video';
import { Start } from '../../components/Start';
import { info_m2 } from '../../Information/StartInfo';
import { m2_video } from '../../Information/VideoInfo'
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { review_m2 } from '../../Information/ReviewInfo';
import { Review } from '../../components/Review';



export const M2 = () => {

    const [start, SetStart] = useState(true)
    const [video, SetVideo] = useState(false)
    const [review, SetReview] = useState(false)


    if (start) {
        return (
            <>
                <Start
                    Title={info_m2.Title}
                    Summary={info_m2.Summary}
                    Image={info_m2.Image}
                    SetAsTrue={SetVideo}
                    SetAsFalse={SetStart} />
            </>
        )
    }

    else if (video) {
        return (
            <>
                <Video headerText={m2_video.headerText} url={m2_video.url} />
                <BsArrowRight onClick={() => { SetReview(true); SetVideo(false); }} className='next' />
                <BsArrowLeft onClick={() => { SetStart(true); SetVideo(false); }} className='back' />
            </>
        )
    }

    else if (review) {
        return (
            <>
                <Review Description={review_m2.Description} Modules={review_m2.Modules} NextModule={review_m2.NextModule} />
                <BsArrowLeft onClick={() => { SetVideo(true) }} className='back' />
            </>
        )
    }
}
