import React from 'react';
import Image from 'next/image';
import { Button, NavigationArrowGroup } from '@/app/ui/components';

type Props = {
  text: string;
  imageSrc: string;
  buttonOneText?: string;
  buttonTwoText?: string;
  onNext: () => void;
  onPrev: () => void;
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
    <div className='h-full flex flex-col justify-start items-center py-6'>
      <NavigationArrowGroup onNext={onNext} onPrev={onPrev} />
      <span className='px-4 text-center'>{text}</span>
      <Image
        src={imageSrc}
        alt={text}
        width={375}
        height={290}
        className='w-full mb-10.5'
      />
      <div className='w-full px-4 flex flex-col gap-4 items-center'>
        {buttonOneText && (
          <Button onClick={() => console.log('click')}>їду з вами</Button>
        )}
        {buttonTwoText && (
          <Button onClick={() => console.log('click')}>своїм ходом</Button>
        )}
      </div>
    </div>
  );
};

export default FormFieldPage;
