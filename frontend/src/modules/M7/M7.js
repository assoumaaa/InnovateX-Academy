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
    const [start, SetStart] = useState(true)
    const [scamperDef, SetScamperDef] = useState(false)
    const [scamperVideo, SetScamperVideo] = useState(false)
    const [scamperTask, SetScamperTask] = useState(false)
    const [divergentThinking, SetDivergentThinking] = useState(false)
    const [convergentThinking, SetConvergentThinking] = useState(false)
    const [image, SetImage] = useState(false)
    const [timerTask, SetTimerTask] = useState(false)
    const [review, SetReview] = useState(false)

    if (start) {
        return (
            <>
                <Start
                    Title={info_m7.Title}
                    Summary={info_m7.Summary}
                    Image={info_m7.Image}
                    SetAsTrue={SetScamperDef}
                    SetAsFalse={SetStart} />
            </>
        )
    }

    else if (scamperDef) {
        return (
            <>
                <ScamperDef />
                <BsArrowRight onClick={() => { SetScamperVideo(true); SetScamperDef(false); }} className='next' />
                <BsArrowLeft onClick={() => { SetStart(true); SetScamperDef(false); }} className='back' />
            </>
        )
    }
    else if (scamperVideo) {
        return (
            <>
                <Video headerText={m7_video.headerText} url={m7_video.url} />
                <BsArrowRight onClick={() => { SetScamperTask(true); SetScamperVideo(false); }} className='next' />
                <BsArrowLeft onClick={() => { SetScamperDef(true); SetScamperVideo(false); }} className='back' />
            </>
        )
    }

    else if (scamperTask) {
        return (
            <>
                <ScamperTask />
                <BsArrowRight onClick={() => { SetDivergentThinking(true); SetScamperTask(false); }} className='next' />
                <BsArrowLeft onClick={() => { SetScamperVideo(true); SetScamperTask(false); }} className='back' />
            </>
        )
    }
    else if (divergentThinking) {
        return (
            <>
                <DivergentThinking />
                <BsArrowRight onClick={() => { SetConvergentThinking(true); SetDivergentThinking(false); }} className='next' />
                <BsArrowLeft onClick={() => { SetScamperTask(true); SetDivergentThinking(false); }} className='back' />
            </>
        )
    }
    else if (convergentThinking) {
        return (
            <>
                <ConvergentThinking />
                <BsArrowRight onClick={() => { SetImage(true); SetConvergentThinking(false); }} className='next' />
                <BsArrowLeft onClick={() => { SetDivergentThinking(true); SetConvergentThinking(false); }} className='back' />
            </>
        )
    }
    else if (image) {
        return (
            <>
                <ImageWithHeader Title={'Convergent and Divergent!'} Image={'../../images/m7/image.png'} />
                <BsArrowRight onClick={() => { SetTimerTask(true); SetImage(false); }} className='next' />
                <BsArrowLeft onClick={() => { SetConvergentThinking(true); SetImage(false); }} className='back' />
            </>
        )
    }
    else if (timerTask) {
        return (
            <>
                <TimerTask />
                <BsArrowRight onClick={() => { SetReview(true); SetTimerTask(false); }} className='next' />
                <BsArrowLeft onClick={() => { SetImage(true); SetTimerTask(false); }} className='back' />
            </>
        )
    }
    else if (review) {
        return (
            <>
                <Review Description={review_m7.Description} Modules={review_m7.Modules} NextModule={review_m7.NextModule} />
                <BsArrowLeft onClick={() => { SetTimerTask(true) }} className='back' />
            </>
        )
    }
}


