import type { Metadata } from 'next';
import React from 'react';

import DecisionsSection from './_components/decisions-section';
import HomelabHero from './_components/homelab-hero';
import LayersSection from './_components/layers-section';
import ServicesSection from './_components/services-section';

const description =
  'The homelab: Proxmox under Docker, a reverse proxy with real certificates, one domain inside the house and another behind Cloudflare, cameras processed on the GPU, and backups on separate storage.';

export const metadata: Metadata = {
  title: 'Homelab',
  description,
  alternates: { canonical: '/homelab' },
  openGraph: {
    type: 'article',
    url: '/homelab',
    title: 'Homelab',
    description,
  },
};

const HomelabPage: React.FC = (): React.JSX.Element => {
  return (
    <div className='flex flex-1 justify-center px-6 py-16'>
      <div className='stagger flex w-full max-w-3xl flex-col gap-4'>
        <HomelabHero />
        <LayersSection />
        <DecisionsSection />
        <ServicesSection />
      </div>
    </div>
  );
};

export default HomelabPage;
