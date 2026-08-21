import React from 'react';

import SpecRow from '@/components/spec-row';
import { boardflowParts } from '@/lib/boardflow';

const SplitSection: React.FC = (): React.JSX.Element => {
  return (
    <section className='glass glass-sheen rounded-[2rem] px-8 pt-7 pb-8'>
      <h2 className='font-display text-lg font-semibold tracking-tight'>
        Where each thing lives
      </h2>
      <p className='mt-2 max-w-[62ch] text-sm leading-relaxed text-foreground/70'>
        Three layers, split by how long the data has to last: milliseconds,
        the length of a session, or forever.
      </p>

      <ul className='mt-6'>
        {boardflowParts.map((part) => (
          <SpecRow
            key={part.name}
            name={part.name}
            role={part.role}
            stack={part.stack}
          />
        ))}
      </ul>
    </section>
  );
};

export default SplitSection;
