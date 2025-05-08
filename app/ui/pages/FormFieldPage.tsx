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
    <div className='h-full flex flex-col justify-start items-start py-6'>
      <NavigationArrowGroup onNext={onNext} onPrev={onPrev} />
      <span className='px-4'>{text}</span>
      <div className='mb-10.5 w-full flex justify-center'>
        <Image src={imageSrc} alt={text} width={375} height={290} />
      </div>
      <div className='w-full flex flex-col gap-4 items-center px-4 mb-25 mt-auto'>
        {buttonOneText && <Button>їду з вами</Button>}
        {buttonTwoText && <Button>своїм ходом</Button>}
      </div>
    </div>
  );
};

export default FormFieldPage;
