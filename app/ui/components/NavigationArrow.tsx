import Image from 'next/image';

import leftArrowImg from '@/public/left-arrow.webp';
import rightArrowImg from '@/public/right-arrow.webp';

type NavigationArrowProps = {
  direction: 'left' | 'right';
};

export const NavigationArrow = ({ direction }: NavigationArrowProps) => {
  return (
    <button className='w-12.5 h-11'>
      <Image
        src={direction === 'left' ? leftArrowImg : rightArrowImg}
        alt={direction === 'left' ? 'стрілка вліво' : 'стрілка вправо'}
        width={50}
        height={14}
        priority
      />
    </button>
  );
};
