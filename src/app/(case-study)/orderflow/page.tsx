import React from 'react';

import Reveal from '@/components/reveal';

import type { Metadata } from 'next';

import FlowSection from './_components/flow-section';
import OrderflowHero from './_components/orderflow-hero';
import PatternsSection from './_components/patterns-section';

const description =
  'How orderflow-engine is built: five processes that talk only through a queue, and the guarantees that keep an order correct when one of them dies.';

export const metadata: Metadata = {
  title: 'orderflow-engine, a case study',
  description,
  alternates: { canonical: '/orderflow' },
  openGraph: {
    type: 'article',
    url: '/orderflow',
    title: 'orderflow-engine, a case study',
    description,
  },
};

const OrderflowPage: React.FC = (): React.JSX.Element => {
  return (
    <div className='flex flex-1 justify-center px-6 pt-8 pb-16'>
      <Reveal className='flex w-full max-w-[1080px] flex-col'>
        <OrderflowHero />
        <FlowSection />
        <PatternsSection />
      </Reveal>
    </div>
  );
};

export default OrderflowPage;
