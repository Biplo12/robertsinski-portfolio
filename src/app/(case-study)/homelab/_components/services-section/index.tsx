import React from 'react';

import { homelabGroups } from '@/lib/homelab';

import ServiceTile from './partials/service-tile';

const ServicesSection: React.FC = (): React.JSX.Element => {
  return (
    <section className='glass glass-sheen rounded-[2rem] px-8 pt-7 pb-8'>
      <h2 className='font-display text-lg font-semibold tracking-tight'>
        What runs on it
      </h2>
      <p className='mt-2 max-w-[62ch] text-sm leading-relaxed text-foreground/60'>
        Grouped by what each part is for.
      </p>

      <div className='mt-5 space-y-5'>
        {homelabGroups.map((group) => (
          <div key={group.label}>
            <h3 className='text-xs text-foreground/60'>{group.label}</h3>

            <ul className='mt-2 grid grid-cols-2 gap-2 lg:grid-cols-3'>
              {group.items.map((item) => (
                <ServiceTile key={item.name} item={item} />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
