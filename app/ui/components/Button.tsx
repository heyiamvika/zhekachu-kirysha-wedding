import { PropsWithChildren } from 'react';

type ButtonProps = {
  onClick: () => void;
} & PropsWithChildren;

export const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button
      className='min-w-50 h-10 px-8 flex justify-center items-center border rounded-2xl text-small'
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
    >
      {children}
    </button>
  );
};
