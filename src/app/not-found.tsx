import React from 'react';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const NotFound: React.FC = (): React.JSX.Element => {
  return (
    <div className='flex flex-1 items-center justify-center p-6'>
      <article className='glass glass-sheen rise w-full max-w-md rounded-[2rem] px-8 pt-8 pb-7'>
        <p className='font-mono type-meta text-ink-muted'>404</p>

        <h1 className='type-title mt-5'>
          Nothing here.
        </h1>

        <p className='mt-5 text-ink'>
          That page does not exist.
        </p>

        <Link
          href='/'
          className='mt-7 inline-flex h-10 items-center gap-2 rounded-full bg-foreground px-4 type-body font-medium text-background transition-transform hover:-translate-y-0.5'
        >
          <ArrowLeft aria-hidden className='size-3.5' />
          Back to the start
        </Link>
      </article>
    </div>
  );
};

export default NotFound;
