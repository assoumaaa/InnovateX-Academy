import React, { useState } from 'react'
import { Start } from '../../components/Start'
import { info_m6 } from '../../Information/StartInfo'
import { POV } from './POV'
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { HMW } from './HMW';
import { SuccessTool } from './SuccessTool';
import { review_m6 } from '../../Information/ReviewInfo';
import { Review } from '../../components/Review';

export const M6 = () => {

    const [step, setStep] = useState('start');

    const transitions = {
        start: () => setStep('def'),
        def: () => setStep('howMightWe'),
        howMightWe: () => setStep('successTool'),
        successTool: () => setStep('review'),
        review: () => setStep('start')
    };

    const goBack = {
        def: () => setStep('start'),
        howMightWe: () => setStep('def'),
        successTool: () => setStep('howMightWe'),
        review: () => setStep('successTool')
    };

    switch (step) {
        case 'start':
            return (
                <>
                    <Start
                        Title={info_m6.Title}
                        Summary={info_m6.Summary}
                        Image={info_m6.Image}
                        SetAsTrue={transitions.start}
                    />
                </>
            );

        case 'def':
            return (
                <>
                    <POV />
                    <BsArrowRight onClick={transitions.def} className='next' />
                    <BsArrowLeft onClick={goBack.def} className='back' />
                </>
            );

        case 'howMightWe':
            return (
                <>
                    <HMW />
                    <BsArrowRight onClick={transitions.howMightWe} className='next' />
                    <BsArrowLeft onClick={goBack.howMightWe} className='back' />
                </>
            );

        case 'successTool':
            return (
                <>
                    <SuccessTool />
                    <BsArrowRight onClick={transitions.successTool} className='next' />
                    <BsArrowLeft onClick={goBack.successTool} className='back' />
                </>
            );

        case 'review':
            return (
                <>
                    <Review Description={review_m6.Description} Modules={review_m6.Modules} NextModule={review_m6.NextModule} />
                </>
            );

        default:
            return <div>Invalid step</div>;
    }
}
