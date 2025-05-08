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
    <div className='w-full h-screen flex flex-col justify-start items-center py-6'>
      {/* mb-13.5 */}
      <NavigationArrowGroup onNext={onNext} onPrev={onPrev} />
      <span className='h-42 px-4 text-center'>{text}</span>
      <div className='w-full max-h-86 flex items-center justify-center'>
        <Image
          src={imageSrc}
          alt={text}
          width={375}
          height={344}
          className='w-full max-h-86 mb-10.5'
        />
      </div>
      <div className='w-full px-4 flex flex-col gap-4 items-center mt-auto mb-40'>
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
