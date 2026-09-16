import React from 'react';

import { getContributions } from '@/lib/github';
import { site } from '@/lib/site';

import ActivityLegend from './partials/activity-legend';
import ContributionGrid from './partials/contribution-grid';

const GithubSection = async (): Promise<React.JSX.Element> => {
  const contributions = await getContributions('Biplo12');

  return (
    <section className='section-panel px-8 pt-7 pb-8'>
      <div className='flex flex-wrap items-baseline justify-between gap-3'>
        <h2 className='type-heading'>
          GitHub activity
        </h2>
        <a
          href={site.github}
          target='_blank'
          rel='noreferrer'
          className='type-meta text-ink-muted transition-colors hover:text-foreground'
        >
          @Biplo12
        </a>
      </div>

      {contributions ? (
        <>
          <p className='mt-2 max-w-[62ch] type-body text-ink-muted'>
            {contributions.total} contributions in the last year.
          </p>

          <div className='mt-5'>
            <ContributionGrid weeks={contributions.weeks} />
          </div>

          <div className='mt-5 flex justify-end'>
            <ActivityLegend />
          </div>
        </>
      ) : (
        <p className='mt-2 max-w-[62ch] type-body text-ink-muted'>
          The contribution graph is unavailable right now. The commits are on my
          profile.
        </p>
      )}
    </section>
  );
};

export default GithubSection;
