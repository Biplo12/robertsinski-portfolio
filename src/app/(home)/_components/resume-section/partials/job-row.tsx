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
        <span className='text-xs text-foreground/45'>{role.period}</span>
      </div>

      {role.summary ? (
        <p className='mt-1.5 max-w-[62ch] text-[0.8125rem] leading-relaxed text-foreground/60'>
          {role.summary}
        </p>
      ) : null}

      {role.stack ? (
        <p className='mt-1.5 text-xs text-foreground/45'>
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
      <LogoTile src={job.logo} name={job.company} />

      <div className='min-w-0 flex-1'>
        <div className='flex flex-wrap items-baseline gap-x-2'>
          <h3 className='font-medium'>{job.company}</h3>
          {job.contract ? (
            <span className='rounded-full border border-white/15 px-1.5 py-0.5 text-[0.65rem] text-foreground/55'>
              contract
            </span>
          ) : null}
          <span className='ml-auto text-xs text-foreground/45'>
            {job.duration}
          </span>
        </div>

        <p className='mt-0.5 text-xs text-foreground/45'>{job.location}</p>

        {hasManyRoles ? (
          <ul className='mt-3 space-y-4 border-l border-white/10 pl-4'>
            {job.roles.map((role) => (
              <li key={role.title} className='relative'>
                <span
                  aria-hidden
                  className='absolute top-[0.45rem] -left-[19.5px] size-1.5 rounded-full bg-white/45'
                />
                <RoleBody role={role} />
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
