import Image from 'next/image';
import { MouseEventHandler } from 'react';

type NavigationArrowProps = {
  direction: 'left' | 'right';
  onClick: MouseEventHandler;
};

export const NavigationArrow = ({
  direction,
  onClick,
}: NavigationArrowProps) => {
  return (
    <button className='w-12.5 h-11' onClick={onClick}>
      <Image
        src={direction === 'left' ? '/left-arrow.png' : '/right-arrow.png'}
        alt={direction === 'left' ? 'стрілка вліво' : 'стрілка вправо'}
        width={50}
        height={14}
      />
    </button>
  );
};
