import React from 'react';

import LogoTile from '@/components/logo-tile';
import type { School } from '@/lib/education';

interface SchoolRowProps {
  school: School;
}

const SchoolRow: React.FC<SchoolRowProps> = ({ school }): React.JSX.Element => {
  return (
    <li className='grid gap-x-6 gap-y-2 border-t border-white/8 px-4 py-5 first:border-t-0 sm:grid-cols-[8rem_16rem_minmax(0,1fr)_13rem]'>
      <span className='block type-meta text-ink-faint sm:pt-px'>
        {school.period}
      </span>

      <span className='flex items-center gap-2.5 sm:items-start'>
        <LogoTile src={school.logo} name={school.name} small />
        <span className='type-body font-semibold text-ink-strong'>
          {school.name}
        </span>
      </span>

      <span className='min-w-0'>
        <span className='block type-body font-medium text-ink'>
          {school.field}
        </span>
        {school.summary ? (
          <span className='mt-1.5 block max-w-[62ch] type-body text-ink-muted'>
            {school.summary}
          </span>
        ) : null}
      </span>

      <span />
    </li>
  );
};

export default SchoolRow;
