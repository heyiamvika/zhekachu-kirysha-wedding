'use client';

import Image from 'next/image';
import { NavigationArrowGroup } from '@/app/ui/components';
import { MouseEventHandler } from 'react';
import { useAppStore } from '@/app/lib/hooks';

import arrowDownImage from '@/public/arrow-down.webp';
import locationImage from '@/public/location-background.webp';

export const LocationPage = () => {
  const { onNextStep } = useAppStore((state) => state);

  const handleScreenClick: MouseEventHandler = ({
    currentTarget: element,
    clientX,
  }) => {
    const screenWidth = element.getBoundingClientRect().width;
    const clickedRightHalf = clientX >= screenWidth / 2;

    if (clickedRightHalf) {
      onNextStep();
    }
  };

  return (
    <div
      className='w-full h-dvh p-6 relative flex flex-col items-center'
      onClick={handleScreenClick}
    >
      <Image src={locationImage} fill alt='Локація' className='-z-10' />
      <NavigationArrowGroup showNext />
      <span className='inline-block -rotate-[11.757deg] text-big absolute left-6 sm:left-10 top-24.25 sm:top-40'>
        локація
      </span>
      <Image
        src={arrowDownImage}
        alt='стрілка вниз'
        width={85}
        height={82}
        className='absolute top-35 right-15 sm:top-47 sm:right-20 w-[85] h-[82]'
      />
      <span className='w-[327] h-[138] text-center text-big mt-auto mb-20.75'>
        с. Раковець forest event
      </span>
    </div>
  );
};
