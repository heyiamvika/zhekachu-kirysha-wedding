import React from 'react';
import { Button } from './Button';

type ButtonGroupProps = {
  buttons: string[];
  onSelect?: (value: string) => void;
};

export const ButtonGroup = ({ buttons, onSelect }: ButtonGroupProps) => {
  if (buttons.length === 0) return null;

  return buttons.map((buttonText) => (
    <Button
      key={buttonText}
      onClick={onSelect ? () => onSelect(buttonText) : undefined}
    >
      {buttonText}
    </Button>
  ));
};
