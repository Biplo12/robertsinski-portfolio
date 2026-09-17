import React from 'react';

import Reveal from '@/components/reveal';

import type { Metadata } from 'next';

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
    <div className='flex flex-1 justify-center px-6 pt-8 pb-16'>
      <Reveal className='flex w-full max-w-[1080px] flex-col'>
        <KlapsHero />
        <ArchitectureSection />
        <DecisionsSection />
      </Reveal>
    </div>
  );
};

export default KlapsPage;
