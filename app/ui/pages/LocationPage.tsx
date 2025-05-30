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
      className='w-full h-dvh p-6 flex flex-col items-center'
      onClick={handleScreenClick}
    >
      <Image src={locationImage} fill alt='Локація' className='-z-10' />
      <NavigationArrowGroup showNext />
      <div className='grow flex items-center justify-center'>
        <div className='flex flex-col justify-between items-center w-full h-[90%]'>
          <div className='h-[124] w-[292] max-w-full flex justify-between'>
            <span className='-rotate-[11.757deg] text-big self-start'>
              локація
            </span>
            <Image
              src={arrowDownImage}
              alt='стрілка вниз'
              width={85}
              height={82}
              className='w-[85] h-[82] self-end'
            />
          </div>
          <span className='w-[327] h-[138] text-center text-big'>
            с. Раковець forest event
          </span>
        </div>
      </div>
    </div>
  );
};
