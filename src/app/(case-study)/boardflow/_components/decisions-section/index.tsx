import React from 'react';

import NumberedRow from '@/components/numbered-row';
import SectionHeader from '@/components/section-header';

import { boardflowDecisions } from '@/lib/boardflow';

const DecisionsSection: React.FC = (): React.JSX.Element => {
  return (
    <section className='section-panel grid gap-x-10 gap-y-6 px-8 pt-7 pb-8 sm:grid-cols-[16rem_minmax(0,1fr)]'>
      <SectionHeader
        title='Decisions'
        note='Three choices that shaped the rest of the project.'
        stacked
      />

      <div className='min-w-0'>
        <ul className='mt-5'>
          {boardflowDecisions.map((decision, index) => (
            <NumberedRow
              key={decision.title}
              index={index}
              title={decision.title}
              body={decision.body}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default DecisionsSection;
