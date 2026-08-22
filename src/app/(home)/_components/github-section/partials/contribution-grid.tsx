import React from 'react';

import type { ContributionDay } from '@/lib/github';

interface ContributionGridProps {
  weeks: ContributionDay[][];
}

const levelClass = [
  'bg-white/10',
  'bg-signal/30',
  'bg-signal/50',
  'bg-signal/75',
  'bg-signal',
];

const monthName = (date: string): string =>
  new Date(date).toLocaleString('en', { month: 'short' });

const dayLabel = (day: ContributionDay): string => {
  const [year, month, date] = day.date.split('-');
  const when = `${date}.${month}.${year}`;

  if (day.count === 0) {
    return `No contributions on ${when}`;
  }

  if (day.count === 1) {
    return `1 contribution on ${when}`;
  }

  return `${day.count} contributions on ${when}`;
};

/* Tooltips near the edges would overflow the card, so they anchor differently. */
const tooltipAnchor = (index: number, total: number): string => {
  if (index < 4) {
    return 'left-0';
  }

  if (index > total - 5) {
    return 'right-0';
  }

  return 'left-1/2 -translate-x-1/2';
};

const ContributionGrid: React.FC<ContributionGridProps> = ({
  weeks,
}): React.JSX.Element => {
  return (
    <div className='-mx-1 overflow-x-auto px-1 pb-1 sm:mx-0 sm:overflow-visible sm:px-0 sm:pb-0'>
      <div className='w-full min-w-[760px] sm:min-w-0'>
        <div className='flex w-full gap-[2px]'>
          {weeks.map((week, index) => {
            const previous = weeks[index - 1];
            const isNewMonth =
              !previous ||
              new Date(previous[0].date).getMonth() !==
                new Date(week[0].date).getMonth();

            return (
              <span
                key={week[0].date}
                className='flex-1 text-[0.6875rem] whitespace-nowrap text-foreground/60'
              >
                {isNewMonth ? monthName(week[0].date) : ''}
              </span>
            );
          })}
        </div>

        <div className='mt-1 flex w-full gap-[2px]'>
          {weeks.map((week, index) => (
            <div key={week[0].date} className='flex flex-1 flex-col gap-[2px]'>
              {week.map((day) => (
                <span
                  key={day.date}
                  className='group relative aspect-square w-full'
                >
                  <span
                    className={`block size-full rounded-[2px] ${levelClass[day.level]}`}
                  />
                  <span
                    role='tooltip'
                    className={`pointer-events-none absolute bottom-full z-20 mb-2 hidden rounded-md border border-white/10 bg-[#14161d] px-2 py-1 text-xs whitespace-nowrap text-foreground shadow-lg sm:group-hover:block ${tooltipAnchor(index, weeks.length)}`}
                  >
                    {dayLabel(day)}
                  </span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContributionGrid;
