import { PropsWithChildren } from 'react';

export const Button = ({ children }: PropsWithChildren) => {
  // TODO: стайлінг кнопки
  return (
    <button className='w-50 h-10 px-4 flex justify-center items-center border rounded-2xl'>
      {children}
    </button>
  );
};
