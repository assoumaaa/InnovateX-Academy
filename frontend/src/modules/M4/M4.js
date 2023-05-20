import React, { useState } from 'react'
import { info_m4 } from '../../Information/StartInfo'
import { Start } from '../../components/Start'


export const M4 = () => {

    const [start, SetStart] = useState(true)
    const [def, SetDef] = useState(false)


    if (start) {
        return (
            <>
                <Start
                    Title={info_m4.Title}
                    Summary={info_m4.Summary}
                    Image={info_m4.Image}
                    SetAsTrue={SetDef}
                    SetAsFalse={SetStart} />
            </>
        )
    }
}
