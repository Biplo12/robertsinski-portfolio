import React from 'react';

import NumberedRow from '@/components/numbered-row';
import SectionHeader from '@/components/section-header';

import { scalingFindings } from '@/lib/scaling-lab';

const FindingsSection: React.FC = (): React.JSX.Element => {
  return (
    <section className='section-panel grid gap-x-10 gap-y-6 px-8 pt-7 pb-8 sm:grid-cols-[16rem_minmax(0,1fr)]'>
      <SectionHeader
        title='What the numbers said'
        note='Six things I had wrong before I measured them.'
        stacked
      />

      <div className='min-w-0'>
        <ul className='mt-5'>
          {scalingFindings.map((finding, index) => (
            <NumberedRow
              key={finding.title}
              index={index}
              title={finding.title}
              body={finding.body}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FindingsSection;
