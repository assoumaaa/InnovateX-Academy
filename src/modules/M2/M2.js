import React, { useState } from 'react'
import { Modules } from '../../components/Modules'
import { Start } from './Start'



export const M2 = () => {
  
    const [start, SetStart] = useState(true)

    if ( start ){
        return (
            <>
                <Modules />            
                <Start />
            </>
        )
    }
}
