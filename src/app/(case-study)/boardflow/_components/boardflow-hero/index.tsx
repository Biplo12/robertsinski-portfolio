import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

import LogoTile from '@/components/logo-tile';

const BoardflowHero: React.FC = (): React.JSX.Element => {
  return (
    <article className='glass glass-sheen rounded-[2rem] px-8 pt-7 pb-8'>
      <Link
        href='/'
        className='inline-flex items-center gap-1.5 text-xs text-foreground/60 transition-colors hover:text-foreground'
      >
        <ArrowLeft aria-hidden className='size-3' />
        Back
      </Link>

      <div className='mt-6 flex items-center gap-3'>
        <LogoTile src='/logos/boardflow-mark.png' name='BoardFlow' />
        <h1 className='font-display text-[2rem] leading-none font-semibold tracking-tight'>
          BoardFlow
        </h1>
      </div>

      <p className='mt-5 max-w-[62ch] leading-relaxed text-foreground/85'>
        A whiteboard several people draw on at the same time. Shapes, notes,
        text, images and freehand strokes, with cursors moving around and
        changes showing up as they happen.
      </p>

      <p className='mt-4 max-w-[62ch] leading-relaxed text-foreground/85'>
        Boards live inside organisations you can invite people to. Anything on
        a board can be selected, resized, deleted or moved between layers, and
        the whole board has undo and redo.
      </p>

      <div className='mt-7 flex flex-wrap items-center gap-2'>
        <a
          href='https://board-flow.vercel.app/'
          target='_blank'
          rel='noreferrer'
          className='inline-flex h-10 items-center gap-2 rounded-full bg-foreground px-4 text-sm font-medium text-background transition-transform hover:-translate-y-0.5'
        >
          Open the board
          <ArrowUpRight aria-hidden className='size-3.5' />
        </a>
        <a
          href='https://github.com/Biplo12/BoardFlow'
          target='_blank'
          rel='noreferrer'
          className='glass-pill inline-flex h-10 items-center gap-2 rounded-full px-4 text-sm'
        >
          github.com/Biplo12/BoardFlow
          <ArrowUpRight aria-hidden className='size-3.5' />
        </a>
      </div>
    </article>
  );
};

export default BoardflowHero;
