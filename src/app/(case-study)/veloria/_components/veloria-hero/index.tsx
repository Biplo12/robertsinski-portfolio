import React from 'react';

import Link from 'next/link';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';

import FactBand from '@/components/fact-band';
import LogoTile from '@/components/logo-tile';

import { veloriaFacts } from '@/lib/veloria';

const VeloriaHero: React.FC = (): React.JSX.Element => {
  return (
    <article className='section-panel px-8 pt-7 pb-8'>
      <Link
        href='/'
        className='inline-flex items-center gap-1.5 type-meta text-ink-muted transition-colors hover:text-foreground'
      >
        <ArrowLeft aria-hidden className='size-3' />
        Back
      </Link>

      <div className='mt-5 flex items-center gap-3'>
        <LogoTile src='/logos/veloria.png' name='Veloria' bleed />
        <h1 className='type-title'>Veloria Estate Winery</h1>
      </div>

      <p className='mt-5 max-w-[58ch] type-lead text-ink'>
        A winery in the hills south of Siena that does not exist. I built the
        whole site for it so there would be one thing here that is only about
        how it looks.
      </p>

      <div className='mt-7 flex flex-wrap items-center gap-2'>
        <a
          href='https://veloria-estate-winery.vercel.app'
          target='_blank'
          rel='noreferrer'
          className='inline-flex h-10 items-center gap-2 rounded-full bg-foreground px-4 type-body font-medium text-background transition-transform hover:-translate-y-0.5'
        >
          Open the site
          <ArrowUpRight aria-hidden className='size-3.5' />
        </a>
        <a
          href='https://github.com/Biplo12/veloria-estate-winery'
          target='_blank'
          rel='noreferrer'
          className='glass-pill inline-flex h-10 items-center gap-2 rounded-full px-4 type-body'
        >
          github.com/Biplo12/veloria-estate-winery
          <ArrowUpRight aria-hidden className='size-3.5' />
        </a>
      </div>

      <div className='mt-9 border-t border-white/10 pt-7'>
        <FactBand facts={veloriaFacts} />
      </div>
    </article>
  );
};

export default VeloriaHero;
