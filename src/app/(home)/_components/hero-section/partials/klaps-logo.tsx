import Image from 'next/image';
import React from 'react';

const KlapsLogo: React.FC = (): React.JSX.Element => {
  return (
    <Image
      src='/klaps.svg'
      alt=''
      width={16}
      height={16}
      className='mr-1 inline-block align-[-0.16em] rounded-[3px] ring-1 ring-white/15'
    />
  );
};

export default KlapsLogo;
