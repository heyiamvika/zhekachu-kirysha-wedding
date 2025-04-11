import { Step } from 'app/lib/definitions';
import StartPage from './StartPage';
import StepOne from './StepOne';

export const renderStep = (
  currentStep: Step,
  nextStep: () => void,
  prevStep: () => void
) => {
  switch (currentStep) {
    case 1:
      return <StartPage onNext={nextStep} />;
    case 2:
      return <StepOne onNext={nextStep} onPrev={prevStep} />;
    case 3:
      return (
        <div>
          Step2 <button onClick={nextStep}>Next step</button>
        </div>
      );
    case 4:
      return (
        <div>
          Step3 <button onClick={nextStep}>Next step</button>
        </div>
      );
    case 5:
      return (
        <div>
          Step4 <button onClick={nextStep}>Next step</button>
        </div>
      );
    case 6:
      return (
        <div>
          Step5 <button onClick={nextStep}>Next step</button>
        </div>
      );
    case 7:
      return (
        <div>
          Step6 <button onClick={nextStep}>Next step</button>
        </div>
      );
    case 8:
      return <div>Confirmation</div>;
    default:
      return (
        <div>
          Start <button onClick={nextStep}>Next step</button>
        </div>
      );
  }
};
