import React from 'react';

import SectionHeader from '@/components/section-header';
import { tech } from '@/lib/tech';

import TechTile from './partials/tech-tile';

const TechSection: React.FC = (): React.JSX.Element => {
  return (
    <section id='tools' className='section-panel scroll-mt-24 px-8 pt-7 pb-8'>
      <SectionHeader
        title='Tools I use'
        note='What I reach for on most projects.'
      />

      <ul className='mt-7 grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-3 lg:grid-cols-4'>
        {tech.map((item) => (
          <TechTile key={item.name} item={item} />
        ))}
      </ul>
    </section>
  );
};

export default TechSection;
