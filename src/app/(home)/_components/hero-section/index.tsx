import React from 'react';


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
          I build web apps, backend and frontend. Four years so far.
        </p>

        <div className='stack-snug type-body max-w-[56ch] text-ink-muted'>
          <p>
            Right now I am at Hurtopony. I work on the company store, the
            panels the team uses to run it, and the scrapers that keep over a
            million records up to date.
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

        <p className='type-meta text-ink-muted'>
          Write to me and I answer within a day.
        </p>
      </article>
    </section>
  );
};

export default HeroSection;
