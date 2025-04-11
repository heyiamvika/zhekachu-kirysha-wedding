import Image from 'next/image';

const LocationPage = () => {
  // TODO: Fix background
  // TODO: Fix font
  // TODO: Fix locations
  return (
    <div className='bg-[url(/location.png)] w-full h-screen bg-center bg-cover bg-no-repeat flex p-6'>
      <button className='w-12.5 h-11'>
        <Image
          src='/right-arrow.png'
          alt='стрілка вправо'
          width={50}
          height={14}
        />
      </button>
      <span className=''>Локація</span>
      <div>
        <Image
          src='/arrow-down.png'
          alt='стрілка вниз'
          width={85}
          height={82}
        />
      </div>
      <div className='self-end'>
        <span className=''>с. Раковець forest event</span>
      </div>
    </div>
  );
};

export default LocationPage;
