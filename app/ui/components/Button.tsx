import clsx from 'clsx';
import { MouseEventHandler } from 'react';

type ButtonProps = {
  value: string;
  onClick: MouseEventHandler;
  isSelected?: boolean;
};

export const Button = ({ value, isSelected, onClick }: ButtonProps) => {
  return (
    <button
      className={clsx(
        `min-w-[200] max-w-fit h-10 px-4 flex justify-center items-center border rounded-2xl text-button active:border-white active:bg-foreground active:text-white`,
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
