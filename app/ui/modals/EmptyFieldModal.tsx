import { MouseEventHandler } from 'react';
import Image from 'next/image';

export const EmptyFieldModal = ({
  onClose,
}: {
  onClose: MouseEventHandler;
}) => {
  return (
    <div
      className='fixed inset-0 bg-gray-500/50 z-50 flex items-center justify-center'
      onClick={onClose}
    >
      <div className='w-[275] h-[324] bg-white px-4 py-10 flex flex-col items-center gap-2 rounded-2xl relative'>
        <span className='text-center text-popup'>
          Будь ласка, вибери один з варіантів!
        </span>
        <Image src='/kitty.png' width={89} height={89} alt='Кошенятко' />
        <Image
          src='/arrow-popup.svg'
          alt='стрілка вниз'
          width={35}
          height={34}
          className='absolute left-[87] bottom-[27] w-[35] h-[34]'
        />
      </div>
    </div>
  );
};
