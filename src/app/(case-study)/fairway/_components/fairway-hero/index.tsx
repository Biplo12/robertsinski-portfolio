import React from 'react';

import Link from 'next/link';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';

import FactBand from '@/components/fact-band';
import LogoTile from '@/components/logo-tile';

import { fairwayFacts } from '@/lib/fairway';

const FairwayHero: React.FC = (): React.JSX.Element => {
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
        <LogoTile src='/logos/fairway.png' name='FAIRWAY' />
        <h1 className='type-title'>FAIRWAY</h1>
      </div>

      <p className='mt-5 max-w-[58ch] type-lead text-ink'>
        A golf shop near St Andrews that I made up so I could build the whole
        storefront for it. It does not make clubs, it picks them, and
        everything on the site is written that way.
      </p>

      <div className='mt-7 flex flex-wrap items-center gap-2'>
        <a
          href='https://fairway-roan-delta.vercel.app'
          target='_blank'
          rel='noreferrer'
          className='inline-flex h-10 items-center gap-2 rounded-full bg-foreground px-4 type-body font-medium text-background transition-transform hover:-translate-y-0.5'
        >
          Open the shop
          <ArrowUpRight aria-hidden className='size-3.5' />
        </a>
        <span className='glass-pill inline-flex h-10 items-center rounded-full px-4 type-body text-ink-muted'>
          Repository is private
        </span>
      </div>

      <div className='mt-9 border-t border-white/10 pt-7'>
        <FactBand facts={fairwayFacts} />
      </div>
    </article>
  );
};

export default FairwayHero;
