import React from 'react';

import Link from 'next/link';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';

import FactBand from '@/components/fact-band';
import LogoTile from '@/components/logo-tile';
import ProjectClip from '@/components/project-clip';

import { klapsFacts } from '@/lib/klaps';

const KlapsHero: React.FC = (): React.JSX.Element => {
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
        <LogoTile src='/klaps.svg' name='Klaps' bleed />
        <h1 className='type-title'>
          Klaps
        </h1>
      </div>

      <p className='mt-5 max-w-[58ch] type-lead text-ink'>
        Older films play in Polish cinemas every day, but each screening only
        exists on the cinema&rsquo;s own site, in the cinema&rsquo;s own format.
        Finding one means checking a dozen places by hand. Klaps checks them
        instead.
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

      <div className='mt-9 border-t border-white/10 pt-7'>
        <FactBand facts={klapsFacts} />
      </div>

      <ProjectClip
        src='/shots/klaps-demo.webm'
        poster='/shots/klaps-landing.jpg'
        label='klaps.space loading its front page and scrolling into the listing'
        width={1260}
        height={760}
      />
    </article>
  );
};

export default KlapsHero;
