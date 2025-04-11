import { Step } from 'app/lib/definitions';
import { PAGES } from 'app/lib/pages';

import StartPage from './StartPage';
import LocationPage from './LocationPage';
import TransportationPage from './TransportationPage';

export const renderStep = (currentStep: Step) => {
  switch (currentStep) {
    case PAGES.START:
      return <StartPage />;
    case PAGES.LOCATION_STEP:
      return <LocationPage />;
    case PAGES.TRANSPORTATION_STEP:
      return <TransportationPage />;
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
      return <StartPage />;
  }
};
