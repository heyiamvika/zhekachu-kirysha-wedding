import { Step } from '@/app/lib/definitions';
import { PAGES } from '@/app/lib/pages';

import StartPage from '../pages/StartPage';
import LocationPage from '../pages/LocationPage';
import FormFieldPage from '../pages/FormFieldPage';

type Events = {
  onNext: () => void;
  onPrev: () => void;
};

export const renderStep = (currentStep: Step, events: Events) => {
  switch (currentStep) {
    case PAGES.START:
      return <StartPage {...events} />;
    case PAGES.LOCATION_STEP:
      return <LocationPage {...events} />;
    case PAGES.TRANSPORTATION_STEP:
      return (
        <FormFieldPage
          text='ми будемо разом їхати автобусом, але якщо ти своїм ходом - клікай!'
          imageSrc='/bus.gif'
          buttonOneText='їду з вами'
          buttonTwoText='своїм ходом'
          {...events}
        />
      );
    case PAGES.HOTEL_STEP:
      return <div>Step3</div>;
    case PAGES.ALLERGIES_STEP:
      return <div>Step4</div>;
    case PAGES.ALCOHOL_STEP:
      return <div>Step5</div>;
    case PAGES.DRESS_CODE_STEP:
      return <div>Step6</div>;
    case PAGES.CONFIRMATION_STEP:
      return <div>Confirmation</div>;
    default:
      return <StartPage {...events} />;
  }
};
