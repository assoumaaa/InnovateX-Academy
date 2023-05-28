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

    const [start, SetStart] = useState(true)
    const [def, SetDef] = useState(false)
    const [video, SetVideo] = useState(false)
    const [empathyMap, SetEmpathyMap] = useState(false)
    const [empathyMapImage, SetEmpathyMapImage] = useState(false)
    const [startingEmpathyMap, SetStartingEmpathyMap] = useState(false)
    const [empathyMapTask, SetEmpathyMapTask] = useState(false)
    const [review, SetReview] = useState(false)




    if (start) {
        return (
            <>
                <Start
                    Title={info_m3.Title}
                    Summary={info_m3.Summary}
                    Image={info_m3.Image}
                    SetAsTrue={SetDef}
                    SetAsFalse={SetStart} />
            </>
        )
    }

    else if (def) {
        return (
            <>
                <Persona />
                <BsArrowRight onClick={() => { SetVideo(true); SetDef(false); }} className='next' />
                <BsArrowLeft onClick={() => { SetStart(true); SetDef(false); }} className='back' />
            </>
        )
    }

    else if (video) {
        return (
            <>
                <Video headerText={m3_video.headerText} url={m3_video.url} />
                <BsArrowRight onClick={() => { SetEmpathyMap(true); SetVideo(false); }} className='next' />
                <BsArrowLeft onClick={() => { SetDef(true); SetVideo(false); }} className='back' />
            </>
        )
    }

    else if (empathyMap) {
        return (
            <>
                <EmpathyMap />
                <BsArrowRight onClick={() => { SetEmpathyMapImage(true); SetEmpathyMap(false); }} className='next' />
                <BsArrowLeft onClick={() => { SetVideo(true); SetEmpathyMap(false); }} className='back' />
            </>
        )
    }

    else if (empathyMapImage) {
        return (
            <>
                <EmpathyMapImage />
                <BsArrowRight onClick={() => { SetStartingEmpathyMap(true); SetEmpathyMapImage(false); }} className='next' />
                <BsArrowLeft onClick={() => { SetEmpathyMap(true); SetEmpathyMapImage(false); }} className='back' />
            </>
        )
    }

    else if (startingEmpathyMap) {
        return (
            <>
                <StartingEmpathyMap SetEmpathyMapTask={SetEmpathyMapTask} SetStartingEmpathyMap={SetStartingEmpathyMap} />
                <BsArrowLeft onClick={() => { SetEmpathyMapImage(true); SetStartingEmpathyMap(false); }} className='back' />
            </>
        )
    }

    else if (empathyMapTask) {
        return (
            <>
                <EmpathyMapTask SetReview={SetReview} SetEmpathyMapTask={SetEmpathyMapTask} />
                <BsArrowLeft onClick={() => { SetStartingEmpathyMap(true); SetEmpathyMapTask(false); }} className='back' />
            </>
        )
    }

    else if (review) {
        return (
            <>
                <Review Description={review_m3.Description} Modules={review_m3.Modules} NextModule={review_m3.NextModule} />
            </>
        )
    }
}
