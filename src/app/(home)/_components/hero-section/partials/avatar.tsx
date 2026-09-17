import React from 'react';

import Image from 'next/image';

import { site } from '@/lib/site';

const Avatar: React.FC = (): React.JSX.Element => {
  return (
    <Image
      src='/avatar.png'
      alt={site.name}
      width={128}
      height={128}
      priority
      className='relative size-[34px] rounded-full object-cover ring-1 ring-white/30'
    />
  );
};

export default Avatar;
