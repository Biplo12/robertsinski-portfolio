import React from 'react';

import SectionHeader from '@/components/section-header';

import { scalingMethod } from '@/lib/scaling-lab';

const MethodSection: React.FC = (): React.JSX.Element => {
  return (
    <section className='section-panel grid gap-x-10 gap-y-6 px-8 pt-7 pb-8 sm:grid-cols-[16rem_minmax(0,1fr)]'>
      <SectionHeader
        title='How it was measured'
        note='A number is worth what the setup behind it is worth, so here is the setup.'
        stacked
      />

      <dl className='mt-5 min-w-0'>
        {scalingMethod.map((fact) => (
          <div
            key={fact.label}
            className='grid gap-x-6 gap-y-1 border-t border-white/10 py-4 first:border-t-0 first:pt-0 last:pb-0 sm:grid-cols-[11rem_minmax(0,1fr)]'
          >
            <dt className='type-meta text-ink-faint'>{fact.label}</dt>
            <dd className='max-w-[62ch] type-body text-ink-muted'>
              {fact.body}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
};

export default MethodSection;
