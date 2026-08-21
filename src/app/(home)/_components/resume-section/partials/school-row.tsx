import React from 'react';

import LogoTile from '@/components/logo-tile';
import type { School } from '@/lib/education';

interface SchoolRowProps {
  school: School;
}

const SchoolRow: React.FC<SchoolRowProps> = ({
  school,
}): React.JSX.Element => {
  return (
    <li className='flex gap-3 border-t border-white/10 py-4 first:border-t-0 first:pt-0 last:pb-0'>
      <LogoTile src={school.logo} name={school.name} />

      <div className='min-w-0 flex-1'>
        <div className='flex flex-wrap items-baseline gap-x-2'>
          <h3 className='font-medium'>{school.name}</h3>
          <span className='ml-auto text-xs text-foreground/45'>
            {school.period}
          </span>
        </div>
        <p className='mt-1 text-sm font-medium text-foreground'>{school.field}</p>

        {school.summary ? (
          <p className='mt-1.5 max-w-[62ch] text-[0.8125rem] leading-relaxed text-foreground/60'>
            {school.summary}
          </p>
        ) : null}
      </div>
    </li>
  );
};

export default SchoolRow;
