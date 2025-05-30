import React from 'react';
import { Button } from './Button';
import { Buttons } from '@/app/lib/definitions';

type ButtonGroupProps = {
  buttons: Buttons;
  selectedValue: string | null;
  onSelect: (value: string) => void;
};

export const ButtonGroup = ({
  buttons,
  selectedValue,
  onSelect,
}: ButtonGroupProps) => {
  return (
    <div className='w-full min-h-[96] flex flex-col items-center gap-4'>
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
