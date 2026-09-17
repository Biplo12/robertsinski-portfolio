import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const ScalingLabHero: React.FC = (): React.JSX.Element => {
  return (
    <article className='section-panel px-8 pt-7 pb-8'>
      <Link
        href='/'
        className='inline-flex items-center gap-1.5 type-meta text-ink-muted transition-colors hover:text-foreground'
      >
        <ArrowLeft aria-hidden className='size-3' />
        Back
      </Link>

      <h1 className='type-title mt-5'>
        ts-api-scaling-lab
      </h1>

      <p className='mt-5 max-w-[62ch] type-body text-ink'>
        I wrote a REST API on Postgres the way the ORM docs show, over a
        database with 7.3 million rows in it. It served one request per second.
        Then I made it faster in eight steps and measured after every one.
      </p>

      <p className='mt-3 max-w-[62ch] type-body text-ink'>
        It ends at 2600 requests per second on the same desktop. Nothing here
        is a trick version written to be slow: no indexes on foreign keys,
        queries written one call per related row, default Postgres config.
        Every step is its own commit and its own page of notes.
      </p>

      <div className='mt-7'>
        <a
          href='https://github.com/Biplo12/ts-api-scaling-lab'
          target='_blank'
          rel='noreferrer'
          className='inline-flex h-10 items-center gap-2 rounded-full bg-foreground px-4 type-body font-medium text-background transition-transform hover:-translate-y-0.5'
        >
          Read the notes
          <ArrowUpRight aria-hidden className='size-3.5' />
        </a>
      </div>
    </article>
  );
};

export default ScalingLabHero;
