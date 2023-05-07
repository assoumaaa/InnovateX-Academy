import React, { useState } from 'react'
import { Modules } from '../../components/Modules';
import { Start } from './Start';
import { Definition } from './Definition';
import { Questions } from './Questions';





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
                <Definition SetDef={SetDef} SetQuestions={SetQuestions} />
            </>
        );
    }

    else if (questions) {
        return (
            <>
                <Modules />
                <Questions SetQuestions={SetQuestions} />
            </>
        );
    }
}



