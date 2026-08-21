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

const ContributionGrid: React.FC<ContributionGridProps> = ({
  weeks,
}): React.JSX.Element => {
  return (
    <div className='w-full'>
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
              className='flex-1 text-[0.6rem] whitespace-nowrap text-foreground/45'
            >
              {isNewMonth ? monthName(week[0].date) : ''}
            </span>
          );
        })}
      </div>

      <div className='mt-1 flex w-full gap-[2px]'>
        {weeks.map((week) => (
          <div key={week[0].date} className='flex flex-1 flex-col gap-[2px]'>
            {week.map((day) => (
              <span
                key={day.date}
                title={`${day.count} contributions on ${day.date}`}
                className={`aspect-square w-full rounded-[2px] ${levelClass[day.level]}`}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContributionGrid;
