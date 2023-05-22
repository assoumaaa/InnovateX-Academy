import React, { useState } from 'react'
import { ValuePropCanva } from './ValuePropCanva'
import { info_m5 } from '../../Information/StartInfo'
import { Start } from '../../components/Start'
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { InfoWithImageOnSide } from '../../components/InfoWithImageOnSide';
import { moduleInfo1_m5 } from '../../Information/ModuleInfo'
import { moduleInfo2_m5 } from '../../Information/ModuleInfo';
import { moduleInfo3_m5 } from '../../Information/ModuleInfo';
import { ImageWithHeader } from '../../components/ImageWithHeader';
import { Video } from '../../components/Video';
import { m5_video } from '../../Information/VideoInfo';
import { CanvaTask } from './CanvaTask';
import { Review } from '../../components/Review';
import { review_m5 } from '../../Information/ReviewInfo';


export const M5 = () => {

    const [start, SetStart] = useState(true)
    const [def, SetDef] = useState(false)
    const [customerProfile, SetCustomerProfile] = useState(false)
    const [valueProposition, SetValueProposition] = useState(false)
    const [valuePropositionCanva, SetValuePropositionCanva] = useState(false)
    const [valuePropositionCanvaImg, SetValuePropositionCanvaImg] = useState(false)
    const [video, SetVideo] = useState(false)
    const [canvaTask, SetCanvaTask] = useState(false)
    const [review, SetReview] = useState(false)


    if (start) {
        return (
            <>
                <Start
                    Title={info_m5.Title}
                    Summary={info_m5.Summary}
                    Image={info_m5.Image}
                    SetAsTrue={SetDef}
                    SetAsFalse={SetStart} />
            </>
        )
    }

    else if (def) {
        return (
            <>
                <ValuePropCanva />
                <BsArrowRight onClick={() => { SetCustomerProfile(true); SetDef(false); }} className='next' />
                <BsArrowLeft onClick={() => { SetStart(true); SetDef(false); }} className='back' />
            </>
        )
    }

    else if (customerProfile) {
        return (
            <>
                <InfoWithImageOnSide Title={moduleInfo1_m5.Title} NumbersTitles={moduleInfo1_m5.NumbersTitles} NumbersInformation={moduleInfo1_m5.NumbersInformation} Image={moduleInfo1_m5.Image} />
                <BsArrowRight onClick={() => { SetValueProposition(true); SetCustomerProfile(false); }} className='next' />
                <BsArrowLeft onClick={() => { SetDef(true); SetCustomerProfile(false); }} className='back' />
            </>
        )
    }

    else if (valueProposition) {
        return (
            <>
                <InfoWithImageOnSide Title={moduleInfo2_m5.Title} NumbersTitles={moduleInfo2_m5.NumbersTitles} NumbersInformation={moduleInfo2_m5.NumbersInformation} Image={moduleInfo2_m5.Image} />
                <BsArrowRight onClick={() => { SetValuePropositionCanva(true); SetValueProposition(false); }} className='next' />
                <BsArrowLeft onClick={() => { SetCustomerProfile(true); SetValueProposition(false); }} className='back' />
            </>
        )
    }

    else if (valuePropositionCanva) {
        return (
            <>
                <InfoWithImageOnSide Title={moduleInfo3_m5.Title} NumbersTitles={moduleInfo3_m5.NumbersTitles} NumbersInformation={moduleInfo3_m5.NumbersInformation} Image={moduleInfo3_m5.Image} />
                <BsArrowRight onClick={() => { SetValuePropositionCanvaImg(true); SetValuePropositionCanva(false); }} className='next' />
                <BsArrowLeft onClick={() => { SetValueProposition(true); SetValuePropositionCanva(false); }} className='back' />
            </>
        )
    }

    else if (valuePropositionCanvaImg) {
        return (
            <>
                <ImageWithHeader Title={''} Image={'../../images/m5/valuePropCanva2.png'} />
                <BsArrowRight onClick={() => { SetVideo(true); SetValuePropositionCanvaImg(false); }} className='next' />
                <BsArrowLeft onClick={() => { SetValuePropositionCanva(true); SetValuePropositionCanvaImg(false); }} className='back' />
            </>
        )
    }

    else if (video) {
        return (
            <>
                <Video headerText={m5_video.headerText} url={m5_video.url} />
                <BsArrowRight onClick={() => { SetCanvaTask(true); SetVideo(false); }} className='next' />
                <BsArrowLeft onClick={() => { SetValuePropositionCanva(true); SetValuePropositionCanvaImg(false); }} className='back' />
            </>
        )
    }

    else if (canvaTask) {
        return (
            <>
                <CanvaTask />
                <BsArrowRight onClick={() => { SetReview(true); SetCanvaTask(false); }} className='next' />
                <BsArrowLeft onClick={() => { SetVideo(true); SetCanvaTask(false); }} className='back' />
            </>
        )
    }

    else if (review) {
        return (
            <>
                <Review Description={review_m5.Description} Modules={review_m5.Modules} NextModule={review_m5.NextModule} />
                <BsArrowLeft onClick={() => { SetVideo(true); SetCanvaTask(false); }} className='back' />
            </>
        )
    }
}

