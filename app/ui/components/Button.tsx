import { MouseEventHandler, PropsWithChildren } from 'react';

type ButtonProps = {
  onClick: MouseEventHandler;
} & PropsWithChildren;

export const Button = ({ children, onClick }: ButtonProps) => {
  if (!children) {
    return <div className='min-w-55 h-10 px-8' />;
  }

  return (
    <button
      className='min-w-55 h-10 px-8 flex justify-center items-center border rounded-2xl text-small'
      onClick={(e) => {
        e.stopPropagation();
        onClick(e);
      }}
    >
      {children}
    </button>
  );
};
