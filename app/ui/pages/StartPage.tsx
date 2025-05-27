'use client';

import clsx from 'clsx';
import { MouseEventHandler, useState } from 'react';
import { useWindowWidth } from '../../lib/hooks';
import { useAppStore } from '@/app/lib/hooks';

export const StartPage = () => {
  const [isParcelOpen, setIsParcelOpen] = useState(false);
  const handleOpenParcel = () => setIsParcelOpen(true);
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
    <div className='h-screen w-full bg-[url(/main-photo.jpg)] bg-cover bg-top'>
      {/* <OpenBackground
        isParcelOpen={isParcelOpen}
        onScreenClick={handleScreenClick}
      /> */}
      {/* <ClosedParcel
        guestName={guest!.name}
        isParcelOpen={isParcelOpen}
        onOpen={handleOpenParcel}
      /> */}
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
        className={clsx(
          'bg-[url(/envelope-top.svg)] drop-shadow-2xl bg-cover bg-center w-full h-115 max-h-[60%] absolute top-0 z-10',
          {
            [`${animationStyles} -translate-y-[100%]`]: isParcelOpen,
          }
        )}
      />
      <div
        className={clsx(
          'bg-[url(/envelope-bottom.png)] bg-cover bg-center absolute bottom-0 w-full h-screen flex items-end justify-center',
          {
            [`${animationStyles} translate-y-[100%]`]: isParcelOpen,
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
  return (
    <div
      className={clsx(
        'absolute top-0 h-screen w-full text-white text-big flex flex-col items-center text-center py-10 sm:py-20 justify-between bg-black/20',
        { 'animate-fade-in': isParcelOpen }
      )}
      onClick={onScreenClick}
    >
      <span>Запрошуємо</span>
      <span className='mb-15'>тебе на наше весілля 31 липня!</span>
    </div>
  );
};
