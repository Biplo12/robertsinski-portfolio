import React from 'react';

import LogoTile from '@/components/logo-tile';
import type { Job, Role } from '@/lib/experience';

interface JobRowProps {
  job: Job;
}

const RoleBody: React.FC<{ role: Role }> = ({ role }): React.JSX.Element => {
  return (
    <>
      <div className='flex flex-wrap items-baseline gap-x-2'>
        <span className='text-sm font-medium text-foreground'>
          {role.title}
        </span>
        <span className='text-xs text-foreground/60'>{role.period}</span>
      </div>

      {role.summary ? (
        <p className='mt-1.5 max-w-[62ch] text-sm leading-relaxed text-foreground/60'>
          {role.summary}
        </p>
      ) : null}

      {role.stack ? (
        <p className='mt-1.5 text-xs text-foreground/60'>
          {role.stack.join(' · ')}
        </p>
      ) : null}
    </>
  );
};

const JobRow: React.FC<JobRowProps> = ({ job }): React.JSX.Element => {
  const hasManyRoles = job.roles.length > 1;

  return (
    <li className='flex gap-3 border-t border-white/10 py-4 first:border-t-0 first:pt-0 last:pb-0'>
      {job.logo ? (
        <LogoTile src={job.logo} name={job.company} bleed={job.logoBleed} />
      ) : (
        <span
          aria-hidden
          className='glass-pill flex size-10 shrink-0 items-center justify-center rounded-xl text-sm text-foreground/60'
        >
          {job.company.charAt(0)}
        </span>
      )}

      <div className='min-w-0 flex-1'>
        <div className='flex flex-wrap items-baseline gap-x-2'>
          <h3 className='font-medium'>{job.company}</h3>
          {job.contract ? (
            <span className='rounded-full border border-white/15 px-1.5 py-0.5 text-[0.6875rem] text-foreground/60'>
              contract
            </span>
          ) : null}
          <span className='ml-auto text-xs font-medium text-foreground/60'>
            {job.duration}
          </span>
        </div>

        <p className='mt-0.5 text-xs text-foreground/60'>{job.location}</p>

        {hasManyRoles ? (
          /* Rail and dots share one axis: 2px line at 3px, 8px dot from 0. */
          <ul className="relative mt-3 space-y-4 before:absolute before:top-1.5 before:bottom-1.5 before:left-[3px] before:z-0 before:w-[2px] before:bg-white/12 before:content-['']">
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
          <div className='mt-2'>
            <RoleBody role={job.roles[0]} />
          </div>
        )}
      </div>
    </li>
  );
};

export default JobRow;
