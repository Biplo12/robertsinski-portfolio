import React from 'react';

import type { Tech } from '@/lib/tech';

interface TechTileProps {
  item: Tech;
}

const TechTile: React.FC<TechTileProps> = ({ item }): React.JSX.Element => {
  const { name, note, color, Icon } = item;

  return (
    <li className='glass-pill flex items-center gap-2.5 rounded-2xl px-2.5 py-2.5 sm:gap-3 sm:px-3'>
      <span
        className='flex size-8 shrink-0 items-center justify-center rounded-lg'
        style={{ backgroundColor: `${color}1f` }}
      >
        <Icon aria-hidden className='size-4' style={{ color }} />
      </span>
      <span className='min-w-0'>
        <span className='block text-[0.8125rem] leading-tight sm:text-sm'>
          {name}
        </span>
        <span className='mt-0.5 block text-xs leading-tight text-foreground/60'>
          {note}
        </span>
      </span>
    </li>
  );
};

export default TechTile;
