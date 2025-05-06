import clsx from 'clsx';
import Image from 'next/image';
import { MouseEventHandler, useState } from 'react';

type StartPageProps = {
  onClick: MouseEventHandler;
};

const StartPage = ({ onClick }: StartPageProps) => {
  const [isParcelOpen, setIsParcelOpen] = useState(false);

  return (
    <div className='h-screen w-full bg-[url(/main-photo.png)] bg-cover bg-center'>
      {isParcelOpen ? (
        <OpenBackground />
      ) : (
        <ClosedParcel onClick={() => setIsParcelOpen(true)} />
      )}
    </div>
  );
};

type ClosedParcelProps = {
  onClick: MouseEventHandler;
};

const ClosedParcel = ({ onClick }: ClosedParcelProps) => {
  // const animationStyles = 'transition duration-4000 ease-in-out transform';

  return (
    <div className='relative'>
      <Image
        src='/parcel-open.png'
        width={375}
        height={400}
        className={clsx(
          `absolute top-0 w-full max-h-screen z-10 lg:w-[50%] animate-slide-up`
          //   {
          //   [`${animationStyles} -translate-y-[100%]`]: isParcelOpen,
          // }
        )}
        alt='Клапан конверта'
        onClick={onClick}
      />
      <div
        className={clsx(
          ' bg-[url(/background.png)] bg-cover absolute top-0 w-full h-screen flex items-end justify-center'
          // {
          //   [`${animationStyles} translate-y-[100%]`]: isParcelOpen,
          // }
        )}
      >
        <span className='text-big mb-[25vh] sm:max-w-94 text-center'>
          Привіт, Віка!
        </span>
      </div>
    </div>
  );
};

const OpenBackground = () => {
  return (
    <div
      className={clsx(
        'h-screen w-full text-white text-big flex flex-col items-center text-center justify-around gap-40 bg-black/20 animate-fade-in transition duration-1000'
      )}
    >
      <span>Запрошуємо</span>
      <span>тебе на наше весілля 31 липня!</span>
    </div>
  );
};

export default StartPage;
