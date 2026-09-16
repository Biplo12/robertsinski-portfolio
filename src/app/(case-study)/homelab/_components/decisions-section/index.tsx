import React from 'react';

import NumberedRow from '@/components/numbered-row';
import { homelabDecisions } from '@/lib/homelab';

const DecisionsSection: React.FC = (): React.JSX.Element => {
  return (
    <section className='glass glass-sheen rounded-[2rem] px-8 pt-7 pb-8'>
      <h2 className='type-heading'>
        Decisions
      </h2>
      <p className='mt-2 max-w-[62ch] type-body leading-relaxed text-ink-muted'>
        Six choices and what each one protects against.
      </p>

      <ul className='mt-5'>
        {homelabDecisions.map((decision, index) => (
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
