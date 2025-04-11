'use client';

import { useState } from 'react';
import { Step } from 'app/lib/definitions';
import { renderStep } from './renderStep';

export default function Home() {
  const [currentStep, setCurrentStep] = useState<Step>('start');

  const nextStep = () => {
    setCurrentStep((prevStep) => {
      if (prevStep === 'start') {
        return 1;
      }

      if (prevStep === 'confirmation') {
        return 'start';
      }

      return prevStep + 1;
    });
  };

  const prevStep = () => {
    // setCurrentStep((prevStep) => {
    //   if (prevStep === 'start') {
    //     return 'start';
    //   }
    //   if (prevStep === 'confirmation') {
    //     return 6;
    //   }
    //   return prevStep - 1;
    // });
  };

  return (
    <div className='w-full h-screen flex justify-center items-center'>
      {renderStep(currentStep, nextStep, prevStep)}
    </div>
  );
}
