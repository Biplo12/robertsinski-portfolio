import React from 'react';

import SectionHeader from '@/components/section-header';

import SpecRow from '@/components/spec-row';
import { boardflowParts } from '@/lib/boardflow';

const SplitSection: React.FC = (): React.JSX.Element => {
  return (
    <section className='section-panel grid gap-x-10 gap-y-6 px-8 pt-7 pb-8 sm:grid-cols-[16rem_minmax(0,1fr)]'>
      <SectionHeader
        title='Where each thing lives'
        note='Three layers. What goes where depends on how long it has to last.'
        stacked
      />

      <div className='min-w-0'>
      <ul className='mt-5'>
        {boardflowParts.map((part) => (
          <SpecRow
            key={part.name}
            name={part.name}
            role={part.role}
            stack={part.stack}
          />
        ))}
      </ul>
      </div>
    </section>
  );
};

export default SplitSection;
