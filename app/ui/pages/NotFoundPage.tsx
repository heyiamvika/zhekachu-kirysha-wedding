export const NotFoundPage = () => {
  return (
    <div className='flex flex-col gap-10 w-full h-screen items-center justify-center'>
      <span className='max-w-[70%] text-center'>Ой! Це не той поворот !</span>
      <span className='text-center'>
        Сторінку загублено десь між Wi-Fi і кавою. Повертаємось додому?
      </span>
    </div>
  );
};
