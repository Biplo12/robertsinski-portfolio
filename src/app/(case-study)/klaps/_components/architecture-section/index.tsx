import React from 'react';

import SpecRow from '@/components/spec-row';
import { klapsServices } from '@/lib/klaps';

import FlowDiagram from './partials/flow-diagram';

const ArchitectureSection: React.FC = (): React.JSX.Element => {
  return (
    <section className='glass glass-sheen rounded-[2rem] px-8 pt-7 pb-8'>
      <h2 className='font-display text-lg font-semibold tracking-tight'>
        How it fits together
      </h2>
      <p className='mt-2 max-w-[62ch] text-sm leading-relaxed text-foreground/60'>
        Six services, and data moves in one direction. Only the collector
        writes, only the API owns the database, everything else reads.
      </p>

      <div className='mt-5 text-foreground'>
        <FlowDiagram />
      </div>

      <ul className='mt-6'>
        {klapsServices.map((service) => (
          <SpecRow
            key={service.name}
            name={service.name}
            role={service.role}
            stack={service.stack}
            repo={service.repo}
            tag={service.tag}
          />
        ))}
      </ul>
    </section>
  );
};

export default ArchitectureSection;
