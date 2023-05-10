import React, { useState } from 'react'
import { Modules } from '../../components/Modules'
import { Start } from './Start'
import { Video } from './Video'
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";



export const M2 = () => {

    const [start, SetStart] = useState(true)
    const [video, SetVideo] = useState(false)


    if (start) {
        return (
            <>
                <Modules />
                <Start SetVideo={SetVideo} SetStart={SetStart} />
            </>
        )
    }

    else if (video) {
        return (
            <>
                <Modules />
                <Video />
                <BsArrowLeft onClick={() => { SetVideo(false); SetStart(true); }} className='back' />
            </>
        )
    }
}
