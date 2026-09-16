import Image from 'next/image';
import React from 'react';

import { site } from '@/lib/site';

const OutsideWorkSection: React.FC = (): React.JSX.Element => {
  return (
    <section className='section-panel flex flex-col gap-7 px-8 pt-7 pb-8 sm:flex-row sm:items-start sm:gap-10'>
      <div className='min-w-0 flex-1'>
        <h2 className='type-heading'>Outside work</h2>

        <p className='mt-5 max-w-[70ch] type-body text-ink'>
          I watch a lot of films, mostly older ones. That is where Klaps came
          from: I kept missing screenings I would have gone to if I had known
          about them.
        </p>

        <p className='mt-3 max-w-[70ch] type-body text-ink'>
          I also started playing golf recently. Still bad at it, and still
          going back.
        </p>
      </div>

      <Image
        src='/portrait.png'
        alt={site.name}
        width={320}
        height={320}
        className='size-28 shrink-0 rounded-2xl object-cover ring-1 ring-white/12 sm:size-32'
      />
    </section>
  );
};

export default OutsideWorkSection;
