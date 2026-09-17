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

/* A tooltip is wider than a few columns, so the ones near an edge align to it. */
const tooltipAnchor = (index: number, total: number): string => {
  if (index < total / 3) {
    return 'day-start';
  }

  if (index > (total * 2) / 3) {
    return 'day-end';
  }

  return '';
};

const ContributionGrid: React.FC<ContributionGridProps> = ({
  weeks,
}): React.JSX.Element => {
  return (
    <div className='-mx-1 overflow-x-auto px-1 pb-1 sm:mx-0 sm:overflow-visible sm:px-0 sm:pb-0'>
      <div className='w-full min-w-[700px] sm:min-w-0'>
        <div className='flex w-full gap-[4px]'>
          {weeks.map((week, index) => {
            const previous = weeks[index - 1];
            const isNewMonth =
              !previous ||
              new Date(previous[0].date).getMonth() !==
                new Date(week[0].date).getMonth();

            return (
              <span
                key={week[0].date}
                className='flex-1 type-micro whitespace-nowrap text-ink-faint'
              >
                {isNewMonth ? monthName(week[0].date) : ''}
              </span>
            );
          })}
        </div>

        <div className='mt-1 flex w-full gap-[4px]'>
          {weeks.map((week, index) => (
            <div key={week[0].date} className='flex flex-1 flex-col gap-[4px]'>
              {week.map((day) => (
                <span
                  key={day.date}
                  data-label={dayLabel(day)}
                  className={`day relative block aspect-square w-full rounded-[2px] ${levelClass[day.level]} ${tooltipAnchor(index, weeks.length)}`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContributionGrid;
