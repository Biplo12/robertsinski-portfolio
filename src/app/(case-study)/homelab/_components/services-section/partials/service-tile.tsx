import Image from 'next/image';
import React from 'react';

import type { HomelabService } from '@/lib/homelab';

interface ServiceTileProps {
  item: HomelabService;
}

const ServiceTile: React.FC<ServiceTileProps> = ({
  item,
}): React.JSX.Element => {
  const { name, color, logo } = item;

  return (
    <li className='glass-pill flex items-center gap-2.5 rounded-2xl px-2.5 py-2.5 sm:gap-3 sm:px-3'>
      <span
        className='flex size-8 shrink-0 items-center justify-center rounded-lg'
        style={{ backgroundColor: `${color}1f` }}
      >
        <Image
          src={logo}
          alt=''
          width={20}
          height={20}
          unoptimized
          className='size-4.5'
        />
      </span>
      <span className='min-w-0 text-sm leading-tight'>{name}</span>
    </li>
  );
};

export default ServiceTile;
