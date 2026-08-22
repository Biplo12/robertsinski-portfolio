import React from 'react';

import SpecRow from '@/components/spec-row';
import { boardflowParts } from '@/lib/boardflow';

const SplitSection: React.FC = (): React.JSX.Element => {
  return (
    <section className='glass glass-sheen rounded-[2rem] px-8 pt-7 pb-8'>
      <h2 className='font-display text-lg font-semibold tracking-tight'>
        Where each thing lives
      </h2>
      <p className='mt-2 max-w-[62ch] text-sm leading-relaxed text-foreground/60'>
        Three layers. What goes where depends on how long it has to last.
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
