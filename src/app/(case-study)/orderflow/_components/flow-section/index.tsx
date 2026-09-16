import React from 'react';

import SpecRow from '@/components/spec-row';
import { orderflowProcesses } from '@/lib/orderflow';

import QueueDiagram from './partials/queue-diagram';

const FlowSection: React.FC = (): React.JSX.Element => {
  return (
    <section className='section-panel px-8 pt-7 pb-8'>
      <h2 className='type-heading'>
        How an order moves
      </h2>
      <p className='mt-2 max-w-[62ch] type-body text-ink-muted'>
        The request ends as soon as the order is stored. Everything after that
        happens in the background, one event at a time.
      </p>

      <div className='mt-5 text-foreground'>
        <QueueDiagram />
      </div>

      <ul className='mt-5'>
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
