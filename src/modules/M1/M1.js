import React, { useState } from 'react'
import '../../sass/Modules/M1/M1.scss'
import { Modules } from '../../components/Modules'
import { Start } from './Start'
import { MindMappingImage } from './MindMappingImage'
import { SixThinkingHats } from './SixThinkingHats'
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { SixThinkingHatsTask } from './SixThinkingHatsTask'
import { MindMapping } from './MindMapping'
import { MindMappingQuiz } from './MindMappingQuiz'
import { ModuleOneQuiz } from './ModuleOneQuiz'
import { BrainStorming } from './BrainStorming'
import { Review } from './Review'

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
        <Modules />
        <Start SetImage={SetImage} SetStart={SetStart} />

      </>
    )
  }

  else if (img) {
    return (
      <>
        <Modules />
        <MindMappingImage />
        <BsArrowRight onClick={() => { SetSixThinkingHats(true); SetImage(false); }} className='next' />
        <BsArrowLeft onClick={() => { SetStart(true); SetImage(false); }} className='back' />
      </>
    )
  }
  else if (sixThinkingHats) {
    return (
      <>
        <Modules />
        <SixThinkingHats />
        <BsArrowRight onClick={() => { SetSixThinkingHats(false); SetSixThinkingHatsTask(true); }} className='next' />
        <BsArrowLeft onClick={() => { SetImage(true); }} className='back' />
      </>
    )
  }
  else if (sixThinkingHatsTask) {
    return (
      <>
        <Modules />
        <SixThinkingHatsTask />
        <BsArrowRight onClick={() => { SetSixThinkingHatsTask(false); SetMindMapping(true); }} className='next' />
        <BsArrowLeft onClick={() => { SetSixThinkingHats(true) }} className='back' />
      </>
    )
  }
  else if (mindMapping) {
    return (
      <>
        <Modules />
        <MindMapping />
        <BsArrowRight onClick={() => { SetMindMapping(false); SetMindMappingQuizStart(true); }} className='next' />
        <BsArrowLeft onClick={() => { SetSixThinkingHatsTask(true) }} className='back' />
      </>
    )
  }
  else if (mindMappingQuizStart) {
    return (
      <>
        <Modules />
        <MindMappingQuiz SetModuleOneQuiz={SetModuleOneQuiz} SetMindMappingQuizStart={SetMindMappingQuizStart} />
        <BsArrowLeft onClick={() => { SetMindMapping(true) }} className='back' />
      </>
    )
  }
  else if (moduleOneQuiz) {
    return (
      <>
        <Modules />
        <ModuleOneQuiz SetBrainStorming={SetBrainStorming} SetModuleOneQuiz={SetModuleOneQuiz} />
        <BsArrowLeft onClick={() => { SetMindMappingQuizStart(true) }} className='back' />
      </>
    )
  }
  else if (brainStorming) {
    return (
      <>
        <Modules />
        <BrainStorming />
        <BsArrowRight onClick={() => { SetBrainStorming(false); SetReview(true); }} className='next' />
        <BsArrowLeft onClick={() => { SetModuleOneQuiz(true) }} className='back' />
      </>
    )
  }
  else if (review) {
    return (
      <>
        <Modules />
        <Review />
        <BsArrowLeft onClick={() => { SetBrainStorming(true) }} className='back' />
      </>
    )
  }
}
