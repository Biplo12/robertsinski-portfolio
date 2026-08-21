import type { Metadata } from 'next';
import React from 'react';

import ArchitectureSection from './_components/architecture-section';
import DecisionsSection from './_components/decisions-section';
import KlapsHero from './_components/klaps-hero';

const description =
  'How Klaps is built: six services that collect cinema listings, own the data, serve the site and post screenings.';

export const metadata: Metadata = {
  title: 'Klaps, a case study',
  description,
  alternates: { canonical: '/klaps' },
  openGraph: {
    type: 'article',
    url: '/klaps',
    title: 'Klaps, a case study',
    description,
  },
};

const KlapsPage: React.FC = (): React.JSX.Element => {
  return (
    <div className='flex flex-1 justify-center px-6 py-16'>
      <div className='stagger flex w-full max-w-3xl flex-col gap-4'>
        <KlapsHero />
        <ArchitectureSection />
        <DecisionsSection />
      </div>
    </div>
  );
};

export default KlapsPage;
