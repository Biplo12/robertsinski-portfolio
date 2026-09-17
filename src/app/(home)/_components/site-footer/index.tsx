import React from 'react';

import { ArrowUpRight } from 'lucide-react';

import { site } from '@/lib/site';

import LocalTime from './partials/local-time';

const links = [
  { label: 'GitHub', href: site.github },
  { label: 'LinkedIn', href: site.linkedin },
  { label: 'CV', href: site.resume },
  {
    label: 'Source of this site',
    href: 'https://github.com/Biplo12/robertsinski-portfolio',
  },
];

const SiteFooter: React.FC = (): React.JSX.Element => {
  return (
    /* Not a section-panel: no rule above it and a wide gap instead, so the
       page ends rather than adding one more block. */
    <footer className='mt-20 px-2 pb-2 sm:mt-28 sm:px-8'>
      {/* The hero is three thousand pixels up by now, so the address is here
          in full rather than behind a button. */}
      <p className='type-meta text-ink-faint'>The short way to reach me</p>

      <a
        href={`mailto:${site.email}`}
        /* Sized in utilities rather than on the type step: the address is one
           unbreakable word, and at the title size it ran off a phone screen. */
        className='mt-2 inline-block font-display text-[1.5rem] leading-tight text-ink-strong transition-colors hover:text-signal sm:text-[2.375rem]'
      >
        {site.email}
      </a>

      <p className='mt-3 type-body text-ink-muted'>
        Write about anything you are building. I answer within a day.
      </p>

      <ul className='mt-7 flex flex-wrap gap-x-6 gap-y-2'>
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              target='_blank'
              rel='noreferrer'
              className='inline-flex items-center gap-1 type-body text-ink-muted transition-colors hover:text-foreground'
            >
              {link.label}
              <ArrowUpRight aria-hidden className='size-3.5' />
            </a>
          </li>
        ))}
      </ul>

      <div className='mt-8 flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-t border-white/10 pt-5 type-meta text-ink-faint'>
        <span>{site.name}, Katowice</span>
        <LocalTime />
      </div>
    </footer>
  );
};

export default SiteFooter;
