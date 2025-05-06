import Image from 'next/image';

const StartPage = () => {
  return (
    <div className='h-full w-full flex items-end justify-center relative'>
      <Image
        src='/parcel-open.png'
        width={375}
        height={400}
        className='w-full absolute top-0 max-h-screen lg:w-[50%] '
        alt='Клапан конверта'
      />
      <span className='text-big z-10 mb-[25vh] sm:max-w-94 text-center'>
        {/* TODO: Add name */}
        Привіт, Віка!
      </span>
    </div>
  );
};

export default StartPage;
