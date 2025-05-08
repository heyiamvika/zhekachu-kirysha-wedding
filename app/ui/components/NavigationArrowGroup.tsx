import { NavigationArrow } from './NavigationArrow';

export const NavigationArrowGroup = () => {
  return (
    <div className='w-full flex justify-between mb-13.5 px-4'>
      <NavigationArrow direction='left' />
      <NavigationArrow direction='right' />
    </div>
  );
};
