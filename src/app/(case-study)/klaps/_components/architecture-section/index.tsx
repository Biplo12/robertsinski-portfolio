import React from 'react';

import DiagramFrame from '@/components/diagram-frame';
import SectionHeader from '@/components/section-header';
import SpecRow from '@/components/spec-row';

import { klapsServices } from '@/lib/klaps';

import FlowDiagram from './partials/flow-diagram';

const ArchitectureSection: React.FC = (): React.JSX.Element => {
  return (
    <section className='section-panel px-8 pt-7 pb-8'>
      <SectionHeader
        title='How it fits together'
        note='One service owns the database and one writes to it in bulk. Everything else hangs off the API.'
      />

      <div className='mt-5'>
        <DiagramFrame>
          <FlowDiagram />
        </DiagramFrame>
      </div>

      <ul className='mt-7 border-t border-white/10 pt-5'>
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
