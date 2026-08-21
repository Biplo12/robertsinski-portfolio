import type { Metadata } from 'next';
import React from 'react';
import { Geist, Geist_Mono, Outfit } from 'next/font/google';
import './globals.css';

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin', 'latin-ext'],
});

const geist = Geist({
  variable: '--font-geist',
  subsets: ['latin', 'latin-ext'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Robert Siński, fullstack developer',
  description:
    'Fullstack developer in Katowice, Poland. I build web apps, backend and frontend.',
};

const RootLayout: React.FC<LayoutProps<'/'>> = ({
  children,
}): React.JSX.Element => {
  return (
    <html
      lang='en'
      className={`dark ${outfit.variable} ${geist.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className='min-h-full flex flex-col'>{children}</body>
    </html>
  );
};

export default RootLayout;
