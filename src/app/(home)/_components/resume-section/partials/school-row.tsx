import React from 'react';

import LogoTile from '@/components/logo-tile';
import type { School } from '@/lib/education';

interface SchoolRowProps {
  school: School;
}

const SchoolRow: React.FC<SchoolRowProps> = ({ school }): React.JSX.Element => {
  return (
    <li className='grid gap-x-10 gap-y-4 border-t border-white/8 py-7 first:border-t-0 first:pt-0 last:pb-0 sm:grid-cols-[15rem_1fr]'>
      <div className='flex items-start gap-3'>
        <LogoTile src={school.logo} name={school.name} />

        <div className='min-w-0'>
          <h3 className='type-body font-semibold text-ink-strong'>
            {school.name}
          </h3>
          <p className='mt-1 type-meta text-ink-faint'>{school.period}</p>
        </div>
      </div>

      <div className='min-w-0'>
        <h4 className='type-body font-semibold text-ink-strong'>
          {school.field}
        </h4>

        {school.summary ? (
          <p className='mt-2 max-w-[68ch] type-body text-ink-muted'>
            {school.summary}
          </p>
        ) : null}
      </div>
    </li>
  );
};

export default SchoolRow;
