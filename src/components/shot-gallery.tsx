import React from 'react';

import Image from 'next/image';

export interface Shot {
  src: string;
  alt: string;
  caption: string;
}

interface ShotGalleryProps {
  shots: Shot[];
}

/** Screens with a line under each. On a design piece the pictures are the argument. */
const ShotGallery: React.FC<ShotGalleryProps> = ({
  shots,
}): React.JSX.Element => {
  return (
    <div className='mt-6 flex flex-col gap-8'>
      {shots.map((shot) => (
        <figure
          key={shot.src}
          className='rounded-2xl border border-white/8 bg-white/2 p-2.5'
        >
          <Image
            src={shot.src}
            alt={shot.alt}
            width={1600}
            height={1125}
            sizes='(max-width: 1080px) 100vw, 1010px'
            className='block h-auto w-full rounded-xl'
          />

          <figcaption className='px-2 pt-4 pb-1 type-meta text-ink-faint'>
            {shot.caption}
          </figcaption>
        </figure>
      ))}
    </div>
  );
};

export default ShotGallery;
