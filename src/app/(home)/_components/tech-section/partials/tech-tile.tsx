import React from 'react';

import type { Tech } from '@/lib/tech';

interface TechTileProps {
  item: Tech;
}

const TechTile: React.FC<TechTileProps> = ({ item }): React.JSX.Element => {
  const { name, note, color, Icon } = item;

  return (
    <li className='glass-pill flex items-center gap-3 rounded-2xl px-3 py-2.5'>
      <span
        className='flex size-8 shrink-0 items-center justify-center rounded-lg'
        style={{ backgroundColor: `${color}1f` }}
      >
        <Icon aria-hidden className='size-4' style={{ color }} />
      </span>
      <span className='min-w-0'>
        <span className='block truncate text-sm'>{name}</span>
        <span className='block truncate text-xs text-foreground/50'>
          {note}
        </span>
      </span>
    </li>
  );
};

export default TechTile;
