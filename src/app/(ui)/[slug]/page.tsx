'use client';

import { MouseEventHandler, useState } from 'react';
import { Step } from 'app/lib/definitions';
import { renderStep } from './renderStep';
import { PAGES } from 'app/lib/pages';

export default function Home() {
  const [currentStep, setCurrentStep] = useState<Step>(PAGES.START);

  const nextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    if (currentStep === PAGES.START || currentStep === PAGES.LOCATION_STEP)
      return;

    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleScreenClick: MouseEventHandler = (event) => {
    const clickX = event.clientX;
    const screenWidth = window.innerWidth;

    if (clickX < screenWidth / 2) {
      prevStep();
    } else {
      nextStep();
    }
  };

  return (
    <div
      className='w-full h-screen flex justify-center items-center'
      onClick={handleScreenClick}
    >
      {renderStep(currentStep)}
    </div>
  );
}
