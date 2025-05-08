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
    <div className='w-full h-screen flex flex-col justify-start items-center px-4 py-6 gap-4 @sm:gap-10 overflow-scroll'>
      <NavigationArrowGroup onNext={onNext} onPrev={onPrev} />
      <span className='flex items-center justify-center text-center'>
        {text}
      </span>
      <div className={`w-full h-auto flex items-center justify-center`}>
        <Image src={imageSrc} alt={text} width={375} height={290} />
      </div>
      <div className='w-full px-4 flex flex-col gap-2 @sm:gap-4 items-center mt-auto mb-15'>
        {buttonOneText && (
          <Button onClick={() => console.log('click')}>{buttonOneText}</Button>
        )}
        {buttonTwoText && (
          <Button onClick={() => console.log('click')}>{buttonTwoText}</Button>
        )}
      </div>
    </div>
  );
};

export default FormFieldPage;
