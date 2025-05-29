import { PropsWithChildren } from 'react';
import Image from 'next/image';

import transportationImg from '@/public/transportation.webp';
import hotelImg from '@/public/hotel.webp';
import allergiesImg from '@/public/allergies.webp';
import alcoholImg from '@/public/alcohol.webp';
import vyshyvankaImg from '@/public/vyshyvanka.webp';
import lovebirdsImg from '@/public/lovebirds.webp';
import envelopeTopImg from '@/public/envelope-top.svg';
import kittyImg from '@/public/kitty.webp';
import arrowPopupImg from '@/public/arrow-popup.svg';
import fireworksImg from '@/public/fireworks.webp';

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
          priority
          src={envelopeTopImg}
          alt='Envelope top preload'
          width={375}
          height={400}
          quality={25}
        />
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
          sizes='(max-width: 768px) 100vw, 50vw'
          priority
        />
        <Image
          src={hotelImg}
          alt='Hotel preload'
          fill
          sizes='(max-width: 768px) 100vw, 50vw'
          priority
        />
        <Image
          src={allergiesImg}
          alt='Allergies preload'
          fill
          sizes='(max-width: 768px) 100vw, 50vw'
          priority
        />
        <Image
          src={alcoholImg}
          alt='Alcohol preload'
          fill
          sizes='(max-width: 768px) 100vw, 50vw'
          priority
        />
        <Image
          src={vyshyvankaImg}
          alt='Vyshyvanka preload'
          fill
          sizes='(max-width: 768px) 100vw, 50vw'
          priority
        />
        <Image
          src={lovebirdsImg}
          alt='Confirmation preload'
          fill
          sizes='(max-width: 768px) 100vw, 50vw'
          priority
        />
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
