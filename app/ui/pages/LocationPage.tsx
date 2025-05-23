'use client';

import Image from 'next/image';
import { NavigationArrowGroup } from '@/app/ui/components';
import { useWindowWidth } from '@/app/lib/hooks';
import { MouseEventHandler } from 'react';
import { useAppStore } from '@/app/lib/stores';

export const LocationPage = () => {
  const windowWidth = useWindowWidth();
  const { onNextStep } = useAppStore((state) => state);

  const handleScreenClick: MouseEventHandler = ({ clientX }) => {
    if (!windowWidth) return;
    const clickedRightHalf = clientX >= windowWidth / 2;

    if (clickedRightHalf) {
      onNextStep();
    }
  };

  return (
    <div
      className='bg-[url(/location-background.png)] w-full h-screen bg-cover bg-center px-4 py-6 relative flex flex-col items-center'
      onClick={handleScreenClick}
    >
      <NavigationArrowGroup showNext />
      <span className='inline-block -rotate-[12.27deg] text-big absolute left-6 @sm:left-9 top-30 @sm:top-39.5'>
        локація
      </span>
      <Image
        src='/arrow-down.png'
        alt='стрілка вниз'
        width={85}
        height={82}
        className='absolute top-38 right-20 @sm:top-47 @sm:right-20'
      />
      <span className='w-full max-w-81.75 text-big text-center mt-auto mb-15 @sm:mb-26.75'>
        с. Раковець forest event
      </span>
    </div>
  );
};
