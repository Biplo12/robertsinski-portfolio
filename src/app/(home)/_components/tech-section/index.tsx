import React from 'react';

import { tech } from '@/lib/tech';

import TechTile from './partials/tech-tile';

const TechSection: React.FC = (): React.JSX.Element => {
  return (
    <section className='glass glass-sheen rounded-[2rem] px-8 pt-7 pb-8'>
      <h2 className='font-display text-lg font-semibold tracking-tight'>
        Tools I use
      </h2>
      <p className='mt-2 max-w-[54ch] text-sm text-foreground/60'>
        What I reach for on most projects.
      </p>

      <ul className='mt-5 grid grid-cols-2 gap-2 lg:grid-cols-3'>
        {tech.map((item) => (
          <TechTile key={item.name} item={item} />
        ))}
      </ul>
    </section>
  );
};

export default TechSection;
