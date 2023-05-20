import React, { useState } from 'react'
import { Definition } from './Definition';
import { Questions } from './Questions';
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { info_m0 } from '../../Information/StartInfo';
import { Start } from '../../components/Start';
import '../../sass/Arrows.scss'





export const M0 = () => {

    const [start, SetStart] = useState(true)
    const [def, SetDef] = useState(false)
    const [questions, SetQuestions] = useState(false)





    if (start) {
        return (
            <>
                <Start
                    Title={info_m0.Title}
                    Summary={info_m0.Summary}
                    Image={info_m0.Image}
                    SetAsTrue={SetDef}
                    SetAsFalse={SetStart} />
            </>
        );
    }

    else if (def) {
        return (
            <>
                <Definition />
                <BsArrowRight onClick={() => { SetDef(false); SetQuestions(true) }} className='next' />
                <BsArrowLeft onClick={() => { SetDef(false); SetStart(true); }} className='back' />
            </>
        );
    }

    else if (questions) {
        return (
            <>
                <Questions />
                <BsArrowLeft onClick={() => { SetQuestions(false); SetDef(true); }} className='back' />
            </>
        );
    }
}



