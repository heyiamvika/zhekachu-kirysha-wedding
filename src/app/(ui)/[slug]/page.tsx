'use client';

import { MouseEventHandler, useState } from 'react';
import { Step } from 'app/lib/definitions';
import { renderStep } from './renderStep';
import { PAGES } from 'app/lib/pages';

export default function Home() {
  const [currentStep, setCurrentStep] = useState<Step>(PAGES.START_PAGE);

  const nextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    if (currentStep === PAGES.START_PAGE || currentStep === PAGES.LOCATION_PAGE)
      return;

    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleScreenClick: MouseEventHandler = (event) => {
    const clickX = event.clientX;
    const screenWidth = window.innerWidth;

    if (clickX < screenWidth / 2) {
      // Клік у лівій половині
      console.log('Клік у лівій половині (React)!');
      // Тут ви можете викликати функцію для першої події
      prevStep();
    } else {
      // Клік у правій половині
      console.log('Клік у правій половині (React)!');
      // Тут ви можете викликати функцію для другої події
      nextStep();
    }
  };

  return (
    <div
      className='w-full h-screen flex justify-center items-center'
      onClick={handleScreenClick}
    >
      {renderStep(currentStep, nextStep, prevStep)}
    </div>
  );
}
