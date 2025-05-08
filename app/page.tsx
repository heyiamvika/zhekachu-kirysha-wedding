'use client';

import { MouseEventHandler, useState } from 'react';
import { FormData, Step } from '@/app/lib/definitions';
import { PAGES } from '@/app/lib/pages';
import { renderStep } from '@/app/ui/helpers';

const initialFormData: FormData = {
  transportation: null,
  hotel: null,
  allergies: null,
  alcohol: null,
};

export default function Home() {
  const [formData, setFormData] = useState(initialFormData);
  const [currentStep, setCurrentStep] = useState<Step>(PAGES.START);

  const handleFormValueSet = (key: keyof FormData, value: string) => {
    setFormData((prevState) => ({ ...prevState, [key]: value }));
    handleNextStep();
  };

  const handleSubmitForm = () => {
    console.log({ formData });
  };

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
        onFormValueSet: handleFormValueSet,
        onFormSubmit: handleSubmitForm,
      })}
    </div>
  );
}
