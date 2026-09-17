import type { Metadata } from 'next';
import React from 'react';

import FindingsSection from './_components/findings-section';
import MethodSection from './_components/method-section';
import ScalingLabHero from './_components/scaling-lab-hero';
import StagesSection from './_components/stages-section';

const description =
  'From 1 to 2600 requests per second on one desktop: eight measured steps on a normal Postgres API, including the one that added no throughput.';

export const metadata: Metadata = {
  title: 'ts-api-scaling-lab, a case study',
  description,
  alternates: { canonical: '/scaling-lab' },
  openGraph: {
    type: 'article',
    url: '/scaling-lab',
    title: 'ts-api-scaling-lab, a case study',
    description,
  },
};

const ScalingLabPage: React.FC = (): React.JSX.Element => {
  return (
    <div className='flex flex-1 justify-center px-6 pt-8 pb-16'>
      <div className='stagger flex w-full max-w-[1080px] flex-col'>
        <ScalingLabHero />
        <StagesSection />
        <FindingsSection />
        <MethodSection />
      </div>
    </div>
  );
};

export default ScalingLabPage;
