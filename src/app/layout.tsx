import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from 'next';
import {
  Bricolage_Grotesque,
  JetBrains_Mono,
  Public_Sans,
} from 'next/font/google';
import React from 'react';

import { site } from '@/lib/site';

import './globals.css';

// Display face: a grotesque with deliberately uneven joints and a width axis,
// so headlines have a voice instead of reading as default UI type.
const bricolage = Bricolage_Grotesque({
  variable: '--font-bricolage',
  subsets: ['latin', 'latin-ext'],
});

// Text face: quiet and highly legible, chosen to stay out of the display's way.
const publicSans = Public_Sans({
  variable: '--font-public-sans',
  subsets: ['latin', 'latin-ext'],
});

// Mono is reserved for what is literally code or data: stacks, dates, counts.
const mono = JetBrains_Mono({
  variable: '--font-mono-code',
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
      className={`${bricolage.variable} ${publicSans.variable} ${mono.variable} h-full antialiased`}
    >
      {/* Browser extensions inject attributes here before React hydrates. */}
      <body className='min-h-full flex flex-col' suppressHydrationWarning>
        {/* Sections are hidden until the script reveals them, so without it
            they would never appear. */}
        <noscript>
          <style>{'.reveal > * { opacity: 1; transform: none; }'}</style>
        </noscript>

        {children}
        <Analytics />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </body>
    </html>
  );
};

export default RootLayout;
