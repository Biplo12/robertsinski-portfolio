import React from 'react';

import LogoTile from '@/components/logo-tile';
import type { ResolvedJob, ResolvedRole } from '@/lib/experience';

interface JobRowProps {
  job: ResolvedJob;
}

const RoleBody: React.FC<{ role: ResolvedRole }> = ({
  role,
}): React.JSX.Element => {
  return (
    <>
      <div className='flex flex-wrap items-baseline justify-between gap-x-4'>
        <h4 className='type-body font-semibold text-ink-strong'>
          {role.title}
        </h4>
        <span className='type-micro text-ink-faint'>{role.period}</span>
      </div>

      {role.summary ? (
        <p className='mt-2 max-w-[68ch] type-body text-ink-muted'>
          {role.summary}
        </p>
      ) : null}

      {role.stack ? (
        <ul className='mt-3 flex flex-wrap gap-1.5'>
          {role.stack.map((item) => (
            <li
              key={item}
              className='rounded-md bg-white/6 px-2 py-1 type-micro text-ink-muted'
            >
              {item}
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );
};

const JobRow: React.FC<JobRowProps> = ({ job }): React.JSX.Element => {
  const hasManyRoles = job.roles.length > 1;

  return (
    <li className='grid gap-x-10 gap-y-4 border-t border-white/8 py-7 first:border-t-0 first:pt-0 last:pb-0 sm:grid-cols-[15rem_1fr]'>
      {/* Left rail: who and how long. Everything on the right is the work. */}
      <div className='flex items-start gap-3'>
        {job.logo ? (
          <LogoTile src={job.logo} name={job.company} bleed={job.logoBleed} />
        ) : (
          <span
            aria-hidden
            className='glass-pill flex size-10 shrink-0 items-center justify-center rounded-xl type-body text-ink-muted'
          >
            {job.company.charAt(0)}
          </span>
        )}

        <div className='min-w-0'>
          <div className='flex flex-wrap items-center gap-x-2 gap-y-1'>
            <h3 className='type-body font-semibold text-ink-strong'>
              {job.company}
            </h3>
            {job.contract ? (
              <span className='rounded-full border border-white/15 px-1.5 py-0.5 type-micro text-ink-faint'>
                contract
              </span>
            ) : null}
          </div>

          <p className='mt-1 type-meta text-ink-muted'>{job.location}</p>
          <p className='type-meta text-ink-faint'>{job.duration}</p>
        </div>
      </div>

      <div className='min-w-0'>
        {hasManyRoles ? (
          /* Rail and dots share one axis: 2px line at 3px, 8px dot from 0. */
          <ul className="relative space-y-6 before:absolute before:top-1.5 before:bottom-1.5 before:left-[3px] before:z-0 before:w-[2px] before:bg-white/12 before:content-['']">
            {job.roles.map((role) => (
              <li key={role.title} className='flex gap-3'>
                <span
                  aria-hidden
                  className='relative z-10 mt-[7px] size-2 shrink-0 rounded-full bg-[#868c9e]'
                />
                <div className='min-w-0 flex-1'>
                  <RoleBody role={role} />
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <RoleBody role={job.roles[0]} />
        )}
      </div>
    </li>
  );
};

export default JobRow;
