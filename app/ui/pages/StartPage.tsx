'use client';

import clsx from 'clsx';
import Image from 'next/image';
import { MouseEventHandler, useState } from 'react';
import { useAppStore, useWindowWidth } from '@/app/lib/hooks';

import envelopeTopImg from '@/public/envelope-top.svg';

export const StartPage = () => {
  const [isParcelOpen, setIsParcelOpen] = useState(false);

  const windowWidth = useWindowWidth();
  const { onNextStep, guest } = useAppStore((state) => state);

  const handleScreenClick: MouseEventHandler = ({ clientX }) => {
    if (!windowWidth) return;
    const clickedRightHalf = clientX >= windowWidth / 2;

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
        className={clsx('drop-shadow-2xl w-full h-fit absolute top-0 z-10', {
          [`${animationStyles} -translate-y-full`]: isParcelOpen,
        })}
      >
        <Image
          src={envelopeTopImg}
          alt='Клапан конверта'
          width={375}
          height={400}
          className='w-full object-cover'
          priority
          quality={25}
        />
      </div>
      <div
        className={clsx(
          'absolute bottom-0 bg-[url(/envelope-bottom.webp)]  w-full h-full bg-cover bg-center flex items-end justify-center',
          {
            [`${animationStyles} translate-y-full`]: isParcelOpen,
          }
        )}
      >
        <span className='text-big mb-[15vh] sm:mb-[25vh] max-w-[80%] text-center'>
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
        'absolute top-0 w-full h-full text-white text-big flex flex-col items-center text-center py-10 sm:py-20 justify-between bg-black/20',
        { 'animate-fade-in': isParcelOpen }
      )}
      onClick={onScreenClick}
    >
      <span>Запрошуємо</span>
      <span className='mb-15'>тебе на наше весілля 31 липня!</span>
    </div>
  );
};
