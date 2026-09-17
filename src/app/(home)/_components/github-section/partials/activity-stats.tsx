import React from 'react';

import type { ContributionDay } from '@/lib/github';

interface ActivityStatsProps {
  weeks: ContributionDay[][];
}

/* Longest run of consecutive days with at least one contribution. */
const longestStreak = (days: ContributionDay[]): number => {
  let best = 0;
  let run = 0;

  for (const day of days) {
    run = day.count > 0 ? run + 1 : 0;
    best = Math.max(best, run);
  }

  return best;
};

const ActivityStats: React.FC<ActivityStatsProps> = ({
  weeks,
}): React.JSX.Element => {
  const days = weeks.flat();
  const active = days.filter((day) => day.count > 0).length;
  const busiest = days.reduce(
    (top, day) => (day.count > top ? day.count : top),
    0,
  );

  const stats = [
    { label: 'Active days', value: active },
    { label: 'Longest streak', value: `${longestStreak(days)} days` },
    { label: 'Busiest day', value: busiest },
  ];

  return (
    <dl className='flex flex-wrap items-baseline gap-x-6 gap-y-2 type-meta'>
      {stats.map((stat) => (
        <div key={stat.label} className='flex items-baseline gap-2'>
          <dt className='text-ink-faint'>{stat.label}</dt>
          <dd className='font-semibold text-ink'>{stat.value}</dd>
        </div>
      ))}
    </dl>
  );
};

export default ActivityStats;
