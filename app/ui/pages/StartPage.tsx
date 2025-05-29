'use client';

import clsx from 'clsx';
import Image from 'next/image';
import { MouseEventHandler, useState } from 'react';
import { useAppStore } from '@/app/lib/hooks';

import envelopeTopImg from '@/public/envelope-top-small.webp';
import envelopeBottomImg from '@/public/envelope-bottom.webp';
import whiteArrowImg from '@/public/white-arrow.webp';

export const StartPage = () => {
  const [isParcelOpen, setIsParcelOpen] = useState(false);
  const { onNextStep, guest } = useAppStore((state) => state);

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
    <div className='h-dvh w-full bg-[url(/main-photo.webp)] bg-cover bg-top overflow-hidden relative'>
      <OpenBackground
        isParcelOpen={isParcelOpen}
        onScreenClick={handleScreenClick}
      />
      <ClosedParcel
        guestName={guest!.name}
        isParcelOpen={isParcelOpen}
        onOpen={() => setIsParcelOpen(true)}
      />
    </div>
  );
};

type ClosedParcelProps = {
  guestName: string;
  isParcelOpen: boolean;
  onOpen: () => void;
};

const ClosedParcel = ({
  guestName,
  isParcelOpen,
  onOpen,
}: ClosedParcelProps) => {
  const animationStyles = 'transition ease-out transform duration-4000';

  return (
    <>
      <div
        onClick={onOpen}
        className={clsx('drop-shadow-2xl w-full h-[379] absolute top-0 z-10', {
          [`${animationStyles} -translate-y-full`]: isParcelOpen,
        })}
      >
        <Image
          src={envelopeTopImg}
          alt='Клапан конверта'
          width={375}
          height={379}
          className='w-full'
          quality={25}
          priority
        />
      </div>
      <div
        className={clsx(
          'absolute bottom-0 w-full h-dvh flex items-end justify-center',
          {
            [`${animationStyles} translate-y-full`]: isParcelOpen,
          }
        )}
      >
        <Image src={envelopeBottomImg} fill alt='Низ конверта' priority />
        <span className='text-big w-[375] text-center mb-[102] z-10'>
          {`Привіт, ${guestName}!`}
        </span>
      </div>
    </>
  );
};

type OpenBackgroundProps = {
  isParcelOpen: boolean;
  onScreenClick: MouseEventHandler;
};

const OpenBackground = ({
  isParcelOpen,
  onScreenClick,
}: OpenBackgroundProps) => {
  if (!isParcelOpen) return null;

  return (
    <div
      className={clsx(
        'absolute top-0 w-full h-dvh text-white text-big flex flex-col items-center text-center justify-between bg-black/20',
        { 'animate-fade-in': isParcelOpen }
      )}
      onClick={onScreenClick}
    >
      <span className='w-[307] mt-10 sm:mt-20'>Запрошуємо</span>
      <div className='flex flex-col mb-15 items-end w-[327]'>
        <span>тебе на наше весілля 31 липня!</span>
        <Image
          src={whiteArrowImg}
          alt='стрілка вперед'
          width={50}
          height={44}
        />
      </div>
    </div>
  );
};
