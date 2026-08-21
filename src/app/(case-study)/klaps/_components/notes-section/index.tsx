import React from 'react';

import { site } from '@/lib/site';

const NotesSection: React.FC = (): React.JSX.Element => {
  return (
    <section className='glass glass-sheen rounded-[2rem] px-8 pt-7 pb-8'>
      <h2 className='font-display text-lg font-semibold tracking-tight'>
        What I would change
      </h2>

      <p className='mt-4 max-w-[62ch] leading-relaxed text-foreground/85'>
        The collector started as one script and grew into services, parsers and
        repositories while it was already running. Splitting it that way from
        the beginning would have saved a long weekend of moving code around.
      </p>

      <p className='mt-4 max-w-[62ch] leading-relaxed text-foreground/85'>
        I would also put a check on the parsers earlier. When a source changes
        its markup, the run finishes without errors and simply saves less than
        it should, which is harder to notice than a crash.
      </p>

      <p className='mt-6 max-w-[62ch] leading-relaxed text-foreground/85'>
        Happy to walk through any part of it,{' '}
        <a
          href={`mailto:${site.email}`}
          className='text-signal underline decoration-signal/50 underline-offset-4 hover:decoration-signal'
        >
          write to me
        </a>
        .
      </p>
    </section>
  );
};

export default NotesSection;
