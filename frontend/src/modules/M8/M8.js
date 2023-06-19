import React, { useState } from 'react'
import { Start } from '../../components/Start'
import { info_m8 } from '../../Information/StartInfo'
import { TwoTypesPrototyping } from './TwoTypesPrototyping'
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { LowPrototyping } from './LowPrototyping';
import { HighPrototyping } from './HighPrototyping';
import { Reminder } from './Reminder';
import { Question } from './Question';
import { Video } from '../../components/Video';
import { m8_video1, m8_video2, m8_video3, m8_video4 } from '../../Information/VideoInfo';
import { VisualPrototyping } from './VisualPrototyping';
import { WorkingPrototyping } from './WorkingPrototyping';
import { InfoWithImageOnSide } from '../../components/InfoWithImageOnSide';
import { moduleInfo1_m8, moduleInfo2_m8 } from '../../Information/ModuleInfo';

export const M8 = () => {

    const [step, setStep] = useState('start');

    const transitions = {
        start: () => setStep('twoTypesPrototyping'),
        twoTypesPrototyping: () => setStep('lowPrototyping'),
        lowPrototyping: () => setStep('highPrototyping'),
        highPrototyping: () => setStep('reminder'),
        reminder: () => setStep('question'),
        question: () => setStep('video1'),
        video1: () => setStep('visualPrototyping'),
        visualPrototyping: () => setStep('video2'),
        video2: () => setStep('workingPrototyping'),
        workingPrototyping: () => setStep('swift'),
        swift: () => setStep('video3'),
        video3: () => setStep('framer'),
        framer: () => setStep('video4'),
        video4: () => setStep('start')
    };

    const goBack = {
        twoTypesPrototyping: () => setStep('start'),
        lowPrototyping: () => setStep('twoTypesPrototyping'),
        highPrototyping: () => setStep('lowPrototyping'),
        reminder: () => setStep('highPrototyping'),
        question: () => setStep('reminder'),
        video1: () => setStep('question'),
        visualPrototyping: () => setStep('video1'),
        video2: () => setStep('visualPrototyping'),
        workingPrototyping: () => setStep('video2'),
        swift: () => setStep('workingPrototyping'),
        video3: () => setStep('swift'),
        framer: () => setStep('video3'),
        video4: () => setStep('framer')
    };

    switch (step) {
        case 'start':
            return (
                <>
                    <Start
                        Title={info_m8.Title}
                        Summary={info_m8.Summary}
                        Image={info_m8.Image}
                        SetAsTrue={transitions.start}
                    />
                </>
            );

        case 'twoTypesPrototyping':
            return (
                <>
                    <TwoTypesPrototyping />
                    <BsArrowRight onClick={transitions.twoTypesPrototyping} className='next' />
                    <BsArrowLeft onClick={goBack.twoTypesPrototyping} className='back' />
                </>
            );

        case 'lowPrototyping':
            return (
                <>
                    <LowPrototyping />
                    <BsArrowRight onClick={transitions.lowPrototyping} className='next' />
                    <BsArrowLeft onClick={goBack.lowPrototyping} className='back' />
                </>
            );

        case 'highPrototyping':
            return (
                <>
                    <HighPrototyping />
                    <BsArrowRight onClick={transitions.highPrototyping} className='next' />
                    <BsArrowLeft onClick={goBack.highPrototyping} className='back' />
                </>
            );

        case 'reminder':
            return (
                <>
                    <Reminder />
                    <BsArrowRight onClick={transitions.reminder} className='next' />
                    <BsArrowLeft onClick={goBack.reminder} className='back' />
                </>
            );

        case 'question':
            return (
                <>
                    <Question />
                    <BsArrowRight onClick={transitions.question} className='next' />
                    <BsArrowLeft onClick={goBack.question} className='back' />
                </>
            );

        case 'video1':
            return (
                <>
                    <Video headerText={m8_video1.headerText} url={m8_video1.url} />
                    <BsArrowRight onClick={transitions.video1} className='next' />
                    <BsArrowLeft onClick={goBack.video1} className='back' />
                </>
            );

        case 'visualPrototyping':
            return (
                <>
                    <VisualPrototyping />
                    <BsArrowRight onClick={transitions.visualPrototyping} className='next' />
                    <BsArrowLeft onClick={goBack.visualPrototyping} className='back' />
                </>
            );

        case 'video2':
            return (
                <>
                    <Video headerText={m8_video2.headerText} url={m8_video2.url} />
                    <BsArrowRight onClick={transitions.video2} className='next' />
                    <BsArrowLeft onClick={goBack.video2} className='back' />
                </>
            );

        case 'workingPrototyping':
            return (
                <>
                    <WorkingPrototyping />
                    <BsArrowRight onClick={transitions.workingPrototyping} className='next' />
                    <BsArrowLeft onClick={goBack.workingPrototyping} className='back' />
                </>
            );

        case 'swift':
            return (
                <>
                    <InfoWithImageOnSide Title={moduleInfo1_m8.Title} NumbersTitles={moduleInfo1_m8.NumbersTitles} NumbersInformation={moduleInfo1_m8.NumbersInformation} Image={moduleInfo1_m8.Image} />
                    <BsArrowRight onClick={transitions.swift} className='next' />
                    <BsArrowLeft onClick={goBack.swift} className='back' />
                </>
            );

        case 'video3':
            return (
                <>
                    <Video headerText={m8_video3.headerText} url={m8_video3.url} />
                    <BsArrowRight onClick={transitions.video3} className='next' />
                    <BsArrowLeft onClick={goBack.video3} className='back' />
                </>
            );

        case 'framer':
            return (
                <>
                    <InfoWithImageOnSide Title={moduleInfo2_m8.Title} NumbersTitles={moduleInfo2_m8.NumbersTitles} NumbersInformation={moduleInfo2_m8.NumbersInformation} Image={moduleInfo2_m8.Image} />
                    <BsArrowRight onClick={transitions.framer} className='next' />
                    <BsArrowLeft onClick={goBack.framer} className='back' />
                </>
            );

        case 'video4':
            return (
                <>
                    <Video headerText={m8_video4.headerText} url={m8_video4.url} />
                    <BsArrowLeft onClick={goBack.video4} className='back' />
                </>
            );

        default:
            throw new Error(`Invalid step: ${step}`);
    }
}



