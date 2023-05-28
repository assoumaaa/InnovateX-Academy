import React, { useState } from 'react'
import { Start } from '../../components/Start'
import { info_m7 } from '../../Information/StartInfo'
import { ScamperDef } from './ScamperDef'
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { Video } from '../../components/Video';
import { m7_video } from '../../Information/VideoInfo';
import { ScamperTask } from './ScamperTask';

export const M7 = () => {
    const [start, SetStart] = useState(false)
    const [scamperDef, SetScamperDef] = useState(false)
    const [scamperVideo, SetScamperVideo] = useState(false)
    const [scamperTask, SetScamperTask] = useState(true)

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
                <BsArrowLeft onClick={() => { SetScamperDef(true); SetScamperVideo(false); }} className='back' />
            </>
        )
    }
}
