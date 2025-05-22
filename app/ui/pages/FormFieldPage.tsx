import Image from 'next/image';
import { ButtonGroup, NavigationArrowGroup } from '@/app/ui/components';
import { MouseEventHandler } from 'react';

type Props = {
  text: string;
  imageSrc: string;
  buttons: string[];
  onFormFieldSet?: (value: string) => void;
  onScreenClick: MouseEventHandler;
};

export const FormFieldPage = ({
  text,
  imageSrc,
  buttons,
  onFormFieldSet,
  onScreenClick,
}: Props) => {
  return (
    <div
      className='w-full h-screen flex flex-col justify-start items-center px-4 py-6'
      onClick={onScreenClick}
    >
      <div className='w-full mb-4'>
        <NavigationArrowGroup showNext showPrev />
      </div>
      <span className='text-center max-h-72'>{text}</span>
      <div className='w-60 sm:w-full h-auto flex grow items-center justify-center'>
        <Image src={imageSrc} alt={text} width={375} height={290} />
      </div>
      <div className='w-full px-4 flex flex-col gap-2 sm:gap-4 items-center mb-2 sm:mb-20'>
        <ButtonGroup buttons={buttons} onSelect={onFormFieldSet} />
      </div>
    </div>
  );
};
