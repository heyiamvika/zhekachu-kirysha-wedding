import Image from 'next/image';

export const ConfirmedPage = () => {
  return (
    <div className='h-screen pt-10 pb-15 px-4 flex justify-center items-center'>
      <div className='flex flex-col items-center gap-15'>
        <Image src='/fireworks.png' alt='Феєрверки' width={164} height={105} />
        <span className='text-center'>Єєє!</span>
        <span className='text-center'>
          Тепер весілля офіційно на 100% круте 🎉 Чекаємо з нетерпінням!
        </span>
      </div>
    </div>
  );
};
