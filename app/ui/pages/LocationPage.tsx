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
      <span className='inline-block -rotate-[11.757deg] text-big absolute top-[97] left-[24]'>
        локація
      </span>
      <Image
        src={arrowDownImage}
        alt='стрілка вниз'
        width={85}
        height={82}
        className='absolute top-[140] right-[60]'
      />
      <span className='w-[327] h-[138] text-center text-big mt-auto sm:mb-[83]'>
        с. Раковець forest event
      </span>
    </div>
  );
};
