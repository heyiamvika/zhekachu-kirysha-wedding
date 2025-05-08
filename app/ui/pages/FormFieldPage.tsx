import React from 'react';
import Image from 'next/image';
import { ButtonGroup, NavigationArrowGroup } from '@/app/ui/components';

type Props = {
  text: string;
  imageSrc: string;
  buttonOneText?: string;
  buttonTwoText?: string;
  onFormFieldSet?: (value: string) => void;
  onNext?: () => void;
  onPrev?: () => void;
};

const FormFieldPage = ({
  text,
  imageSrc,
  buttonOneText,
  buttonTwoText,
  onFormFieldSet,
  onNext,
  onPrev,
}: Props) => {
  return (
    <div className='w-full h-screen flex flex-col justify-start items-center px-4 py-6'>
      <div className='w-full mb-4'>
        <NavigationArrowGroup onNext={onNext} onPrev={onPrev} />
      </div>
      <span className='text-center max-h-72'>{text}</span>
      <div className='w-60 sm:w-full h-auto flex grow items-center justify-center'>
        <Image src={imageSrc} alt={text} width={375} height={290} />
      </div>
      <ButtonGroup
        buttonOneText={buttonOneText}
        buttonTwoText={buttonTwoText}
        onButtonOneClick={onFormFieldSet}
        onButtonTwoClick={onFormFieldSet}
      />
    </div>
  );
};

export default FormFieldPage;
