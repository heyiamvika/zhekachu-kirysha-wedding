import { StepPageProps } from 'app/lib/definitions';

const StartPage = ({ onNext }: StepPageProps) => {
  // TODO: add layout
  return <div onClick={onNext}>Start</div>;
};

export default StartPage;
