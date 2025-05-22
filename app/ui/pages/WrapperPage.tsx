'use client';

import { MouseEventHandler, useLayoutEffect, useState } from 'react';
import { FormData, Guest, Step } from '@/app/lib/definitions';
import { PAGES } from '@/app/lib/pages';
import { renderStep } from '@/app/ui/helpers';
// import { submitGuestAnswers } from '@/app/lib/googleSheets';
import { DesktopPage, NotFoundPage } from '@/app/ui/pages';

const initialFormData: FormData = {
  transportation: null,
  hotel: null,
  allergies: null,
  alcohol: null,
};

const MOBILE_MAX_WIDTH = 430;

export const WrapperPage = ({ guest }: { guest?: Guest }) => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [currentStep, setCurrentStep] = useState<Step>(PAGES.START);
  const [windowWidth, setWindowWidth] = useState<number | null>(null);

  useLayoutEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);

      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);

      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  const handleFormValueSet = (key: keyof FormData, value: string) => {
    setFormData((prevState) => ({ ...prevState, [key]: value }));
    handleNextStep();
  };

  const handleSubmitForm = async () => {
    try {
      // TODO: submit
      console.log({ formData });

      // await submitGuestAnswers(guest, formData);
    } catch (err) {
      console.error({ err });

      // TODO: спливаюче вікно
      alert(err);
    }
  };

  const handleNextStep = () => setCurrentStep((prevStep) => prevStep + 1);
  const handlePrevStep = () => setCurrentStep((prevStep) => prevStep - 1);

  const handleScreenClick: MouseEventHandler = (event) => {
    const clickX = event.clientX;
    const screenWidth = window.innerWidth;

    const skipBackClick =
      currentStep === PAGES.START || currentStep === PAGES.LOCATION_STEP;
    const skipForwardClick = currentStep === PAGES.CONFIRMATION_STEP;

    const clickedBack = clickX < screenWidth / 2;
    const clickedForward = clickX >= screenWidth / 2;

    if (!skipBackClick && clickedBack) {
      handlePrevStep();
    }

    if (!skipForwardClick && clickedForward) {
      handleNextStep();
    }
  };

  if (windowWidth && windowWidth > MOBILE_MAX_WIDTH) {
    return <DesktopPage />;
  }

  if (!guest) {
    return <NotFoundPage />;
  }

  return renderStep({
    guest,
    currentStep,
    events: {
      onFormValueSet: handleFormValueSet,
      onFormSubmit: handleSubmitForm,
      onScreenClick: handleScreenClick,
    },
  });
};
