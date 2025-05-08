import clsx from 'clsx';
import { useState } from 'react';

type StartPageProps = {
  onNext: () => void;
};

const StartPage = ({ onNext }: StartPageProps) => {
  const [isParcelOpen, setIsParcelOpen] = useState(false);
  const handleOpenParcel = () => setIsParcelOpen(true);

  return (
    <div className='h-screen w-full bg-[url(/main-photo.png)] bg-cover bg-center'>
      <OpenBackground isParcelOpen={isParcelOpen} onNext={onNext} />
      <ClosedParcel isParcelOpen={isParcelOpen} onOpen={handleOpenParcel} />
    </div>
  );
};

type ClosedParcelProps = {
  isParcelOpen: boolean;
  onOpen: () => void;
};

const ClosedParcel = ({ isParcelOpen, onOpen }: ClosedParcelProps) => {
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
        <span className='text-big mb-[25vh] sm:max-w-94 text-center'>
          Привіт, Віка!
        </span>
      </div>
    </>
  );
};

type OpenBackgroundProps = {
  isParcelOpen: boolean;
  onNext: () => void;
};

const OpenBackground = ({ isParcelOpen, onNext }: OpenBackgroundProps) => {
  return (
    <div
      className={clsx(
        'absolute top-0 h-screen w-full text-white text-big flex flex-col items-center text-center justify-around gap-40 bg-black/20',
        { 'animate-fade-in': isParcelOpen }
      )}
      onClick={onNext}
    >
      <span>Запрошуємо</span>
      <span>тебе на наше весілля 31 липня!</span>
    </div>
  );
};

export default StartPage;
