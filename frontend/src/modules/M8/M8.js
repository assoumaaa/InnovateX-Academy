import React, { useState } from 'react'
import { info_m8 } from '../../Information/StartInfo'
import { Start } from '../../components/Start'
import { TwoTypesPrototyping } from './TwoTypesPrototyping'
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { LowPrototyping } from './LowPrototyping';
import { HighPrototyping } from './HighPrototyping';
import { Reminder } from './Reminder';
import { Question } from './Question';
import { Video } from '../../components/Video';
import { m8_video1 } from '../../Information/VideoInfo';
import { m8_video2 } from '../../Information/VideoInfo';
import { m8_video3 } from '../../Information/VideoInfo';
import { m8_video4 } from '../../Information/VideoInfo';
import { VisualPrototyping } from './VisualPrototyping';
import { WorkingPrototyping } from './WorkingPrototyping';
import { InfoWithImageOnSide } from '../../components/InfoWithImageOnSide';
import { moduleInfo1_m8 } from '../../Information/ModuleInfo';
import { moduleInfo2_m8 } from '../../Information/ModuleInfo';

export const M8 = () => {
    const [start, SetStart] = useState(true)
    const [twoTypesPrototyping, SetTwoTypesPrototyping] = useState(false)
    const [lowPrototyping, SetLowPrototyping] = useState(false)
    const [highPrototyping, SetHighPrototyping] = useState(false)
    const [reminder, SetReminder] = useState(false)
    const [question, SetQuestion] = useState(false)
    const [video1, SetVideo1] = useState(false)
    const [video2, SetVideo2] = useState(false)
    const [video3, SetVideo3] = useState(false)
    const [video4, SetVideo4] = useState(false)
    const [visualPrototyping, SetVisualPrototyping] = useState(false)
    const [workingPrototyping, SetWorkingPrototyping] = useState(false)
    const [swift, SetSwift] = useState(false)
    const [framer, SetFramer] = useState(false)


    if (start) {
        return (
            <>
                <Start
                    Title={info_m8.Title}
                    Summary={info_m8.Summary}
                    Image={info_m8.Image}
                    SetAsTrue={SetTwoTypesPrototyping}
                    SetAsFalse={SetStart} />
            </>
        )
    }

    else if (twoTypesPrototyping) {
        return (
            <>
                <TwoTypesPrototyping />
                <BsArrowRight onClick={() => { SetLowPrototyping(true); SetTwoTypesPrototyping(false); }} className='next' />
                <BsArrowLeft onClick={() => { SetStart(true); SetTwoTypesPrototyping(false); }} className='back' />
            </>
        )
    }

    else if (lowPrototyping) {
        return (
            <>
                <LowPrototyping />
                <BsArrowRight onClick={() => { SetHighPrototyping(true); SetLowPrototyping(false); }} className='next' />
                <BsArrowLeft onClick={() => { SetTwoTypesPrototyping(true); SetLowPrototyping(false); }} className='back' />
            </>
        )
    }

    else if (highPrototyping) {
        return (
            <>
                <HighPrototyping />
                <BsArrowRight onClick={() => { SetReminder(true); SetHighPrototyping(false); }} className='next' />
                <BsArrowLeft onClick={() => { SetLowPrototyping(true); SetHighPrototyping(false); }} className='back' />
            </>
        )
    }

    else if (reminder) {
        return (
            <>
                <Reminder />
                <BsArrowRight onClick={() => { SetQuestion(true); SetReminder(false); }} className='next' />
                <BsArrowLeft onClick={() => { SetHighPrototyping(true); SetReminder(false); }} className='back' />
            </>
        )
    }
    else if (question) {
        return (
            <>
                <Question />
                <BsArrowRight onClick={() => { SetVideo1(true); SetQuestion(false); }} className='next' />
                <BsArrowLeft onClick={() => { SetReminder(true); SetQuestion(false); }} className='back' />
            </>
        )
    }

    else if (video1) {
        return (
            <>
                <Video headerText={m8_video1.headerText} url={m8_video1.url} />
                <BsArrowRight onClick={() => { SetVisualPrototyping(true); SetVideo1(false); }} className='next' />
                <BsArrowLeft onClick={() => { SetQuestion(true); SetVideo1(false); }} className='back' />
            </>
        )
    }

    else if (visualPrototyping) {
        return (
            <>
                <VisualPrototyping />
                <BsArrowRight onClick={() => { SetVideo2(true); SetVisualPrototyping(false); }} className='next' />
                <BsArrowLeft onClick={() => { SetVideo1(true); SetVisualPrototyping(false); }} className='back' />
            </>
        )
    }


    else if (video2) {
        return (
            <>
                <Video headerText={m8_video2.headerText} url={m8_video2.url} />
                <BsArrowRight onClick={() => { SetWorkingPrototyping(true); SetVideo2(false); }} className='next' />
                <BsArrowLeft onClick={() => { SetVisualPrototyping(true); SetVideo2(false); }} className='back' />
            </>
        )
    }
    else if (workingPrototyping) {
        return (
            <>
                <WorkingPrototyping />
                <BsArrowRight onClick={() => { SetSwift(true); SetWorkingPrototyping(false); }} className='next' />
                <BsArrowLeft onClick={() => { SetVideo2(true); SetWorkingPrototyping(false); }} className='back' />
            </>
        )
    }

    else if (swift) {
        return (
            <>
                <InfoWithImageOnSide Title={moduleInfo1_m8.Title} NumbersTitles={moduleInfo1_m8.NumbersTitles} NumbersInformation={moduleInfo1_m8.NumbersInformation} Image={moduleInfo1_m8.Image} />
                <BsArrowRight onClick={() => { SetVideo3(true); SetSwift(false); }} className='next' />
                <BsArrowLeft onClick={() => { SetWorkingPrototyping(true); SetSwift(false); }} className='back' />
            </>
        )
    }
    else if (video3) {
        return (
            <>
                <Video headerText={m8_video3.headerText} url={m8_video3.url} />
                <BsArrowRight onClick={() => { SetFramer(true); SetVideo3(false); }} className='next' />
                <BsArrowLeft onClick={() => { SetSwift(true); SetVideo3(false); }} className='back' />
            </>
        )
    }
    else if (framer) {
        return (
            <>
                <InfoWithImageOnSide Title={moduleInfo2_m8.Title} NumbersTitles={moduleInfo2_m8.NumbersTitles} NumbersInformation={moduleInfo2_m8.NumbersInformation} Image={moduleInfo2_m8.Image} />
                <BsArrowRight onClick={() => { SetVideo4(true); SetFramer(false); }} className='next' />
                <BsArrowLeft onClick={() => { SetVideo3(true); SetFramer(false); }} className='back' />
            </>
        )
    }
    else if (video4) {
        return (
            <>
                <Video headerText={m8_video4.headerText} url={m8_video4.url} />

                <BsArrowLeft onClick={() => { SetFramer(true); SetVideo4(false); }} className='back' />
            </>
        )
    }
}
