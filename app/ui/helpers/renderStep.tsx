import { PAGES } from '@/app/lib/pages';
import { FormFieldPage, LocationPage, NotFoundPage, StartPage } from '../pages';
import { AppStore } from '@/app/lib/stores';

export const renderStep = (store: AppStore) => {
  switch (store.currentStep) {
    case PAGES.START:
      return <StartPage store={store} />;
    case PAGES.LOCATION_STEP:
      return <LocationPage />;
    case PAGES.TRANSPORTATION_STEP:
      return (
        <FormFieldPage
          store={store}
          formFieldKey='transportation'
          text='ми будемо разом їхати автобусом, але якщо ти своїм ходом - клікай!'
          imageSrc='/transportation.svg'
          buttons={['їду з вами', 'своїм ходом']}
          showNext
          showPrev
        />
      );
    case PAGES.HOTEL_STEP:
      return (
        <FormFieldPage
          store={store}
          formFieldKey='hotel'
          showNext
          showPrev
          text='а ще ми залишаємось ночувати на локації, ти з нами?'
          imageSrc='/hotel.svg'
          buttons={['офкорс!', 'їду до себе']}
        />
      );
    case PAGES.ALLERGIES_STEP:
      return (
        <FormFieldPage
          store={store}
          formFieldKey='allergies'
          showNext
          showPrev
          text='ми хочемо, щоб всім було смачно, тому підкажи, чи є в тебе алергії чи особисті дієти?'
          imageSrc='/allergies.svg'
          buttons={['я їм все!', 'так, я напишу']}
        />
      );
    case PAGES.ALCOHOL_STEP:
      return (
        <FormFieldPage
          store={store}
          formFieldKey='alcohol'
          showNext
          showPrev
          text='і чи можна тобі алкоголь?'
          imageSrc='/alcohol.svg'
          buttons={['наливайте!', 'ні, я по 0%']}
        />
      );
    case PAGES.DRESS_CODE_STEP:
      return (
        <FormFieldPage
          store={store}
          showNext
          showPrev
          text='до речі, в нас нема дрескоду, але якщо є вишиванки - їх час вигуляти'
          imageSrc='/vyshyvanka.svg'
        />
      );
    case PAGES.CONFIRMATION_STEP:
      return (
        <FormFieldPage
          store={store}
          showPrev
          text='чекаємо на твоє завітне “так!”'
          imageSrc='/lovebirds.svg'
          buttons={['я буду!']}
        />
      );
    case PAGES.CONFIRMED_STEP:
      return <div>TODO: Confirmed</div>;
    default:
      return <NotFoundPage />;
  }
};
