import React from 'react';

import SectionHeader from '@/components/section-header';

import NumberedRow from '@/components/numbered-row';
import { orderflowPatterns } from '@/lib/orderflow';

const PatternsSection: React.FC = (): React.JSX.Element => {
  return (
    <section className='section-panel grid gap-x-10 gap-y-6 px-8 pt-7 pb-8 sm:grid-cols-[16rem_minmax(0,1fr)]'>
      <SectionHeader
        title='What keeps it correct'
        note='Five guarantees, one for each way a step can fail.'
        stacked
      />

      <div className='min-w-0'>
      <ul className='mt-5'>
        {orderflowPatterns.map((pattern, index) => (
          <NumberedRow
            key={pattern.title}
            index={index}
            title={pattern.title}
            body={pattern.body}
          />
        ))}
      </ul>
      </div>
    </section>
  );
};

export default PatternsSection;
