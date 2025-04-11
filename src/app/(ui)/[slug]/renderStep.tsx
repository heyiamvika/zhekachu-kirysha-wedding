import { Step } from 'app/lib/definitions';
import StartPage from './start';

export const renderStep = (
  currentStep: Step,
  nextStep: () => void,
  prevStep: () => void
) => {
  switch (currentStep) {
    case 'start':
      return <StartPage onNext={nextStep} onPrev={prevStep} />;
    case 1:
      return (
        <div>
          Step 1<button onClick={nextStep}>Next step</button>
        </div>
      );
    case 2:
      return (
        <div>
          Step2 <button onClick={nextStep}>Next step</button>
        </div>
      );
    case 3:
      return (
        <div>
          Step3 <button onClick={nextStep}>Next step</button>
        </div>
      );
    case 4:
      return (
        <div>
          Step4 <button onClick={nextStep}>Next step</button>
        </div>
      );
    case 5:
      return (
        <div>
          Step5 <button onClick={nextStep}>Next step</button>
        </div>
      );
    case 6:
      return (
        <div>
          Step6 <button onClick={nextStep}>Next step</button>
        </div>
      );
    case 'confirmation':
      return (
        <div>
          Confirmation <button>Next step</button>
        </div>
      );
    default:
      return (
        <div>
          Start <button onClick={nextStep}>Next step</button>
        </div>
      );
  }
};
