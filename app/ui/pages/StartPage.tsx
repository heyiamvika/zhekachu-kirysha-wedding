import clsx from 'clsx';
import { useState } from 'react';

type StartPageProps = {
  guestName: string;
  onNext: () => void;
};

const StartPage = ({ guestName, onNext }: StartPageProps) => {
  const [isParcelOpen, setIsParcelOpen] = useState(false);
  const handleOpenParcel = () => setIsParcelOpen(true);

  return (
    <div className='h-screen w-full bg-[url(/main-photo.jpg)] bg-cover bg-top'>
      <OpenBackground isParcelOpen={isParcelOpen} onNext={onNext} />
      <ClosedParcel
        guestName={guestName}
        isParcelOpen={isParcelOpen}
        onOpen={handleOpenParcel}
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
          {`Привіт, ${guestName}!`}
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
        'absolute top-0 h-screen w-full text-white text-big flex flex-col items-center text-center py-10 sm:py-20 justify-between bg-black/20',
        { 'animate-fade-in': isParcelOpen }
      )}
      onClick={onNext}
    >
      <span>Запрошуємо</span>
      <span className='mb-15'>тебе на наше весілля 31 липня!</span>
    </div>
  );
};

export default StartPage;
