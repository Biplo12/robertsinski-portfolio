import Image from 'next/image';
import React from 'react';

import { site } from '@/lib/site';

const Portrait: React.FC = (): React.JSX.Element => {
  return (
    <Image
      src='/portrait.png'
      alt={site.name}
      width={320}
      height={320}
      priority
      className='size-[9.5rem] shrink-0 rounded-[1.75rem] object-cover shadow-[0_18px_40px_-16px_rgb(2_16_40/0.75)] ring-1 ring-white/25 lg:size-[11.5rem]'
    />
  );
};

export default Portrait;
