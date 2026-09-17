import React from 'react';

import Link from 'next/link';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';

import FactBand from '@/components/fact-band';
import LogoTile from '@/components/logo-tile';
import ProjectShot from '@/components/project-shot';

import { boardflowFacts } from '@/lib/boardflow';

const BoardflowHero: React.FC = (): React.JSX.Element => {
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
        <LogoTile src='/logos/boardflow-mark.svg' name='BoardFlow' />
        <h1 className='type-title'>
          BoardFlow
        </h1>
      </div>

      <p className='mt-5 max-w-[58ch] type-lead text-ink'>
        A whiteboard several people draw on at once. Shapes, notes, text,
        images and freehand strokes, with everyone&rsquo;s cursor on the canvas
        and changes landing as they happen.
      </p>

      <div className='mt-7 flex flex-wrap items-center gap-2'>
        <a
          href='https://board-flow.vercel.app/'
          target='_blank'
          rel='noreferrer'
          className='inline-flex h-10 items-center gap-2 rounded-full bg-foreground px-4 type-body font-medium text-background transition-transform hover:-translate-y-0.5'
        >
          Open the board
          <ArrowUpRight aria-hidden className='size-3.5' />
        </a>
        <a
          href='https://github.com/Biplo12/BoardFlow'
          target='_blank'
          rel='noreferrer'
          className='glass-pill inline-flex h-10 items-center gap-2 rounded-full px-4 type-body'
        >
          github.com/Biplo12/BoardFlow
          <ArrowUpRight aria-hidden className='size-3.5' />
        </a>
      </div>

      <div className='mt-9 border-t border-white/10 pt-7'>
        <FactBand facts={boardflowFacts} />
      </div>

      <ProjectShot
        src='/shots/boardflow-canvas.jpg'
        alt='A BoardFlow board: the toolbar, the style panel, a drawn diagram and a cursor labelled with a name'
        width={1720}
        height={930}
      />
    </article>
  );
};

export default BoardflowHero;
