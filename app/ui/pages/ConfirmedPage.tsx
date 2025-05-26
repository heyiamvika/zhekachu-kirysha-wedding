import Image from 'next/image';

export const ConfirmedPage = () => {
  return (
    <div className='h-screen pt-10 pb-15 flex flex-col'>
      <div className='px-19.5'>
        <Image
          src='/fireworks.png'
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
    </div>
  );
};
