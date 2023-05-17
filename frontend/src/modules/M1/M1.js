import React, { useState } from 'react'
import { MindMappingImage } from './MindMappingImage'
import { SixThinkingHats } from './SixThinkingHats'
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { SixThinkingHatsTask } from './SixThinkingHatsTask'
import { MindMapping } from './MindMapping'
import { MindMappingQuiz } from './MindMappingQuiz'
import { ModuleOneQuiz } from './ModuleOneQuiz'
import { BrainStorming } from './BrainStorming'
import { Review } from './Review'
import { Start } from '../../components/Start'
import { info_m1 } from '../../Information/StartInfo'



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
        <MindMappingImage />
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
        <Review />
        <BsArrowLeft onClick={() => { SetBrainStorming(true) }} className='back' />
      </>
    )
  }
}
