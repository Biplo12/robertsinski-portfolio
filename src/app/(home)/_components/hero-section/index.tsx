import React from 'react';

import { site } from '@/lib/site';

import ContactButton from './partials/contact-button';
import GithubButton from './partials/github-button';
import KlapsLogo from './partials/klaps-logo';
import LocationPill from './partials/location-pill';
import ResumeButton from './partials/resume-button';
import SatinBackdrop from './partials/satin-backdrop';
import WorkButton from './partials/work-button';

const HeroSection: React.FC = (): React.JSX.Element => {
  return (
    <section className='w-full'>
      <article className='on-cloth stack-loose relative isolate w-full overflow-hidden rounded-[2.25rem] px-7 py-14 shadow-[0_40px_120px_-40px_rgb(6_40_92/0.8)] sm:rounded-[74px] sm:px-16 sm:py-20'>
        <SatinBackdrop />

        <p className='type-meta flex flex-wrap items-center gap-2 text-ink-strong'>
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
            scrapers that keep the data current.
          </p>

          <p>
            Mostly TypeScript, Next.js, NestJS, Fastify, PostgreSQL, MySQL,
            Redis.
          </p>

          <p>
            In my free time I work on{' '}
            <a
              href='https://klaps.space'
              target='_blank'
              rel='noreferrer'
              className='whitespace-nowrap text-ink-strong underline decoration-current/35 underline-offset-4 transition-colors hover:decoration-current'
            >
              <KlapsLogo />
              Klaps
            </a>
            . It shows which old films play in Polish cinemas. Six services, and
            I built all of them.
          </p>

          <p>
            If you need something built,{' '}
            <a
              href={`mailto:${site.email}`}
              className='text-ink-strong underline decoration-current/45 underline-offset-4 transition-colors hover:decoration-current'
            >
              write to me
            </a>
            . I answer within a day.
          </p>
        </div>

        <div className='flex flex-wrap items-center gap-3'>
          <ContactButton />
          <WorkButton />
          <GithubButton />
          <ResumeButton />
        </div>
      </article>
    </section>
  );
};

export default HeroSection;
