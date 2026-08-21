import type { Metadata } from 'next';
import React from 'react';

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
    <div className='flex flex-1 justify-center px-6 py-16'>
      <div className='stagger flex w-full max-w-3xl flex-col gap-4'>
        <OrderflowHero />
        <FlowSection />
        <PatternsSection />
      </div>
    </div>
  );
};

export default OrderflowPage;
