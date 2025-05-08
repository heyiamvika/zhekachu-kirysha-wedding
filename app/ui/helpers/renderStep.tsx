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
  const { onNext, onPrev } = events;

  switch (currentStep) {
    case PAGES.START:
      return <StartPage onNext={onNext} />;
    case PAGES.LOCATION_STEP:
      return <LocationPage onNext={onNext} />;
    case PAGES.TRANSPORTATION_STEP:
      return (
        <FormFieldPage
          text='ми будемо разом їхати автобусом, але якщо ти своїм ходом - клікай!'
          imageSrc='/transportation.svg'
          buttonOneText='їду з вами'
          buttonTwoText='своїм ходом'
          {...events}
        />
      );
    case PAGES.HOTEL_STEP:
      return (
        <FormFieldPage
          text='а ще ми залишаємось ночувати на локації, ти з нами?'
          imageSrc='/hotel.svg'
          buttonOneText='офкорс!'
          buttonTwoText='їду до себе'
          {...events}
        />
      );
    case PAGES.ALLERGIES_STEP:
      return (
        <FormFieldPage
          text='ми хочемо, щоб всім було смачно, тому підкажи, чи є в тебе алергії чи особисті дієти?'
          imageSrc='/allergies.svg'
          buttonOneText='я їм все!'
          buttonTwoText='так, я напишу'
          {...events}
        />
      );
    case PAGES.ALCOHOL_STEP:
      return (
        <FormFieldPage
          text='і чи можна тобі алкоголь?'
          imageSrc='/alcohol.svg'
          buttonOneText='наливайте!'
          buttonTwoText='ні, я по 0%'
          {...events}
        />
      );
    case PAGES.DRESS_CODE_STEP:
      return (
        <FormFieldPage
          text='до речі, в нас нема дрескоду, але якщо є вишиванки - їх час вигуляти'
          imageSrc='/vyshyvanka.svg'
          {...events}
        />
      );
    case PAGES.CONFIRMATION_STEP:
      return (
        <FormFieldPage
          text='чекаємо на твоє завітне “так!”'
          imageSrc='/lovebirds.svg'
          onPrev={onPrev}
          buttonOneText='я буду!'
        />
      );
    default:
      return <StartPage {...events} />;
  }
};
