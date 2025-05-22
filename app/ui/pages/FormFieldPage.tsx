'use client';

import Image from 'next/image';
import { ButtonGroup, NavigationArrowGroup } from '@/app/ui/components';
import { MouseEventHandler, useState } from 'react';

type Props = {
  text: string;
  imageSrc: string;
  showNext?: boolean;
  showPrev?: boolean;
  buttons?: string[];
  onFormFieldSet?: (value: string) => void;
  onScreenClick: MouseEventHandler;
};

export const FormFieldPage = ({
  text,
  imageSrc,
  buttons,
  showNext,
  showPrev,
  onFormFieldSet,
  onScreenClick,
}: Props) => {
  const [value, setIsValue] = useState<string | null>(null);
  const [isError, setIsError] = useState<boolean>(false);

  const handleScreenClick: MouseEventHandler = (e) => {
    if (!value) {
      setIsError(true);
    } else {
      onScreenClick(e);
    }
  };

  const handleSubmitFieldValue = (value: string) => {
    setIsValue(value);
    setIsError(false);

    if (onFormFieldSet) {
      onFormFieldSet(value);
    }
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
      {isError && (
        <span className='text-small text-red-700 text-center'>
          Будь ласка, обери один з варіантів
        </span>
      )}
      <ButtonGroup buttons={buttons} onSelect={handleSubmitFieldValue} />
    </div>
  );
};
