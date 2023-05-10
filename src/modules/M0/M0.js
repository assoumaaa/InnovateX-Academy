import React, { useState } from 'react'
import { Modules } from '../../components/Modules';
import { Start } from './Start';
import { Definition } from './Definition';
import { Questions } from './Questions';
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";





export const M0 = () => {

    const [def, SetDef] = useState(false)
    const [questions, SetQuestions] = useState(false)




    // START PAGE
    if (!def) {
        return (
            <>
                <Modules />
                <Start SetDef={SetDef} />
            </>
        );
    }

    else if (def && !questions) {
        return (
            <>
                <Modules />
                <Definition />
                <BsArrowRight onClick={() => SetQuestions(true)} className='next' />
                <BsArrowLeft onClick={() => SetDef(false)} className='back' />
            </>
        );
    }

    else if (questions) {
        return (
            <>
                <Modules />
                <Questions />
                <BsArrowLeft onClick={() => SetQuestions(false)} className='back' />
            </>
        );
    }
}



