import React from 'react';

import { site } from '@/lib/site';

import PolishFlag from './partials/polish-flag';
import ResumeButton from './partials/resume-button';
import SocialLinks from './partials/social-links';

const HeroSection: React.FC = (): React.JSX.Element => {
  return (
    <div className='rise w-full max-w-md'>
      <article className='rounded-md border bg-card px-7 pt-8 pb-7'>
        <h1 className='font-display text-[2.35rem] leading-[1.08] tracking-tight'>
          <span className='font-light'>hey, </span>
          <span className='font-bold'>Robert here.</span>
        </h1>

        <p className='mt-4 flex flex-wrap items-center gap-2 text-sm text-muted-foreground'>
          Fullstack developer, Katowice
          <PolishFlag />
        </p>

        <p className='mt-6 leading-relaxed'>
          I build web apps. Backend and frontend, four years so far.
        </p>

        <p className='mt-4 leading-relaxed'>
          If you need something built,{' '}
          <a
            href={`mailto:${site.email}`}
            className='underline decoration-signal underline-offset-4 hover:decoration-foreground'
          >
            write to me
          </a>
          . I answer within a day.
        </p>

        <div className='mt-7 flex items-center gap-2 border-t pt-5'>
          <ResumeButton />
          <SocialLinks />
        </div>
      </article>
    </div>
  );
};

export default HeroSection;
