import React from 'react';

import { site } from '@/lib/site';

import ContactButton from './partials/contact-button';
import LocationPill from './partials/location-pill';
import ResumeButton from './partials/resume-button';
import SatinBackdrop from './partials/satin-backdrop';
import SocialLinks from './partials/social-links';

const HeroSection: React.FC = (): React.JSX.Element => {
  return (
    <section className='w-full'>
      <article className='on-cloth stack-base relative isolate w-full overflow-hidden rounded-[2.25rem] px-7 py-11 shadow-[0_28px_70px_-30px_rgb(19_76_122/0.85),0_60px_140px_-50px_rgb(19_76_122/0.6)] sm:rounded-[74px] sm:px-14 sm:py-14'>
        <SatinBackdrop />

        <p className='type-lead flex flex-wrap items-center gap-2.5 text-ink-strong'>
          Fullstack developer
          <LocationPill />
        </p>

        <h1 className='type-display text-ink-strong'>
          <span className='text-ink-faint'>hey, </span>
          Robert here.
        </h1>

        <p className='type-lead max-w-[46ch] text-ink'>
          I build web apps end to end, backend and frontend. 4 years so far.
        </p>

        <div className='stack-snug type-body max-w-[56ch] text-ink-muted'>
          <p>
            Right now at Hurtopony: the company store and the internal panels
            around it, the NestJS service behind them, and the Playwright
            scrapers that keep over a million records current.
          </p>

          <p>
            Mostly TypeScript, Next.js, NestJS, Fastify, PostgreSQL, MySQL,
            Redis.
          </p>
        </div>

        <div className='flex flex-wrap items-center gap-3'>
          <ContactButton />
          <ResumeButton />

          <span className='ml-1 flex items-center gap-2'>
            <SocialLinks />
          </span>
        </div>

        <p className='type-meta flex flex-wrap items-center gap-x-2 gap-y-1 text-ink-muted'>
          {site.availability ? (
            <span className='inline-flex items-center gap-2 text-ink'>
              <span
                aria-hidden
                className='size-1.5 rounded-full bg-emerald-400 shadow-[0_0_0_3px_rgb(52_211_153/0.2)]'
              />
              {site.availability}.
            </span>
          ) : null}
          Write to me and I answer within a day.
        </p>
      </article>
    </section>
  );
};

export default HeroSection;
