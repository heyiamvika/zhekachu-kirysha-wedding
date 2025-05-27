import type { Metadata, Viewport } from 'next';
import { inspiration } from '@/app/ui/fonts';
import '@/app/ui/global.css';

export const metadata: Metadata = {
  title: 'Женя та Кір одружуються!',
  description: '...і запрошують вас на свято',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={`${inspiration.className} antialiased h-screen`}>
      <body>{children}</body>
    </html>
  );
}
