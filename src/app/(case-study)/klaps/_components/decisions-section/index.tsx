import React from 'react';

import NumberedRow from '@/components/numbered-row';
import { klapsDecisions } from '@/lib/klaps';

const DecisionsSection: React.FC = (): React.JSX.Element => {
  return (
    <section className='glass glass-sheen rounded-[2rem] px-8 pt-7 pb-8'>
      <h2 className='type-heading'>
        Decisions
      </h2>
      <p className='mt-2 max-w-[62ch] type-body text-ink-muted'>
        Five choices that shaped the rest of the project.
      </p>

      <ul className='mt-5'>
        {klapsDecisions.map((decision, index) => (
          <NumberedRow
            key={decision.title}
            index={index}
            title={decision.title}
            body={decision.body}
          />
        ))}
      </ul>
    </section>
  );
};

export default DecisionsSection;
