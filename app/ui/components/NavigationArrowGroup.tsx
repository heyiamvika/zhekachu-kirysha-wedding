import { NavigationArrow } from './NavigationArrow';

type NavigationArrowGroupProps = {
  onNext?: () => void;
  onPrev?: () => void;
};

export const NavigationArrowGroup = ({
  onNext,
  onPrev,
}: NavigationArrowGroupProps) => {
  if (onNext && onPrev) {
    return (
      <div className='w-full flex justify-between'>
        <NavigationArrow
          direction='left'
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
        />
        <NavigationArrow
          direction='right'
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
        />
      </div>
    );
  }

  if (onPrev) {
    return (
      <div className='w-full flex justify-start'>
        <NavigationArrow
          direction='left'
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
        />
      </div>
    );
  }

  if (onNext) {
    return (
      <div className='w-full flex justify-end'>
        <NavigationArrow
          direction='right'
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
        />
      </div>
    );
  }
};
