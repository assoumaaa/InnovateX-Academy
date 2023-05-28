import React, { useState } from 'react'
import { Start } from '../../components/Start'
import { info_m6 } from '../../Information/StartInfo'
import { POV } from './POV'
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { HMW } from './HMW';
import { SuccessTool } from './SuccessTool';


export const M6 = () => {

    const [start, SetStart] = useState(false)
    const [def, SetDef] = useState(false)
    const [howMightWe, SetHowMightWe] = useState(false)
    const [successTool, SetSuccessTool] = useState(true)

    if (start) {
        return (
            <>
                <Start
                    Title={info_m6.Title}
                    Summary={info_m6.Summary}
                    Image={info_m6.Image}
                    SetAsTrue={SetDef}
                    SetAsFalse={SetStart} />
            </>
        )
    }

    else if (def) {
        return (
            <>
                <POV />
                <BsArrowRight onClick={() => { SetHowMightWe(true); SetDef(false); }} className='next' />
                <BsArrowLeft onClick={() => { SetStart(true); SetDef(false); }} className='back' />
            </>
        )
    }

    else if (howMightWe) {
        return (
            <>
                <HMW />
                <BsArrowRight onClick={() => { SetSuccessTool(true); SetHowMightWe(false); }} className='next' />
                <BsArrowLeft onClick={() => { SetDef(true); SetHowMightWe(false); }} className='back' />
            </>
        )
    }

    else if (successTool) {
        return (
            <>
                <SuccessTool />
                <BsArrowLeft onClick={() => { SetHowMightWe(true); SetSuccessTool(false); }} className='back' />
            </>
        )
    }
}
