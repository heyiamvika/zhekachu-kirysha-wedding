import React from 'react';
import Image from 'next/image';
import { Button, NavigationArrowGroup } from '@/app/ui/components';

type Props = {
  text: string;
  imageSrc: string;
  buttonOneText?: string;
  buttonTwoText?: string;
  onNext?: () => void;
  onPrev?: () => void;
};

const FormFieldPage = ({
  text,
  imageSrc,
  buttonOneText,
  buttonTwoText,
  onNext,
  onPrev,
}: Props) => {
  return (
    <div className='w-full h-screen flex flex-col justify-start items-center px-4 py-6 @container'>
      <div className='w-full mb-4'>
        <NavigationArrowGroup onNext={onNext} onPrev={onPrev} />
      </div>
      <span className='text-center max-h-72'>{text}</span>
      <div className='w-60 sm:w-full h-auto flex grow items-center justify-center'>
        <Image src={imageSrc} alt={text} width={375} height={290} />
      </div>
      <div className='w-full px-4 flex flex-col gap-2 @sm:gap-4 items-center mb-2 sm:mb-20'>
        <Button onClick={() => console.log('click')}>{buttonOneText}</Button>
        <Button onClick={() => console.log('click')}>{buttonTwoText}</Button>
      </div>
    </div>
  );
};

export default FormFieldPage;
