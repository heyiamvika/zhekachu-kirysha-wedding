import clsx from 'clsx';
import { MouseEventHandler, useState } from 'react';

type StartPageProps = {
  onNext: MouseEventHandler;
};

const StartPage = ({ onNext }: StartPageProps) => {
  const [isParcelOpen, setIsParcelOpen] = useState(false);
  const handleOpenParcel = () => setIsParcelOpen(true);

  return (
    <div className='h-screen w-full bg-[url(/main-photo.png)] bg-cover bg-center'>
      <OpenBackground isParcelOpen={isParcelOpen} onClick={onNext} />
      <ClosedParcel isParcelOpen={isParcelOpen} onClick={handleOpenParcel} />
    </div>
  );
};

type ClosedParcelProps = {
  isParcelOpen: boolean;
  onClick: MouseEventHandler;
};

const ClosedParcel = ({ isParcelOpen, onClick }: ClosedParcelProps) => {
  const animationStyles = 'transition ease-in-out transform duration-4000';

  return (
    <>
      <div
        onClick={onClick}
        className={clsx(
          'bg-[url(/envelope-top.png)] bg-cover absolute top-0 w-full h-100 z-10',
          {
            [`${animationStyles} -translate-y-[100%]`]: isParcelOpen,
          }
        )}
      />
      <div
        className={clsx(
          'bg-[url(/envelope-bottom.png)] bg-cover absolute bottom-0 w-full h-screen flex items-end justify-center',
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
  onClick: MouseEventHandler;
};

const OpenBackground = ({ isParcelOpen, onClick }: OpenBackgroundProps) => {
  return (
    <div
      className={clsx(
        'absolute top-0 h-screen w-full text-white text-big flex flex-col items-center text-center justify-around gap-40 bg-black/20',
        { 'animate-fade-in': isParcelOpen }
      )}
      onClick={onClick}
    >
      <span>Запрошуємо</span>
      <span>тебе на наше весілля 31 липня!</span>
    </div>
  );
};

export default StartPage;
