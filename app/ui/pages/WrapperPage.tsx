'use client';

import {
  ConfirmedPage,
  DesktopPage,
  FormFieldPage,
  LocationPage,
  NotFoundPage,
  StartPage,
} from '@/app/ui/pages';
import { useWindowWidth } from '@/app/lib/hooks';
import { useAppStore } from '@/app/lib/hooks';
import { PAGES } from '@/app/lib/pages';

const MOBILE_MAX_WIDTH = 430;

export const WrapperPage = () => {
  const windowWidth = useWindowWidth();
  const { currentStep, guest } = useAppStore((state) => state);

  const isDesktop = windowWidth && windowWidth > MOBILE_MAX_WIDTH;

  if (isDesktop) {
    return <DesktopPage />;
  }

  if (!guest) {
    return <NotFoundPage />;
  }

  return renderStep(currentStep);
};

const renderStep = (currentStep: number) => {
  switch (currentStep) {
    case PAGES.START:
      return <StartPage />;
    case PAGES.LOCATION_STEP:
      return <LocationPage />;
    case PAGES.TRANSPORTATION_STEP:
      return (
        <FormFieldPage
          text='ми будемо разом їхати автобусом, але якщо ти своїм ходом - клікай!'
          imageSrc='/transportation.svg'
          buttons={{
            formFieldKey: 'transportation',
            options: ['їду з вами', 'своїм ходом'],
          }}
          showNext
          showPrev
        />
      );
    case PAGES.HOTEL_STEP:
      return (
        <FormFieldPage
          showNext
          showPrev
          text='а ще ми залишаємось ночувати на локації, ти з нами?'
          imageSrc='/hotel.svg'
          buttons={{
            formFieldKey: 'hotel',
            options: ['офкорс!', 'їду до себе'],
          }}
        />
      );
    case PAGES.ALLERGIES_STEP:
      return (
        <FormFieldPage
          showNext
          showPrev
          text='ми хочемо, щоб всім було смачно, тому підкажи, чи є в тебе алергії чи особисті дієти?'
          imageSrc='/allergies.svg'
          buttons={{
            formFieldKey: 'allergies',
            options: ['я їм все!', 'так, я напишу'],
          }}
        />
      );
    case PAGES.ALCOHOL_STEP:
      return (
        <FormFieldPage
          showNext
          showPrev
          text='і чи можна тобі алкоголь?'
          imageSrc='/alcohol.svg'
          buttons={{
            formFieldKey: 'alcohol',
            options: ['наливайте!', 'ні, я по 0%'],
          }}
        />
      );
    case PAGES.DRESS_CODE_STEP:
      return (
        <FormFieldPage
          showNext
          showPrev
          text='до речі, в нас нема дрескоду, але якщо є вишиванки - їх час вигуляти'
          imageSrc='/vyshyvanka.svg'
        />
      );
    case PAGES.CONFIRMATION_STEP:
      return (
        <FormFieldPage
          showPrev
          text='чекаємо на твоє завітне “так!”'
          imageSrc='/lovebirds.svg'
          buttons={{ formFieldKey: 'confirmation', options: ['я буду!'] }}
        />
      );
    case PAGES.CONFIRMED_STEP:
      return <ConfirmedPage />;
    default:
      return <NotFoundPage />;
  }
};
