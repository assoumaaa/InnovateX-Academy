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
  const [step, setStep] = useState('start');

  const transitions = {
    start: () => setStep('img'),
    img: () => setStep('sixThinkingHats'),
    sixThinkingHats: () => setStep('sixThinkingHatsTask'),
    sixThinkingHatsTask: () => setStep('mindMapping'),
    mindMapping: () => setStep('mindMappingQuizStart'),
    mindMappingQuizStart: () => setStep('moduleOneQuiz'),
    moduleOneQuiz: () => setStep('brainStorming'),
    brainStorming: () => setStep('review'),
    review: () => setStep('start')
  };

  const goBack = {
    img: () => setStep('start'),
    sixThinkingHats: () => setStep('img'),
    sixThinkingHatsTask: () => setStep('sixThinkingHats'),
    mindMapping: () => setStep('sixThinkingHatsTask'),
    mindMappingQuizStart: () => setStep('mindMapping'),
    moduleOneQuiz: () => setStep('mindMappingQuizStart'),
    brainStorming: () => setStep('moduleOneQuiz'),
    review: () => setStep('brainStorming')
  };

  switch (step) {
    case 'start':
      return (
        <Start
          Title={info_m1.Title}
          Summary={info_m1.Summary}
          Image={info_m1.Image}
          SetAsTrue={transitions.start}
        />
      );
    case 'img':
      return (
        <>
          <ImageWithHeader Title={'Quick Insight!'} Image={'../../images/m1/mindmapping.png'} />
          <BsArrowRight onClick={transitions.img} className='next' />
          <BsArrowLeft onClick={goBack.img} className='back' />
        </>
      );
    case 'sixThinkingHats':
      return (
        <>
          <SixThinkingHats />
          <BsArrowRight onClick={transitions.sixThinkingHats} className='next' />
          <BsArrowLeft onClick={goBack.sixThinkingHats} className='back' />
        </>
      );
    case 'sixThinkingHatsTask':
      return (
        <>
          <SixThinkingHatsTask />
          <BsArrowRight onClick={transitions.sixThinkingHatsTask} className='next' />
          <BsArrowLeft onClick={goBack.sixThinkingHatsTask} className='back' />
        </>
      );
    case 'mindMapping':
      return (
        <>
          <MindMapping />
          <BsArrowRight onClick={transitions.mindMapping} className='next' />
          <BsArrowLeft onClick={goBack.mindMapping} className='back' />
        </>
      );
    case 'mindMappingQuizStart':
      return (
        <>
          <MindMappingQuiz
            SetModuleOneQuiz={transitions.mindMappingQuizStart}
          />
          <BsArrowLeft onClick={goBack.mindMappingQuizStart} className='back' />
        </>
      );
    case 'moduleOneQuiz':
      return (
        <>
          <ModuleOneQuiz
            SetBrainStorming={transitions.moduleOneQuiz}
          />
          <BsArrowLeft onClick={goBack.moduleOneQuiz} className='back' />
        </>
      );
    case 'brainStorming':
      return (
        <>
          <BrainStorming />
          <BsArrowRight onClick={transitions.brainStorming} className='next' />
          <BsArrowLeft onClick={goBack.brainStorming} className='back' />
        </>
      );
    case 'review':
      return (
        <>
          <Review
            Description={review_m1.Description}
            Modules={review_m1.Modules}
            NextModule={review_m1.NextModule}
          />
          <BsArrowLeft onClick={goBack.review} className='back' />
        </>
      );
    default:
      return <div>Invalid step</div>;
  }
}
