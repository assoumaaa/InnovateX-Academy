import React, { useState } from 'react'
import { Start } from '../../components/Start';
import { info_m3 } from '../../Information/StartInfo';
import { Persona } from './Persona';
import { EmpathyMap } from './EmpathyMap';
import { EmpathyMapImage } from './EmpathyMapImage';
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { Video } from '../../components/Video';
import { m3_video } from '../../Information/VideoInfo';
import { StartingEmpathyMap } from './StartingEmpathyMap';
import { EmpathyMapTask } from './EmpathyMapTask';
import { review_m3 } from '../../Information/ReviewInfo';
import { Review } from '../../components/Review';

export const M3 = () => {

    const [step, setStep] = useState('start');

    const transitions = {
        start: () => setStep('def'),
        def: () => setStep('video'),
        video: () => setStep('empathyMap'),
        empathyMap: () => setStep('empathyMapImage'),
        empathyMapImage: () => setStep('startingEmpathyMap'),
        startingEmpathyMap: () => setStep('empathyMapTask'),
        empathyMapTask: () => setStep('review'),
        review: () => setStep('start')
    };

    const goBack = {
        def: () => setStep('start'),
        video: () => setStep('def'),
        empathyMap: () => setStep('video'),
        empathyMapImage: () => setStep('empathyMap'),
        startingEmpathyMap: () => setStep('empathyMapImage'),
        empathyMapTask: () => setStep('startingEmpathyMap'),
        review: () => setStep('empathyMapTask')
    };

    switch (step) {
        case 'start':
            return (
                <>
                    <Start
                        Title={info_m3.Title}
                        Summary={info_m3.Summary}
                        Image={info_m3.Image}
                        SetAsTrue={transitions.start}
                    />
                </>
            );

        case 'def':
            return (
                <>
                    <Persona />
                    <BsArrowRight onClick={transitions.def} className='next' />
                    <BsArrowLeft onClick={goBack.def} className='back' />
                </>
            );

        case 'video':
            return (
                <>
                    <Video headerText={m3_video.headerText} url={m3_video.url} />
                    <BsArrowRight onClick={transitions.video} className='next' />
                    <BsArrowLeft onClick={goBack.video} className='back' />
                </>
            );

        case 'empathyMap':
            return (
                <>
                    <EmpathyMap />
                    <BsArrowRight onClick={transitions.empathyMap} className='next' />
                    <BsArrowLeft onClick={goBack.empathyMap} className='back' />
                </>
            );

        case 'empathyMapImage':
            return (
                <>
                    <EmpathyMapImage />
                    <BsArrowRight onClick={transitions.empathyMapImage} className='next' />
                    <BsArrowLeft onClick={goBack.empathyMapImage} className='back' />
                </>
            );

        case 'startingEmpathyMap':
            return (
                <>
                    <StartingEmpathyMap SetEmpathyMapTask={transitions.startingEmpathyMap} />
                    <BsArrowLeft onClick={goBack.startingEmpathyMap} className='back' />
                </>
            );

        case 'empathyMapTask':
            return (
                <>
                    <EmpathyMapTask SetReview={transitions.empathyMapTask} />
                    <BsArrowLeft onClick={goBack.empathyMapTask} className='back' />
                </>
            );

        case 'review':
            return (
                <>
                    <Review Description={review_m3.Description} Modules={review_m3.Modules} NextModule={review_m3.NextModule} />
                </>
            );

        default:
            return <div>Invalid step</div>;
    }
}
