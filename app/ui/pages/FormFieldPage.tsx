'use client';

import Image from 'next/image';
import { ButtonGroup, NavigationArrowGroup } from '@/app/ui/components';
import { MouseEventHandler } from 'react';
import { useWindowWidth } from '../../lib/hooks';
import { FormData } from '@/app/lib/definitions';
import { PAGES } from '@/app/lib/pages';
import { submitGuestAnswers } from '@/app/lib/googleSheets';
import { AppStore } from '@/app/lib/stores';

type Props = {
  store: AppStore;
  text: string;
  imageSrc: string;
  showNext?: boolean;
  showPrev?: boolean;
  buttons?: string[];
  formFieldKey?: keyof FormData;
};

export const FormFieldPage = ({
  store,
  text,
  imageSrc,
  buttons,
  showNext,
  showPrev,
  formFieldKey,
}: Props) => {
  const windowWidth = useWindowWidth();
  const {
    onNextStep,
    onPrevStep,
    onFormFieldSet,
    formData,
    currentStep,
    guest,
  } = store;

  const handleClickNext = () => {
    const canClickNext = formFieldKey ? formData[formFieldKey] !== null : true;

    if (canClickNext) {
      onNextStep();
    } else {
      // TODO
      alert('TODO: Show popup');
    }
  };

  const handleScreenClick: MouseEventHandler = ({ clientX }) => {
    if (!windowWidth) return;

    const clickedLeftHalf = clientX < windowWidth / 2;
    return clickedLeftHalf ? onPrevStep() : handleClickNext();
  };

  const handleSubmitFieldValue = (value: string) => {
    if (!formFieldKey) return;

    onFormFieldSet(formFieldKey, value);
    onNextStep();
  };

  const handleSubmitForm = async () => {
    try {
      // TODO: submit
      console.log({ formData });
      await submitGuestAnswers(guest, formData);
    } catch (err) {
      console.error({ err });

      // TODO: спливаюче вікно
      alert(err);
    }
  };

  const handleBtnClick = (value: string) => {
    return currentStep === PAGES.CONFIRMATION_STEP
      ? handleSubmitForm()
      : handleSubmitFieldValue(value);
  };

  return (
    <div
      className='w-full h-screen flex flex-col justify-start items-center px-4 py-6'
      onClick={handleScreenClick}
    >
      <div className='w-full mb-4'>
        <NavigationArrowGroup showNext={showNext} showPrev={showPrev} />
      </div>
      <span className='text-center max-h-72'>{text}</span>
      <div className='w-60 sm:w-full h-auto flex grow items-center justify-center'>
        <Image src={imageSrc} alt={text} width={375} height={290} />
      </div>
      <ButtonGroup buttons={buttons} onSelect={handleBtnClick} />
    </div>
  );
};
