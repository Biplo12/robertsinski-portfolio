import React from 'react';

import { ImageResponse } from 'next/og';
import { join } from 'node:path';
import { readFile } from 'node:fs/promises';

import { site } from '@/lib/site';

export const alt = `${site.name}, fullstack developer`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const asset = (...parts: string[]): string => join(process.cwd(), ...parts);

/* The card is the hero: same cloth, same display face, same opening line, so a
   shared link and the page behind it read as one thing. Satori cannot reach
   next/font, so Bricolage is loaded from disk. */
const Image = async (): Promise<ImageResponse> => {
  const [cloth, display, displayBold] = await Promise.all([
    readFile(asset('public', 'satin.png')),
    readFile(asset('src', 'app', '_fonts', 'bricolage-600.ttf')),
    readFile(asset('src', 'app', '_fonts', 'bricolage-800.ttf')),
  ]);

  const clothSrc = `data:image/png;base64,${cloth.toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          background: '#000',
        }}
      >
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: 96,
            boxSizing: 'border-box',
            backgroundImage: `url(${clothSrc})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div
              style={{
                fontSize: 24,
                fontFamily: 'Bricolage',
                color: 'rgba(255,255,255,0.8)',
              }}
            >
              {`Fullstack developer · ${site.location}`}
            </div>

            <div
              style={{
                display: 'flex',
                fontSize: 76,
                fontFamily: 'Bricolage Bold',
                letterSpacing: -3,
                marginTop: 14,
              }}
            >
              <span style={{ color: 'rgba(255,255,255,0.5)' }}>hey,&nbsp;</span>
              <span style={{ color: '#fff' }}>Robert here.</span>
            </div>

            <div
              style={{
                fontSize: 28,
                fontFamily: 'Bricolage',
                color: 'rgba(255,255,255,0.92)',
                marginTop: 22,
                maxWidth: 720,
              }}
            >
              {'I build web apps and the services behind them. Four years so far.'}
            </div>

          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'Bricolage', data: display, weight: 600, style: 'normal' },
        {
          name: 'Bricolage Bold',
          data: displayBold,
          weight: 800,
          style: 'normal',
        },
      ],
    },
  );
};

export default Image;
