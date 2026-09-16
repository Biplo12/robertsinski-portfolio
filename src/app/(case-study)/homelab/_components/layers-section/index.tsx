import React from 'react';

import LayerDiagram from './partials/layer-diagram';

const LayersSection: React.FC = (): React.JSX.Element => {
  return (
    <section className='glass glass-sheen rounded-[2rem] px-8 pt-7 pb-8'>
      <h2 className='type-heading'>
        How it is put together
      </h2>
      <p className='mt-2 max-w-[62ch] type-body leading-relaxed text-ink-muted'>
        Two ways in from outside, and what sits under the services.
      </p>

      <div className='mt-5 text-foreground'>
        <LayerDiagram />
      </div>
    </section>
  );
};

export default LayersSection;
