import React from 'react';
import { Button } from './Button';
import { Buttons } from '@/app/lib/definitions';

type ButtonGroupProps = {
  buttons?: Buttons;
  selectedValue: string | null;
  onSelect: (value: string) => void;
};

export const ButtonGroup = ({
  buttons,
  selectedValue,
  onSelect,
}: ButtonGroupProps) => {
  return (
    <div className='w-full px-4 flex flex-col gap-2 sm:gap-4 items-center justify-start mb-2 sm:mb-20'>
      {buttons?.options.map((value) => (
        <Button
          key={value}
          onClick={() => onSelect(value)}
          value={value}
          isSelected={selectedValue === value}
        />
      ))}
    </div>
  );
};
