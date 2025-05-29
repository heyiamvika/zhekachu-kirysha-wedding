'use client';

import Image, { StaticImageData } from 'next/image';
import { ButtonGroup, NavigationArrowGroup } from '@/app/ui/components';
import { MouseEventHandler, useState } from 'react';
import { useWindowWidth } from '@/app/lib/hooks';
import { Buttons } from '@/app/lib/definitions';
import { PAGES } from '@/app/lib/pages';
import { submitGuestAnswers } from '@/app/lib/googleSheets';
import { useAppStore } from '@/app/lib/hooks';
import { EmptyFieldModal } from '../modals';

type Props = {
  text: string;
  imageSrc: StaticImageData;
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
        className='w-full h-dvh flex flex-col px-4 pt-6 pb-8'
        onClick={handleScreenClick}
      >
        <NavigationArrowGroup showNext={showNext} showPrev={showPrev} />
        <div className='flex flex-col items-center justify-center grow'>
          <div className='flex flex-col justify-between items-center min-w-[288] max-w-[450] min-h-[472] max-h-[660] grow'>
            <span className='text-center py-6.25'>{text}</span>
            <div className='w-full min-h-[150] max-h-[235] grow px-10'>
              <div className='relative w-full h-full'>
                <Image src={imageSrc} alt={text} fill priority key={text} />
              </div>
            </div>
            <ButtonGroup
              buttons={buttons}
              onSelect={handleBtnClick}
              selectedValue={selectedValue}
            />
          </div>
        </div>
      </div>
      {isEmptyFieldModalOpen && (
        <EmptyFieldModal onClose={() => setIsEmptyFieldModalOpen(false)} />
      )}
    </div>
  );
};
