import React from 'react';

import NumberedRow from '@/components/numbered-row';
import { orderflowPatterns } from '@/lib/orderflow';

const PatternsSection: React.FC = (): React.JSX.Element => {
  return (
    <section className='glass glass-sheen rounded-[2rem] px-8 pt-7 pb-8'>
      <h2 className='font-display text-lg font-semibold tracking-tight'>
        What keeps it correct
      </h2>
      <p className='mt-2 max-w-[62ch] text-sm leading-relaxed text-foreground/70'>
        Five guarantees. Each one is there because of a specific way the flow
        can break.
      </p>

      <ul className='mt-6'>
        {orderflowPatterns.map((pattern, index) => (
          <NumberedRow
            key={pattern.title}
            index={index}
            title={pattern.title}
            body={pattern.body}
          />
        ))}
      </ul>
    </section>
  );
};

export default PatternsSection;
