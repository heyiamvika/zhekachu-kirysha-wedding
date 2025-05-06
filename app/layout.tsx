import type { Metadata } from 'next';
import { inspiration } from '@/app/ui/fonts';
import '@/app/ui/global.css';

export const metadata: Metadata = {
  title: 'Женя та Кір одружуються!',
  description: '...і запрошують вас на свято',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={`${inspiration.className} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
