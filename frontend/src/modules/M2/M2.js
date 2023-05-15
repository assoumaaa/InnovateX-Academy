import React, { useState } from 'react'
import { Modules } from '../../components/Modules'
import { Start } from '../../components/Start';
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { info_m2 } from '../../Information/StartInfo';
import { m2_video } from '../../Information/VideoInfo'
import { Video } from '../../components/Video';



export const M2 = () => {

    const [start, SetStart] = useState(true)
    const [video, SetVideo] = useState(false)


    if (start) {
        return (
            <>
                <Modules />
                <Start
                    Title={info_m2.Title}
                    Summary={info_m2.Summary}
                    Image={info_m2.Image}
                    SetAsTrue={SetVideo}
                    SetAsFalse={SetStart} />
            </>
        )
    }

    else if (video) {
        return (
            <>
                <Modules />
                <Video headerText={m2_video.headerText} url={m2_video.url} />
                <BsArrowLeft onClick={() => { SetVideo(false); SetStart(true); }} className='back' />
            </>
        )
    }
}
