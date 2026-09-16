import React from 'react';

import LogoTile from '@/components/logo-tile';
import { formatYears } from '@/lib/duration';
import type { ResolvedJob, ResolvedRole } from '@/lib/experience';

interface RoleRowProps {
  job: ResolvedJob;
  role: ResolvedRole;
  /* Repeat rows for the same employer leave the company cell empty. */
  leading: boolean;
}

const RoleRow: React.FC<RoleRowProps> = ({
  job,
  role,
  leading,
}): React.JSX.Element => {
  /* No end date means the role is still running. */
  const current = !role.end;

  return (
    <li
      className={`grid gap-x-6 gap-y-2 rounded-xl px-4 py-5 sm:grid-cols-[8rem_16rem_minmax(0,1fr)_13rem] ${
        leading ? 'border-t border-white/8 first:border-t-0' : ''
      } ${current ? 'bg-white/4' : ''}`}
    >
      {/* Dates and employment type are both metadata, so they share the first
          column and the company cell keeps one shape whatever it holds. */}
      <span className='sm:pt-px'>
        <span
          className={`block type-meta ${
            current ? 'text-ink' : 'text-ink-faint'
          }`}
        >
          {formatYears(role.start, role.end)}
        </span>
        {leading && job.contract ? (
          <span className='block type-meta text-ink-faint'>contract</span>
        ) : null}
      </span>

      {/* Repeated in full on every row. Blanking the cell for a second title
          at the same employer left a hole, and a rule bridging the gap read as
          a stray line. */}
      <span className='flex items-center gap-2.5 sm:items-start'>
        {job.logo ? (
          <LogoTile
            src={job.logo}
            name={job.company}
            bleed={job.logoBleed}
            small
          />
        ) : null}

        <span className='type-body font-semibold text-ink-strong'>
          {job.company}
        </span>
      </span>

      <span className='min-w-0'>
        <span className='block type-body font-medium text-ink-strong'>
          {role.title}
        </span>
        {role.summary ? (
          <span
            className={`mt-1.5 block max-w-[62ch] type-body ${
              current ? 'text-ink' : 'text-ink-muted'
            }`}
          >
            {role.summary}
          </span>
        ) : null}
      </span>

      <span className='type-meta text-ink-faint'>
        {role.stack ? role.stack.join('  ') : null}
      </span>
    </li>
  );
};

export default RoleRow;
