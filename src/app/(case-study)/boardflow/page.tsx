import React from 'react';

import Reveal from '@/components/reveal';

import type { Metadata } from 'next';

import BoardflowHero from './_components/boardflow-hero';
import DecisionsSection from './_components/decisions-section';
import LayersSection from './_components/layers-section';

const description =
  'How BoardFlow is built: what belongs in a realtime room, what belongs in a database, and where the line between them runs.';

export const metadata: Metadata = {
  title: 'BoardFlow, a case study',
  description,
  alternates: { canonical: '/boardflow' },
  openGraph: {
    type: 'article',
    url: '/boardflow',
    title: 'BoardFlow, a case study',
    description,
  },
};

const BoardflowPage: React.FC = (): React.JSX.Element => {
  return (
    <div className='flex flex-1 justify-center px-6 pt-8 pb-16'>
      <Reveal className='flex w-full max-w-[1080px] flex-col'>
        <BoardflowHero />
        <LayersSection />
        <DecisionsSection />
      </Reveal>
    </div>
  );
};

export default BoardflowPage;
