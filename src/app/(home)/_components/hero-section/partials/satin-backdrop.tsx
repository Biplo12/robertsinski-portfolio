import React from 'react';

import Image from 'next/image';

import GrainOverlay from './grain-overlay';
import PointerSheen from './pointer-sheen';

/**
 * The folded blue cloth behind the headline. The folds are a generated image
 * rather than CSS: displaced gradients marble and SVG lighting filters band,
 * because their height map is only 8 bits. See satin/build.mjs.
 *
 * The lit hairline around the card is a masked gradient border rather than an
 * inset copy of the cloth: nesting a rounded box one pixel inside another of
 * the same radius leaves the curve visibly stepped.
 */
const SatinBackdrop: React.FC = (): React.JSX.Element => {
  return (
    <div
      aria-hidden
      className='satin absolute inset-0 -z-10 overflow-hidden rounded-[inherit]'
    >
      <Image
        src='/satin.png'
        alt=''
        fill
        priority
        sizes='(max-width: 1080px) 100vw, 1080px'
        className='rounded-[inherit] object-cover'
      />
      <div className='satin-glow absolute inset-0' />
      <div className='card-edge' />
      <PointerSheen />
      <div className='absolute inset-0 opacity-25 mix-blend-overlay'>
        <GrainOverlay />
      </div>
    </div>
  );
};

export default SatinBackdrop;
