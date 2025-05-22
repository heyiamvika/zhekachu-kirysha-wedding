import React from 'react';
import { Button } from './Button';

type ButtonGroupProps = {
  buttons?: string[];
  onSelect: (value: string) => void;
};

export const ButtonGroup = ({ buttons, onSelect }: ButtonGroupProps) => {
  return (
    <div className='w-full px-4 flex flex-col gap-2 sm:gap-4 items-center justify-start mb-2 sm:mb-20'>
      {buttons &&
        buttons.length > 0 &&
        buttons.map((buttonText) => (
          <Button key={buttonText} onClick={() => onSelect(buttonText)}>
            {buttonText}
          </Button>
        ))}
    </div>
  );
};
