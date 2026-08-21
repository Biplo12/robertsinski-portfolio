import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const NotFound: React.FC = (): React.JSX.Element => {
  return (
    <div className='flex flex-1 items-center justify-center p-6'>
      <article className='glass glass-sheen rise w-full max-w-md rounded-[2rem] px-8 pt-8 pb-7'>
        <p className='font-mono text-xs text-foreground/60'>404</p>

        <h1 className='font-display mt-4 text-[2rem] leading-none font-semibold tracking-tight'>
          Nothing here.
        </h1>

        <p className='mt-4 leading-relaxed text-foreground/85'>
          That page does not exist, or it did and no longer does.
        </p>

        <Link
          href='/'
          className='mt-7 inline-flex h-10 items-center gap-2 rounded-full bg-foreground px-4 text-sm font-medium text-background transition-transform hover:-translate-y-0.5'
        >
          <ArrowLeft aria-hidden className='size-3.5' />
          Back to the start
        </Link>
      </article>
    </div>
  );
};

export default NotFound;
