import React from 'react';

import SectionHeader from '@/components/section-header';

import SpecRow from '@/components/spec-row';
import { klapsServices } from '@/lib/klaps';

import FlowDiagram from './partials/flow-diagram';

const ArchitectureSection: React.FC = (): React.JSX.Element => {
  return (
    <section className='section-panel px-8 pt-7 pb-8'>
      <SectionHeader
        title='How it fits together'
        note='Six services, and data moves in one direction. Only the collector writes, only the API owns the database, everything else reads.'
      />

      <div className='mt-5 text-foreground'>
        <FlowDiagram />
      </div>

      <ul className='mt-5'>
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
