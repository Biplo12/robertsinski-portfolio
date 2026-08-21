import Image from 'next/image';
import React from 'react';

interface LogoTileProps {
  src: string;
  name: string;
  small?: boolean;
  bleed?: boolean;
}

const LogoTile: React.FC<LogoTileProps> = ({
  src,
  name,
  small,
  bleed,
}): React.JSX.Element => {
  const size = small ? 'size-5' : 'size-10';
  const shape = small ? 'rounded-md' : 'rounded-xl';
  const surface = bleed ? '' : 'bg-white ring-1 ring-black/10';
  const inset = bleed ? '' : small ? 'p-0.5' : 'p-1';

  return (
    <span
      className={`flex ${size} shrink-0 items-center justify-center overflow-hidden ${shape} ${surface} ${inset}`}
    >
      <Image
        src={src}
        alt={`${name} logo`}
        width={small ? 20 : 40}
        height={small ? 20 : 40}
        className={
          bleed
            ? 'size-full object-cover'
            : 'h-auto max-h-full w-auto max-w-full object-contain'
        }
      />
    </span>
  );
};

export default LogoTile;
