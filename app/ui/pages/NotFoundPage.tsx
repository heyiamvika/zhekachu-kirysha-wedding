'use client';

import Image from 'next/image';
import { useSlug } from '@/app/lib/hooks';
import { ButtonLink } from '@/app/ui/components';

import notFoundKittyImg from '@/public/not-found-kitty.webp';

export const NotFoundPage = () => {
  const slug = useSlug();

  return (
    <div className='pb-15 h-dvh w-full flex flex-col'>
      <div className='w-full flex px-27.5 justify-center'>
        <Image
          src={notFoundKittyImg}
          alt='Кошенятко головою вниз'
          width={100}
          height={78}
          className='min-w-[100] max-w-[180] min-h-[78] max-h-[141] grow'
          priority
        />
      </div>
      <div className='text-center flex flex-col gap-6 items-center justify-center grow px-4'>
        <span className='w-[320]'>Ой! Це не той поворот !</span>
        <span className='min-w-[288] max-w-[480]'>
          Сторінку загублено десь між Wi-Fi і кавою. Повертаємось додому?
        </span>
      </div>
      <div className='w-full flex justify-center'>
        {slug && <ButtonLink href={slug}>Так, виведи мене</ButtonLink>}
      </div>
    </div>
  );
};
