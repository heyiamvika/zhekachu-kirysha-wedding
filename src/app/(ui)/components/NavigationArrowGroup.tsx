import NavigationArrow from './NavigationArrow';

const NavigationArrowGroup = () => {
  return (
    <div className='w-full flex justify-between mb-13.5 px-4'>
      <NavigationArrow direction='left' />
      <NavigationArrow direction='right' />
    </div>
  );
};

export default NavigationArrowGroup;
