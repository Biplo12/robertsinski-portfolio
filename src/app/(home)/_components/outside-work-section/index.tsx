import React from 'react';

import SectionHeader from '@/components/section-header';

const OutsideWorkSection: React.FC = (): React.JSX.Element => {
  return (
    <section className='section-panel grid gap-x-10 gap-y-6 px-8 pt-7 pb-8 sm:grid-cols-[16rem_minmax(0,1fr)]'>
      <SectionHeader
        title='Outside work'
        note='Films, and lately golf.'
        stacked
      />

      <div className='min-w-0'>
        <p className='type-body text-ink-muted'>
          I watch a lot of films, mostly older ones. That is where Klaps came
          from: I kept missing screenings I would have gone to if I had known
          about them.
        </p>

        <p className='mt-3 type-body text-ink-muted'>
          I also started playing golf recently. Still bad at it, and still going
          back.
        </p>
      </div>
    </section>
  );
};

export default OutsideWorkSection;
