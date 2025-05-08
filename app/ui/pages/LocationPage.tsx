import Image from 'next/image';
import { NavigationArrowGroup } from '@/app/ui/components';

type LocationPageProps = {
  onNext: () => void;
};

const LocationPage = ({ onNext }: LocationPageProps) => {
  return (
    <div className='bg-[url(/location-background.png)] w-full h-screen bg-cover bg-center px-4 py-6 relative flex flex-col items-center'>
      <NavigationArrowGroup onNext={onNext} />
      <span className='inline-block -rotate-[12.27deg] text-big absolute left-6 @sm:left-9 top-30 @sm:top-39.5'>
        локація
      </span>
      <Image
        src='/arrow-down.png'
        alt='стрілка вниз'
        width={85}
        height={82}
        className='absolute top-38 right-20 @sm:top-47 @sm:right-20'
      />
      <span className='w-full max-w-81.75 text-big text-center mt-auto mb-15 @sm:mb-26.75'>
        с. Раковець forest event
      </span>
    </div>
  );
};

export default LocationPage;
