import React from 'react';

import { site } from '@/lib/site';

import KlapsLogo from './partials/klaps-logo';
import LocationPill from './partials/location-pill';
import ResumeButton from './partials/resume-button';
import SocialLinks from './partials/social-links';

const HeroSection: React.FC = (): React.JSX.Element => {
  return (
    <article className='glass glass-sheen rounded-[2rem] px-8 pt-9 pb-8'>
      <h1 className='font-display text-[2.5rem] leading-[1.05] font-semibold tracking-tight'>
        <span className='font-light text-foreground/70'>hey, </span>
        Robert here.
      </h1>

      <p className='mt-5 flex flex-wrap items-center gap-2 text-sm text-foreground/70'>
        Fullstack developer
        <LocationPill />
      </p>

      <p className='mt-6 max-w-[54ch] leading-relaxed text-foreground/90'>
        I build web apps. Backend and frontend, 4 years so far.
      </p>

      <p className='mt-4 max-w-[54ch] leading-relaxed text-foreground/90'>
        Mostly TypeScript. Next.js, NestJS, Fastify, PostgreSQL, MySQL, Redis.
      </p>

      <p className='mt-4 max-w-[54ch] leading-relaxed text-foreground/90'>
        In my free time I work on{' '}
        <a
          href='https://klaps.space'
          target='_blank'
          rel='noreferrer'
          className='whitespace-nowrap underline decoration-white/25 underline-offset-4 transition-colors hover:decoration-white/60'
        >
          <KlapsLogo />
          Klaps
        </a>
        . It shows which old films play in Polish cinemas.
      </p>

      <p className='mt-6 max-w-[54ch] leading-relaxed text-foreground/90'>
        If you need something built,{' '}
        <a
          href={`mailto:${site.email}`}
          className='text-signal underline decoration-signal/50 underline-offset-4 hover:decoration-signal'
        >
          write to me
        </a>
        . I answer within a day.
      </p>

      <div className='mt-8 flex items-center gap-2'>
        <ResumeButton />
        <SocialLinks />
      </div>
    </article>
  );
};

export default HeroSection;
