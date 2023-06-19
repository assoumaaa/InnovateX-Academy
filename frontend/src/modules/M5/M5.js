import React, { useState } from 'react'
import { ValuePropCanva } from './ValuePropCanva'
import { info_m5 } from '../../Information/StartInfo'
import { Start } from '../../components/Start'
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { InfoWithImageOnSide } from '../../components/InfoWithImageOnSide';
import { moduleInfo1_m5, moduleInfo2_m5, moduleInfo3_m5 } from '../../Information/ModuleInfo';
import { ImageWithHeader } from '../../components/ImageWithHeader';
import { Video } from '../../components/Video';
import { m5_video } from '../../Information/VideoInfo';
import { CanvaTask } from './CanvaTask';
import { Review } from '../../components/Review';
import { review_m5 } from '../../Information/ReviewInfo';

export const M5 = () => {

    const [step, setStep] = useState('start');

    const transitions = {
        start: () => setStep('def'),
        def: () => setStep('customerProfile'),
        customerProfile: () => setStep('valueProposition'),
        valueProposition: () => setStep('valuePropositionCanva'),
        valuePropositionCanva: () => setStep('valuePropositionCanvaImg'),
        valuePropositionCanvaImg: () => setStep('video'),
        video: () => setStep('canvaTask'),
        canvaTask: () => setStep('review'),
        review: () => setStep('start')
    };

    const goBack = {
        def: () => setStep('start'),
        customerProfile: () => setStep('def'),
        valueProposition: () => setStep('customerProfile'),
        valuePropositionCanva: () => setStep('valueProposition'),
        valuePropositionCanvaImg: () => setStep('valuePropositionCanva'),
        video: () => setStep('valuePropositionCanvaImg'),
        canvaTask: () => setStep('video'),
        review: () => setStep('canvaTask')
    };

    switch (step) {
        case 'start':
            return (
                <>
                    <Start
                        Title={info_m5.Title}
                        Summary={info_m5.Summary}
                        Image={info_m5.Image}
                        SetAsTrue={transitions.start}
                    />
                </>
            );

        case 'def':
            return (
                <>
                    <ValuePropCanva />
                    <BsArrowRight onClick={transitions.def} className='next' />
                    <BsArrowLeft onClick={goBack.def} className='back' />
                </>
            );

        case 'customerProfile':
            return (
                <>
                    <InfoWithImageOnSide Title={moduleInfo1_m5.Title} NumbersTitles={moduleInfo1_m5.NumbersTitles} NumbersInformation={moduleInfo1_m5.NumbersInformation} Image={moduleInfo1_m5.Image} />
                    <BsArrowRight onClick={transitions.customerProfile} className='next' />
                    <BsArrowLeft onClick={goBack.customerProfile} className='back' />
                </>
            );

        case 'valueProposition':
            return (
                <>
                    <InfoWithImageOnSide Title={moduleInfo2_m5.Title} NumbersTitles={moduleInfo2_m5.NumbersTitles} NumbersInformation={moduleInfo2_m5.NumbersInformation} Image={moduleInfo2_m5.Image} />
                    <BsArrowRight onClick={transitions.valueProposition} className='next' />
                    <BsArrowLeft onClick={goBack.valueProposition} className='back' />
                </>
            );

        case 'valuePropositionCanva':
            return (
                <>
                    <InfoWithImageOnSide Title={moduleInfo3_m5.Title} NumbersTitles={moduleInfo3_m5.NumbersTitles} NumbersInformation={moduleInfo3_m5.NumbersInformation} Image={moduleInfo3_m5.Image} />
                    <BsArrowRight onClick={transitions.valuePropositionCanva} className='next' />
                    <BsArrowLeft onClick={goBack.valuePropositionCanva} className='back' />
                </>
            );

        case 'valuePropositionCanvaImg':
            return (
                <>
                    <ImageWithHeader Title={''} Image={'../../images/m5/valuePropCanva2.png'} />
                    <BsArrowRight onClick={transitions.valuePropositionCanvaImg} className='next' />
                    <BsArrowLeft onClick={goBack.valuePropositionCanvaImg} className='back' />
                </>
            );

        case 'video':
            return (
                <>
                    <Video headerText={m5_video.headerText} url={m5_video.url} />
                    <BsArrowRight onClick={transitions.video} className='next' />
                    <BsArrowLeft onClick={goBack.video} className='back' />
                </>
            );

        case 'canvaTask':
            return (
                <>
                    <CanvaTask />
                    <BsArrowRight onClick={transitions.canvaTask} className='next' />
                    <BsArrowLeft onClick={goBack.canvaTask} className='back' />
                </>
            );

        case 'review':
            return (
                <>
                    <Review Description={review_m5.Description} Modules={review_m5.Modules} NextModule={review_m5.NextModule} />
                    <BsArrowLeft onClick={goBack.review} className='back' />
                </>
            );

        default:
            return <div>Invalid step</div>;
    }
}
