'use client';

import {
  ConfirmedPage,
  FormFieldPage,
  LocationPage,
  NotFoundPage,
  StartPage,
} from '@/app/ui/pages';
import { ImagePreloader } from '@/app/ui/components';

import { useAppStore } from '@/app/lib/hooks';
import { PAGES } from '@/app/lib/pages';

import transportationImg from '@/public/transportation.webp';
import hotelImg from '@/public/hotel.webp';
import allergiesImg from '@/public/allergies.webp';
import alcoholImg from '@/public/alcohol.webp';
import vyshyvankaImg from '@/public/vyshyvanka.webp';
import lovebirdsImg from '@/public/lovebirds.webp';

export const WrapperPage = () => {
  const { currentStep } = useAppStore((state) => state);

  return <ImagePreloader>{renderStep(currentStep)}</ImagePreloader>;
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
          imageSrc={transportationImg}
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
          imageSrc={hotelImg}
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
          imageSrc={allergiesImg}
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
          imageSrc={alcoholImg}
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
          imageSrc={vyshyvankaImg}
        />
      );
    case PAGES.CONFIRMATION_STEP:
      return (
        <FormFieldPage
          showPrev
          text='чекаємо на твоє завітне “так!”'
          imageSrc={lovebirdsImg}
          buttons={{ formFieldKey: 'confirmation', options: ['я буду!'] }}
        />
      );
    case PAGES.CONFIRMED_STEP:
      return <ConfirmedPage />;
    default:
      return <NotFoundPage />;
  }
};
