import Image from 'next/image';
import NavigationArrow from '../components/NavigationArrow';
import Button from '../components/Button';

const TransportationPage = () => {
  return (
    <div className='h-full flex flex-col justify-start items-start py-6 '>
      <div className='w-full flex justify-between mb-13.5 px-4'>
        <NavigationArrow direction='left' />
        <NavigationArrow direction='right' />
      </div>
      <span className='px-4'>
        ми будемо разом їхати автобусом, але якщо ти своїм ходом - клікай!
      </span>
      {/* TODO: Aspect ratio */}
      <div className='mb-10.5 w-full flex justify-center'>
        <Image src='/bus.gif' alt='автобус' width={375} height={290} />
      </div>
      <div className='w-full flex flex-col gap-4 items-center px-4 mb-25 mt-auto'>
        <Button>їду з вами</Button>
        <Button>своїм ходом</Button>
      </div>
    </div>
  );
};

export default TransportationPage;
