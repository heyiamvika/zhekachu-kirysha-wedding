import Image from 'next/image';

import fireworksImg from '@/public/fireworks.webp';
import { ButtonLink } from '@/app/ui/components';

const TG_LINK = 'https://t.me/+qZfTvNQnFbU1MTZi';

export const ConfirmedPage = () => {
  return (
    <div className='h-dvh pt-10 pb-15 flex flex-col items-center'>
      <div className='px-19.5 w-full'>
        <Image
          src={fireworksImg}
          alt='Феєрверки'
          width={164}
          height={105}
          className='w-full h-full'
        />
      </div>
      <div className='grow px-4 flex flex-col items-center justify-center gap-6 min-w-[288] max-w-[480]'>
        <span className='text-center'>Єєє!</span>
        <span className='text-center'>
          Тепер весілля офіційно на 100% круте 🎉 Чекаємо з нетерпінням!
        </span>
      </div>
      <ButtonLink href={TG_LINK}>Заходь до нас в чатик</ButtonLink>
    </div>
  );
};
