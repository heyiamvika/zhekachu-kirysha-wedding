import { NavigationArrow } from './NavigationArrow';

type NavigationArrowGroupProps = {
  onNext: () => void;
  onPrev: () => void;
};

export const NavigationArrowGroup = ({
  onNext,
  onPrev,
}: NavigationArrowGroupProps) => {
  return (
    <div className='w-full flex justify-between mb-13.5 px-4'>
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
};
