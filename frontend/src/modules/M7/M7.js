import React, { useState } from 'react'
import { Start } from '../../components/Start'
import { info_m7 } from '../../Information/StartInfo'
import { ScamperDef } from './ScamperDef'
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { Video } from '../../components/Video';
import { m7_video } from '../../Information/VideoInfo';
import { ScamperTask } from './ScamperTask';
import { DivergentThinking } from './DivergentThinking';
import { ConvergentThinking } from './ConvergentThinking';
import { ImageWithHeader } from '../../components/ImageWithHeader';
import { TimerTask } from './TimerTask';
import { review_m7 } from '../../Information/ReviewInfo';
import { Review } from '../../components/Review';

export const M7 = () => {

    const [step, setStep] = useState('start');

    const transitions = {
        start: () => setStep('scamperDef'),
        scamperDef: () => setStep('scamperVideo'),
        scamperVideo: () => setStep('scamperTask'),
        scamperTask: () => setStep('divergentThinking'),
        divergentThinking: () => setStep('convergentThinking'),
        convergentThinking: () => setStep('image'),
        image: () => setStep('timerTask'),
        timerTask: () => setStep('review'),
        review: () => setStep('start')
    };

    const goBack = {
        scamperDef: () => setStep('start'),
        scamperVideo: () => setStep('scamperDef'),
        scamperTask: () => setStep('scamperVideo'),
        divergentThinking: () => setStep('scamperTask'),
        convergentThinking: () => setStep('divergentThinking'),
        image: () => setStep('convergentThinking'),
        timerTask: () => setStep('image'),
        review: () => setStep('timerTask')
    };

    switch (step) {
        case 'start':
            return (
                <>
                    <Start
                        Title={info_m7.Title}
                        Summary={info_m7.Summary}
                        Image={info_m7.Image}
                        SetAsTrue={transitions.start}
                    />
                </>
            );

        case 'scamperDef':
            return (
                <>
                    <ScamperDef />
                    <BsArrowRight onClick={transitions.scamperDef} className='next' />
                    <BsArrowLeft onClick={goBack.scamperDef} className='back' />
                </>
            );

        case 'scamperVideo':
            return (
                <>
                    <Video headerText={m7_video.headerText} url={m7_video.url} />
                    <BsArrowRight onClick={transitions.scamperVideo} className='next' />
                    <BsArrowLeft onClick={goBack.scamperVideo} className='back' />
                </>
            );

        case 'scamperTask':
            return (
                <>
                    <ScamperTask />
                    <BsArrowRight onClick={transitions.scamperTask} className='next' />
                    <BsArrowLeft onClick={goBack.scamperTask} className='back' />
                </>
            );

        case 'divergentThinking':
            return (
                <>
                    <DivergentThinking />
                    <BsArrowRight onClick={transitions.divergentThinking} className='next' />
                    <BsArrowLeft onClick={goBack.divergentThinking} className='back' />
                </>
            );

        case 'convergentThinking':
            return (
                <>
                    <ConvergentThinking />
                    <BsArrowRight onClick={transitions.convergentThinking} className='next' />
                    <BsArrowLeft onClick={goBack.convergentThinking} className='back' />
                </>
            );

        case 'image':
            return (
                <>
                    <ImageWithHeader Title={'Convergent and Divergent!'} Image={'../../images/m7/image.png'} />
                    <BsArrowRight onClick={transitions.image} className='next' />
                    <BsArrowLeft onClick={goBack.image} className='back' />
                </>
            );

        case 'timerTask':
            return (
                <>
                    <TimerTask />
                    <BsArrowRight onClick={transitions.timerTask} className='next' />
                    <BsArrowLeft onClick={goBack.timerTask} className='back' />
                </>
            );

        case 'review':
            return (
                <>
                    <Review Description={review_m7.Description} Modules={review_m7.Modules} NextModule={review_m7.NextModule} />
                    <BsArrowLeft onClick={goBack.review} className='back' />
                </>
            );

        default:
            return <div>Invalid step</div>;
    }
}
