import clsx from 'clsx';
import { MouseEventHandler } from 'react';

type ButtonProps = {
  value: string;
  isSelected: boolean;
  onClick: MouseEventHandler;
};

export const Button = ({ value, isSelected, onClick }: ButtonProps) => {
  return (
    <button
      className={clsx(
        `min-w-55 h-10 px-8 flex justify-center items-center border rounded-2xl text-small hover:border-white hover:bg-foreground hover:text-white`,
        {
          'border-white bg-foreground text-white': isSelected,
        }
      )}
      onClick={(e) => {
        e.stopPropagation();
        onClick(e);
      }}
      value={value}
    >
      {value}
    </button>
  );
};
