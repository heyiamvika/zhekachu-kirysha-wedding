'use client';

import { MouseEventHandler, useState } from 'react';
import { Step } from '@/app/lib/definitions';
import { PAGES } from '@/app/lib/pages';
import { renderStep } from '@/app/ui/helpers';

export default function Home() {
  const [currentStep, setCurrentStep] = useState<Step>(PAGES.START);

  const handleNextStep = () => {
    if (currentStep === PAGES.CONFIRMATION_STEP) return;

    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePrevStep = () => {
    if (currentStep === PAGES.START || currentStep === PAGES.LOCATION_STEP)
      return;

    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleScreenClick: MouseEventHandler = (event) => {
    if (currentStep === PAGES.START) return;

    const clickX = event.clientX;
    const screenWidth = window.innerWidth;

    if (clickX < screenWidth / 2) {
      handlePrevStep();
    } else {
      handleNextStep();
    }
  };

  return (
    <div onClick={handleScreenClick} className='@container'>
      {renderStep(currentStep, {
        onNext: handleNextStep,
        onPrev: handlePrevStep,
      })}
    </div>
  );
}
