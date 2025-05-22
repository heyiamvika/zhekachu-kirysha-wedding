import { NavigationArrow } from './NavigationArrow';

type NavigationArrowGroupProps = {
  showNext?: boolean;
  showPrev?: boolean;
};

export const NavigationArrowGroup = ({
  showNext = false,
  showPrev = false,
}: NavigationArrowGroupProps) => {
  if (showNext && showPrev) {
    return (
      <div className='w-full flex justify-between'>
        <NavigationArrow direction='left' />
        <NavigationArrow direction='right' />
      </div>
    );
  }

  if (showPrev) {
    return (
      <div className='w-full flex justify-start'>
        <NavigationArrow direction='left' />
      </div>
    );
  }

  if (showNext) {
    return (
      <div className='w-full flex justify-end'>
        <NavigationArrow direction='right' />
      </div>
    );
  }
};
