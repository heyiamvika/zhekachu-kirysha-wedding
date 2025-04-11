import localFont from 'next/font/local';

export const customFont = localFont({
  src: [
    {
      path: '../../../public/fonts/Inspiration.ttf',
      weight: '400',
      style: 'normal',
    },
    // {
    //   path: '../../../public/fonts/Inspiration.woff2',
    //   weight: '700',
    //   style: 'normal',
    // },
  ],
  display: 'swap',
  variable: '--font-custom',
});
