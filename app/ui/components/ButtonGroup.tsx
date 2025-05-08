import React from 'react';
import { Button } from './Button';

type ButtonGroupProps = {
  buttonOneText?: string;
  buttonTwoText?: string;
  onButtonOneClick?: (value: string) => void;
  onButtonTwoClick?: (value: string) => void;
};

export const ButtonGroup = ({
  buttonOneText,
  buttonTwoText,
  onButtonOneClick,
  onButtonTwoClick,
}: ButtonGroupProps) => {
  if (buttonOneText || buttonTwoText) {
    return (
      <div className='w-full px-4 flex flex-col gap-2 sm:gap-4 items-center mb-2 sm:mb-20'>
        <Button
          onClick={
            onButtonOneClick
              ? () => onButtonOneClick(buttonOneText!)
              : undefined
          }
        >
          {buttonOneText}
        </Button>
        <Button
          onClick={
            onButtonTwoClick
              ? () => onButtonTwoClick(buttonTwoText!)
              : undefined
          }
        >
          {buttonTwoText}
        </Button>
      </div>
    );
  }
};
