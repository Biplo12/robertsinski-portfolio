import type { Metadata } from 'next';
import React from 'react';

import BoardflowHero from './_components/boardflow-hero';
import DecisionsSection from './_components/decisions-section';
import SplitSection from './_components/split-section';

const description =
  'How BoardFlow is built: what belongs in a realtime room, what belongs in a database, and why the stroke you are drawing is neither.';

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
    <div className='flex flex-1 justify-center px-6 py-16'>
      <div className='stagger flex w-full max-w-3xl flex-col gap-4'>
        <BoardflowHero />
        <SplitSection />
        <DecisionsSection />
      </div>
    </div>
  );
};

export default BoardflowPage;
