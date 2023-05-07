import React, { useState } from 'react'
import '../../sass/Modules/M1/M1.scss'
import { Modules } from '../../components/Modules'
import { Start } from './Start'
import { MindMappingImage } from './MindMappingImage'
import { SixThinkingHats } from './SixThinkingHats'
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { SixThinkingHatsTask } from './SixThinkingHatsTask'

export const M1 = () => {

  const [start, SetStart] = useState(true)
  const [img, SetImage] = useState(false)
  const [sixThinkingHats, SetSixThinkingHats] = useState(false)
  const [sixThinkingHatsTask, SetSixThinkingHatsTask] = useState(false)



  console.log("start:", start)
  console.log("img:", img)
  console.log("sixThinkingHats:", sixThinkingHats)
  console.log("sixThinkingHatsTask:", sixThinkingHatsTask)

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
        <BsArrowRight onClick={() => { SetSixThinkingHats(false); SetSixThinkingHatsTask(true); }} className='next' />
        <BsArrowLeft onClick={() => { SetSixThinkingHats(true) }} className='back' />
      </>
    )
  }
}
