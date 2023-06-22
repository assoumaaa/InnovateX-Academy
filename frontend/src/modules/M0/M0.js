import React, { useState } from 'react';
import { Definition } from './Definition';
import { Questions } from './Questions';
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { info_m0 } from '../../Information/StartInfo';
import { Start } from '../../components/Start';
import '../../sass/Arrows.scss';

export const M0 = () => {
    const [step, setStep] = useState('start');

    const transitions = {
        start: () => setStep('definition'),
        definition: () => setStep('questions'),
        questions: () => setStep('start')
    };

    const goBack = {
        definition: () => setStep('start'),
        questions: () => setStep('definition')
    };

    switch (step) {
        case 'start':
            return (
                <Start
                    Title={info_m0.Title}
                    Summary={info_m0.Summary}
                    Image={info_m0.Image}
                    SetAsTrue={transitions.start}
                    SetAsFalse={() => { }}
                />
            );
        case 'definition':
            return (
                <>
                    <Definition />
                    <BsArrowRight onClick={transitions.definition} className='next' />
                    <BsArrowLeft onClick={goBack.definition} className='back' />
                </>
            );
        case 'questions':
            return (
                <>
                    <Questions />
                    <BsArrowLeft onClick={goBack.questions} className='back' />
                </>
            );
        default:
            return <div>Invalid step</div>;
    }
};
