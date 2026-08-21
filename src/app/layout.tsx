import type { Metadata } from 'next';
import { Geist, Geist_Mono, Outfit } from 'next/font/google';
import React from 'react';

import { site } from '@/lib/site';

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

const description =
  'Fullstack developer in Katowice, Poland. I build web apps, backend and frontend.';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: `${site.name}, fullstack developer`,
  description,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: site.url,
    siteName: site.name,
    title: `${site.name}, fullstack developer`,
    description,
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name}, fullstack developer`,
    description,
  },
};

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: site.name,
  jobTitle: site.role,
  url: site.url,
  email: `mailto:${site.email}`,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Katowice',
    addressCountry: 'PL',
  },
  sameAs: [site.github, site.linkedin],
};

const RootLayout: React.FC<LayoutProps<'/'>> = ({
  children,
}): React.JSX.Element => {
  return (
    <html
      lang='en'
      className={`${outfit.variable} ${geist.variable} ${geistMono.variable} h-full antialiased`}
    >
      {/* Browser extensions inject attributes here before React hydrates. */}
      <body className='min-h-full flex flex-col' suppressHydrationWarning>
        {children}
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </body>
    </html>
  );
};

export default RootLayout;
