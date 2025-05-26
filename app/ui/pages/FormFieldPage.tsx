'use client';

import Image from 'next/image';
import { ButtonGroup, NavigationArrowGroup } from '@/app/ui/components';
import { MouseEventHandler, useState } from 'react';
import { useWindowWidth } from '@/app/lib/hooks';
import { Buttons } from '@/app/lib/definitions';
import { PAGES } from '@/app/lib/pages';
import { submitGuestAnswers } from '@/app/lib/googleSheets';
import { useAppStore } from '@/app/lib/stores';
import { EmptyFieldModal } from '../modals';

type Props = {
  text: string;
  imageSrc: string;
  buttons?: Buttons;
  showNext?: boolean;
  showPrev?: boolean;
};

export const FormFieldPage = ({
  text,
  imageSrc,
  buttons,
  showNext,
  showPrev,
}: Props) => {
  const [isEmptyFieldModalOpen, setIsEmptyFieldModalOpen] =
    useState<boolean>(false);

  const windowWidth = useWindowWidth();
  const store = useAppStore((state) => state);

  const { onNextStep, onPrevStep, onFormFieldSet, formData, currentStep } =
    store;
  const selectedValue = buttons ? formData[buttons.formFieldKey] : null;
  const blockedFromClickingNext = buttons && !selectedValue;

  const handleClickNext = () => {
    if (!blockedFromClickingNext) {
      onNextStep();
    } else {
      setIsEmptyFieldModalOpen(true);
    }
  };

  const handleScreenClick: MouseEventHandler = ({ clientX }) => {
    if (!windowWidth) return;

    const clickedLeftHalf = clientX < windowWidth / 2;
    return clickedLeftHalf ? onPrevStep() : handleClickNext();
  };

  const handleSubmitFieldValue = (value: string) => {
    if (!buttons) return;

    onFormFieldSet(buttons.formFieldKey, value);
    onNextStep();
  };

  const handleSubmitForm = async () => {
    try {
      await submitGuestAnswers(store);
    } catch (err) {
      alert(`Упс! Здається в нас помилка: ${err}`);
    }
  };

  const handleBtnClick = (value: string) => {
    handleSubmitFieldValue(value);

    if (currentStep === PAGES.CONFIRMATION_STEP) {
      handleSubmitForm();
    }
  };

  return (
    <div>
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
        <ButtonGroup
          buttons={buttons}
          onSelect={handleBtnClick}
          selectedValue={selectedValue}
        />
      </div>
      {isEmptyFieldModalOpen && (
        <EmptyFieldModal onClose={() => setIsEmptyFieldModalOpen(false)} />
      )}
    </div>
  );
};
