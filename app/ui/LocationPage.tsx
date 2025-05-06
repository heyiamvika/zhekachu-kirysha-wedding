import Image from 'next/image';
import NavigationArrow from '@/app/ui/components/NavigationArrow';

const LocationPage = () => {
  // TODO: Fix background
  // TODO: Fix font
  // TODO: Fix locations
  return (
    <div className='bg-[url(/location.png)] w-full h-screen bg-center bg-cover bg-no-repeat flex'>
      <NavigationArrow direction='right' />
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
