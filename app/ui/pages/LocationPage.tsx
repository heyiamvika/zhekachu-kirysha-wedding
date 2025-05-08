import Image from 'next/image';
import { NavigationArrow } from '@/app/ui/components';

const LocationPage = () => {
  return (
    <div className='bg-[url(/location.png)] w-full h-screen bg-cover bg-center flex'>
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
