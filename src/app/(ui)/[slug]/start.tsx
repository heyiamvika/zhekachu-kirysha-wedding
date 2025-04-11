import React from 'react';

type Props = {
  onNext: () => void;
  onPrev: () => void;
};

const StartPage = ({ onNext }: Props) => {
  return <div onClick={onNext}>Start</div>;
};

export default StartPage;
