import React from 'react';

import type { Tech } from '@/lib/tech';

interface TechTileProps {
  item: Tech;
}

const TechTile: React.FC<TechTileProps> = ({ item }): React.JSX.Element => {
  const { name, note, color, Icon } = item;

  return (
    /* No box here: the projects above already carry cards, so the toolbox
       stays as plain rows and lets the icons do the separating. */
    <li className='flex items-center gap-3'>
      <span
        className='flex size-9 shrink-0 items-center justify-center rounded-lg'
        style={{ backgroundColor: `${color}1f` }}
      >
        <Icon aria-hidden className='size-4' style={{ color }} />
      </span>

      <span className='min-w-0'>
        <span className='block type-body font-medium text-ink'>{name}</span>
        <span className='block type-meta text-ink-faint'>{note}</span>
      </span>
    </li>
  );
};

export default TechTile;
