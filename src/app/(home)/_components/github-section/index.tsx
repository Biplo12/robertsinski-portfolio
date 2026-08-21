import React from 'react';

import { getContributions } from '@/lib/github';
import { site } from '@/lib/site';

import ActivityLegend from './partials/activity-legend';
import ContributionGrid from './partials/contribution-grid';

const GithubSection = async (): Promise<React.JSX.Element | null> => {
  const contributions = await getContributions('Biplo12');

  if (!contributions) {
    return null;
  }

  return (
    <section className='glass glass-sheen rounded-[2rem] px-8 pt-7 pb-8'>
      <div className='flex flex-wrap items-baseline justify-between gap-3'>
        <h2 className='font-display text-lg font-semibold tracking-tight'>
          GitHub activity
        </h2>
        <a
          href={site.github}
          target='_blank'
          rel='noreferrer'
          className='text-xs text-foreground/60 transition-colors hover:text-foreground'
        >
          @Biplo12
        </a>
      </div>

      <p className='mt-2 text-sm text-foreground/60'>
        {contributions.total} contributions in the last year.
      </p>

      <div className='mt-5'>
        <ContributionGrid weeks={contributions.weeks} />
      </div>

      <div className='mt-4 flex justify-end'>
        <ActivityLegend />
      </div>
    </section>
  );
};

export default GithubSection;
