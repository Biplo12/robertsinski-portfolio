import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

import LogoTile from '@/components/logo-tile';

const KlapsHero: React.FC = (): React.JSX.Element => {
  return (
    <article className='glass glass-sheen rounded-[2rem] px-8 pt-7 pb-8'>
      <Link
        href='/'
        className='inline-flex items-center gap-1.5 type-meta text-ink-muted transition-colors hover:text-foreground'
      >
        <ArrowLeft aria-hidden className='size-3' />
        Back
      </Link>

      <div className='mt-5 flex items-center gap-3'>
        <LogoTile src='/klaps.svg' name='Klaps' bleed />
        <h1 className='type-title'>
          Klaps
        </h1>
      </div>

      <p className='mt-5 max-w-[62ch] type-body text-ink'>
        Klaps shows where and when older films are playing in Polish cinemas.
        These screenings sit on the websites of single cinemas, each one in a
        different format, often only a week ahead, so finding them means
        checking a dozen places by hand.
      </p>

      <p className='mt-3 max-w-[62ch] type-body text-ink'>
        It runs as six services: the site, the API that owns the data, a
        collector, a social bot, an admin panel and a mailer for cinemas. I
        built all of them.
      </p>

      <div className='mt-7 flex flex-wrap items-center gap-2'>
        <a
          href='https://klaps.space'
          target='_blank'
          rel='noreferrer'
          className='inline-flex h-10 items-center gap-2 rounded-full bg-foreground px-4 type-body font-medium text-background transition-transform hover:-translate-y-0.5'
        >
          Visit klaps.space
          <ArrowUpRight aria-hidden className='size-3.5' />
        </a>
        <a
          href='https://github.com/klaps-hq'
          target='_blank'
          rel='noreferrer'
          className='glass-pill inline-flex h-10 items-center gap-2 rounded-full px-4 type-body'
        >
          github.com/klaps-hq
          <ArrowUpRight aria-hidden className='size-3.5' />
        </a>
      </div>
    </article>
  );
};

export default KlapsHero;
