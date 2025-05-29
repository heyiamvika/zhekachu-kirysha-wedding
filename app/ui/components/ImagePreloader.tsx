import { PropsWithChildren } from 'react';
import Image from 'next/image';

import transportationImg from '@/public/transportation.webp';
import hotelImg from '@/public/hotel.webp';
import allergiesImg from '@/public/allergies.webp';
import alcoholImg from '@/public/alcohol.webp';
import vyshyvankaImg from '@/public/vyshyvanka.webp';
import lovebirdsImg from '@/public/lovebirds.webp';
import envelopeTopImg from '@/public/envelope-top-small.webp';
import envelopeBottomImg from '@/public/envelope-bottom.webp';
import locationImg from '@/public/location-background.webp';
import kittyImg from '@/public/kitty.webp';
import arrowPopupImg from '@/public/arrow-popup.svg';
import fireworksImg from '@/public/fireworks.webp';
import whiteArrowImg from '@/public/white-arrow.webp';

export const ImagePreloader = ({ children }: PropsWithChildren) => {
  return (
    <>
      {/* Цей блок ЗОБРАЖЕНЬ РЕНДЕРИТЬСЯ ЗАВЖДИ,
              незалежно від currentStep.
              Це змушує Next.js попередньо завантажувати їх.
              Ми їх просто приховуємо CSS.
          */}
      <div className='hidden'>
        <Image
          src={envelopeTopImg}
          alt='Envelope top preload'
          width={375}
          height={400}
          quality={25}
          priority
        />
        <Image
          src={envelopeBottomImg}
          alt='Envelope bottom preload'
          fill
          priority
        />
        <Image
          src={whiteArrowImg}
          alt='White arrow preload'
          width={50}
          height={44}
          priority
        />
        <Image src={locationImg} alt='Location preload' fill priority />
        <Image
          src={kittyImg}
          width={89}
          height={89}
          alt='Kitty preload'
          priority
        />
        <Image
          src={arrowPopupImg}
          alt='Arrow popup preload'
          width={35}
          height={34}
          priority
        />
        <Image
          src={transportationImg}
          alt='Transportation preload'
          fill
          priority
        />
        <Image src={hotelImg} alt='Hotel preload' fill priority />
        <Image src={allergiesImg} alt='Allergies preload' fill priority />
        <Image src={alcoholImg} alt='Alcohol preload' fill priority />
        <Image src={vyshyvankaImg} alt='Vyshyvanka preload' fill priority />
        <Image src={lovebirdsImg} alt='Confirmation preload' fill priority />
        <Image
          src={fireworksImg}
          alt='Fireworks preload'
          width={164}
          height={105}
          priority
        />
      </div>
      {children}
    </>
  );
};
