import type { Metadata } from 'next';
import './(ui)/globals.css';
import { customFont } from './(ui)/fonts';

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
    <html lang='en'>
      <body className={`${customFont.variable} antialiased`}>{children}</body>
    </html>
  );
}
