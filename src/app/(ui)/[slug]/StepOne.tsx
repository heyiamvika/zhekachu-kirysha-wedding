import { StepPageProps } from 'app/lib/definitions';
import Image from 'next/image';

const StepOne = ({ onNext }: StepPageProps) => {
  return (
    <>
      <button onClick={onNext}>
        <Image
          src='/right-arrow.png'
          alt='стрілка вправо'
          width={44}
          height={16}
        />
      </button>
    </>
  );
};

export default StepOne;
