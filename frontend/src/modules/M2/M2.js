import React, { useState } from 'react'
import { Video } from '../../components/Video';
import { Start } from '../../components/Start';
import { info_m2 } from '../../Information/StartInfo';
import { m2_video } from '../../Information/VideoInfo'
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { review_m2 } from '../../Information/ReviewInfo';
import { Review } from '../../components/Review';


export const M2 = () => {

    const [step, setStep] = useState('start');

    const transitions = {
        start: () => setStep('video'),
        video: () => setStep('review'),
    };

    const goBack = {
        video: () => setStep('start'),
        review: () => setStep('video')
    };

    switch (step) {
        case 'start':
            return (
                <>
                    <Start
                        Title={info_m2.Title}
                        Summary={info_m2.Summary}
                        Image={info_m2.Image}
                        SetAsTrue={transitions.start}
                    />
                </>
            );

        case 'video':
            return (
                <>
                    <Video headerText={m2_video.headerText} url={m2_video.url} />
                    <BsArrowRight onClick={transitions.video} className='next' />
                    <BsArrowLeft onClick={goBack.video} className='back' />
                </>
            );

        case 'review':
            return (
                <>
                    <Review Description={review_m2.Description} Modules={review_m2.Modules} NextModule={review_m2.NextModule} />
                    <BsArrowLeft onClick={goBack.review} className='back' />
                </>
            );

        default:
            return <div>Invalid step</div>;
    }
}
