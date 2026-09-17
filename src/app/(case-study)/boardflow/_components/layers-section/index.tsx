import React from 'react';

import DiagramFrame from '@/components/diagram-frame';
import SectionHeader from '@/components/section-header';
import SpecRow from '@/components/spec-row';

import { boardflowParts } from '@/lib/boardflow';

import LayersDiagram from './partials/layers-diagram';

const LayersSection: React.FC = (): React.JSX.Element => {
  return (
    <section className='section-panel px-8 pt-7 pb-8'>
      <SectionHeader
        title='Where each thing lives'
        note='One canvas, two stores. What goes where depends on how long it has to last.'
      />

      <div className='mt-5'>
        <DiagramFrame>
          <LayersDiagram />
        </DiagramFrame>
      </div>

      <div className='min-w-0'>
        <ul className='mt-7 border-t border-white/10 pt-5'>
          {boardflowParts.map((part) => (
            <SpecRow
              key={part.name}
              name={part.name}
              role={part.role}
              stack={part.stack}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default LayersSection;
