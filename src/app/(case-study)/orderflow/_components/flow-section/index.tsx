import React from 'react';

import DiagramFrame from '@/components/diagram-frame';
import SectionHeader from '@/components/section-header';

import SpecRow from '@/components/spec-row';
import { orderflowProcesses } from '@/lib/orderflow';

import QueueDiagram from './partials/queue-diagram';

const FlowSection: React.FC = (): React.JSX.Element => {
  return (
    <section className='section-panel px-8 pt-7 pb-8'>
      <SectionHeader
        title='How an order moves'
        note='The request ends as soon as the order is stored. Everything after that happens in the background, one event at a time.'
      />

      <div className='mt-5'>
        <DiagramFrame>
          <QueueDiagram />
        </DiagramFrame>
      </div>

      <ul className='mt-7 border-t border-white/10 pt-5'>
        {orderflowProcesses.map((process) => (
          <SpecRow
            key={process.name}
            name={process.name}
            role={process.role}
            stack={process.stack}
          />
        ))}
      </ul>
    </section>
  );
};

export default FlowSection;
