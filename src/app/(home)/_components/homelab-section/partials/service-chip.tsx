import Image from 'next/image';
import React from 'react';

interface ServiceChipProps {
  name: string;
  logo?: string;
}

const ServiceChip: React.FC<ServiceChipProps> = ({
  name,
  logo,
}): React.JSX.Element => {
  return (
    <span className='glass-pill inline-flex items-center gap-1.5 rounded-full py-1 pr-2.5 pl-1.5 text-xs'>
      {logo ? (
        <Image
          src={logo}
          alt=''
          width={16}
          height={16}
          unoptimized
          className='size-4 rounded-[3px]'
        />
      ) : null}
      {name}
    </span>
  );
};

export default ServiceChip;
