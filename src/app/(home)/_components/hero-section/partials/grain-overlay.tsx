import React from 'react';

/**
 * Film grain. Drawn at device scale rather than tiled from a background image,
 * so the speckle stays one pixel wide instead of turning into soft mush. The
 * noise has to land in RGB and not in alpha: blended with overlay, a flat 50%
 * grey is a no-op, so only a varying grey actually shows up.
 */
const GrainOverlay: React.FC = (): React.JSX.Element => {
  return (
    <svg aria-hidden className='absolute inset-0 size-full'>
      <filter id='hero-grain' colorInterpolationFilters='sRGB'>
        <feTurbulence
          type='fractalNoise'
          baseFrequency='0.85'
          numOctaves='4'
          stitchTiles='stitch'
          result='noise'
        />
        <feColorMatrix
          in='noise'
          type='matrix'
          values='0.33 0.33 0.33 0 0
                  0.33 0.33 0.33 0 0
                  0.33 0.33 0.33 0 0
                  0    0    0    0 1'
          result='grey'
        />
        <feComponentTransfer in='grey'>
          <feFuncR type='linear' slope='1.35' intercept='-0.18' />
          <feFuncG type='linear' slope='1.35' intercept='-0.18' />
          <feFuncB type='linear' slope='1.35' intercept='-0.18' />
        </feComponentTransfer>
      </filter>
      <rect width='100%' height='100%' filter='url(#hero-grain)' />
    </svg>
  );
};

export default GrainOverlay;
