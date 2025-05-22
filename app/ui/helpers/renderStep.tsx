import { Step, FormData, Guest } from '@/app/lib/definitions';
import { PAGES } from '@/app/lib/pages';
import { FormFieldPage, LocationPage, NotFoundPage, StartPage } from '../pages';
import { MouseEventHandler } from 'react';

type Events = {
  onFormValueSet: (key: keyof FormData, value: string) => void;
  onFormSubmit: () => void;
  onScreenClick: MouseEventHandler;
};

type RenderStepProps = {
  guest: Guest;
  currentStep: Step;
  events: Events;
};

export const renderStep = ({ guest, currentStep, events }: RenderStepProps) => {
  const { onFormValueSet, onFormSubmit, onScreenClick } = events;

  switch (currentStep) {
    case PAGES.START:
      return <StartPage onScreenClick={onScreenClick} guestName={guest.name} />;
    case PAGES.LOCATION_STEP:
      return <LocationPage onScreenClick={onScreenClick} />;
    case PAGES.TRANSPORTATION_STEP:
      return (
        <FormFieldPage
          text='ми будемо разом їхати автобусом, але якщо ти своїм ходом - клікай!'
          imageSrc='/transportation.svg'
          buttons={['їду з вами', 'своїм ходом']}
          showNext
          showPrev
          onFormFieldSet={(value) => onFormValueSet('transportation', value)}
          {...events}
        />
      );
    case PAGES.HOTEL_STEP:
      return (
        <FormFieldPage
          showNext
          showPrev
          text='а ще ми залишаємось ночувати на локації, ти з нами?'
          imageSrc='/hotel.svg'
          buttons={['офкорс!', 'їду до себе']}
          onFormFieldSet={(value) => onFormValueSet('hotel', value)}
          {...events}
        />
      );
    case PAGES.ALLERGIES_STEP:
      return (
        <FormFieldPage
          showNext
          showPrev
          text='ми хочемо, щоб всім було смачно, тому підкажи, чи є в тебе алергії чи особисті дієти?'
          imageSrc='/allergies.svg'
          buttons={['я їм все!', 'так, я напишу']}
          onFormFieldSet={(value) => onFormValueSet('allergies', value)}
          {...events}
        />
      );
    case PAGES.ALCOHOL_STEP:
      return (
        <FormFieldPage
          showNext
          showPrev
          text='і чи можна тобі алкоголь?'
          imageSrc='/alcohol.svg'
          buttons={['наливайте!', 'ні, я по 0%']}
          onFormFieldSet={(value) => onFormValueSet('alcohol', value)}
          {...events}
        />
      );
    case PAGES.DRESS_CODE_STEP:
      return (
        <FormFieldPage
          showNext
          showPrev
          text='до речі, в нас нема дрескоду, але якщо є вишиванки - їх час вигуляти'
          imageSrc='/vyshyvanka.svg'
          {...events}
        />
      );
    case PAGES.CONFIRMATION_STEP:
      return (
        <FormFieldPage
          showPrev
          text='чекаємо на твоє завітне “так!”'
          imageSrc='/lovebirds.svg'
          buttons={['я буду!']}
          onFormFieldSet={onFormSubmit}
          {...events}
        />
      );
    default:
      return <NotFoundPage />;
  }
};
