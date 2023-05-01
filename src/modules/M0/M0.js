import React, { useState } from 'react'
import { Modules } from '../../components/Modules';
import { Start } from './Start';
import { Definition } from './Definition';
import '../../sass/Modules/M0/M0.scss'




export const M0 = () => {

    const [def, SetDef] = useState(false)

    return (
        <div className="m0">
            <Modules />
            {!def ? (
                <Start SetDef={SetDef} />
            ) : (
                <Definition SetDef={SetDef} />
            )}
        </div>

    )
}

//<img src='../images/m0.png'/>