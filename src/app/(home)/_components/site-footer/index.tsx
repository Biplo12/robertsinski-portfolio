import React from 'react';

import { site } from '@/lib/site';

const SiteFooter: React.FC = (): React.JSX.Element => {
  return (
    <footer className='flex flex-wrap items-center justify-between gap-3 px-2 pt-2 text-xs text-foreground/60'>
      <span>
        {site.name}, Katowice
      </span>
      <a
        href={site.github}
        target='_blank'
        rel='noreferrer'
        className='transition-colors hover:text-foreground/80'
      >
        @Biplo12 on GitHub
      </a>
    </footer>
  );
};

export default SiteFooter;
