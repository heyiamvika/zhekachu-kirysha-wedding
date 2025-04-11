import Image from 'next/image';

type NavigationArrowProps = {
  direction: 'left' | 'right';
};

export const NavigationArrow = ({ direction }: NavigationArrowProps) => {
  return (
    <button className='w-12.5 h-11'>
      <Image
        src={direction === 'left' ? '/left-arrow.png' : '/right-arrow.png'}
        alt={direction === 'left' ? 'стрілка вліво' : 'стрілка вправо'}
        width={50}
        height={14}
      />
    </button>
  );
};

export default NavigationArrow;
