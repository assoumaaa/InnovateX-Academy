import React, { useState } from 'react'
import { Review } from '../../components/Review'
import { MindMapping } from './MindMapping'
import { ModuleOneQuiz } from './ModuleOneQuiz'
import { Start } from '../../components/Start'
import { BrainStorming } from './BrainStorming'
import { SixThinkingHats } from './SixThinkingHats'
import { MindMappingQuiz } from './MindMappingQuiz'
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { SixThinkingHatsTask } from './SixThinkingHatsTask'
import { info_m1 } from '../../Information/StartInfo'
import { ImageWithHeader } from '../../components/ImageWithHeader';
import { review_m1 } from '../../Information/ReviewInfo'



export const M1 = () => {

  const [start, SetStart] = useState(true)
  const [img, SetImage] = useState(false)
  const [sixThinkingHats, SetSixThinkingHats] = useState(false)
  const [sixThinkingHatsTask, SetSixThinkingHatsTask] = useState(false)
  const [mindMapping, SetMindMapping] = useState(false)
  const [mindMappingQuizStart, SetMindMappingQuizStart] = useState(false)
  const [moduleOneQuiz, SetModuleOneQuiz] = useState(false)
  const [brainStorming, SetBrainStorming] = useState(false)
  const [review, SetReview] = useState(false)





  if (start) {
    return (
      <>

        <Start
          Title={info_m1.Title}
          Summary={info_m1.Summary}
          Image={info_m1.Image}
          SetAsTrue={SetImage}
          SetAsFalse={SetStart} />
      </>
    )
  }

  else if (img) {
    return (
      <>
        <ImageWithHeader Title={'Quick Insight!'} Image={'../../images/m1/mindmapping.png'} />
        <BsArrowRight onClick={() => { SetSixThinkingHats(true); SetImage(false); }} className='next' />
        <BsArrowLeft onClick={() => { SetStart(true); SetImage(false); }} className='back' />
      </>
    )
  }
  else if (sixThinkingHats) {
    return (
      <>
        <SixThinkingHats />
        <BsArrowRight onClick={() => { SetSixThinkingHats(false); SetSixThinkingHatsTask(true); }} className='next' />
        <BsArrowLeft onClick={() => { SetImage(true); }} className='back' />
      </>
    )
  }
  else if (sixThinkingHatsTask) {
    return (
      <>
        <SixThinkingHatsTask />
        <BsArrowRight onClick={() => { SetSixThinkingHatsTask(false); SetMindMapping(true); }} className='next' />
        <BsArrowLeft onClick={() => { SetSixThinkingHats(true) }} className='back' />
      </>
    )
  }
  else if (mindMapping) {
    return (
      <>
        <MindMapping />
        <BsArrowRight onClick={() => { SetMindMapping(false); SetMindMappingQuizStart(true); }} className='next' />
        <BsArrowLeft onClick={() => { SetSixThinkingHatsTask(true) }} className='back' />
      </>
    )
  }
  else if (mindMappingQuizStart) {
    return (
      <>
        <MindMappingQuiz SetModuleOneQuiz={SetModuleOneQuiz} SetMindMappingQuizStart={SetMindMappingQuizStart} />
        <BsArrowLeft onClick={() => { SetMindMapping(true) }} className='back' />
      </>
    )
  }
  else if (moduleOneQuiz) {
    return (
      <>
        <ModuleOneQuiz SetBrainStorming={SetBrainStorming} SetModuleOneQuiz={SetModuleOneQuiz} />
        <BsArrowLeft onClick={() => { SetMindMappingQuizStart(true) }} className='back' />
      </>
    )
  }
  else if (brainStorming) {
    return (
      <>
        <BrainStorming />
        <BsArrowRight onClick={() => { SetBrainStorming(false); SetReview(true); }} className='next' />
        <BsArrowLeft onClick={() => { SetModuleOneQuiz(true) }} className='back' />
      </>
    )
  }
  else if (review) {
    return (
      <>
        <Review Description={review_m1.Description} Modules={review_m1.Modules} NextModule={review_m1.NextModule} />
        <BsArrowLeft onClick={() => { SetBrainStorming(true) }} className='back' />
      </>
    )
  }
}
