import { ArrowUpRight } from 'lucide-react';
import React from 'react';

interface SpecRowProps {
  name: string;
  role: string;
  stack: string[];
  repo?: string;
  tag?: string;
}

const SpecRow: React.FC<SpecRowProps> = ({
  name,
  role,
  stack,
  repo,
  tag,
}): React.JSX.Element => {
  return (
    <li className='border-t border-white/10 py-4 first:border-t-0 first:pt-0 last:pb-0'>
      <div className='flex flex-wrap items-baseline gap-x-2'>
        <h3 className='font-medium'>{name}</h3>
        {tag ? (
          <span className='rounded-full border border-white/15 px-1.5 py-0.5 text-[0.65rem] text-foreground/60'>
            {tag}
          </span>
        ) : null}
        {repo ? (
          <a
            href={repo}
            target='_blank'
            rel='noreferrer'
            className='ml-auto inline-flex items-center gap-1 text-xs text-foreground/60 transition-colors hover:text-foreground'
          >
            repo
            <ArrowUpRight aria-hidden className='size-3' />
          </a>
        ) : null}
      </div>

      <p className='mt-1.5 max-w-[62ch] text-sm leading-relaxed text-foreground/70'>
        {role}
      </p>

      <p className='mt-2 text-xs text-foreground/60'>{stack.join(' · ')}</p>
    </li>
  );
};

export default SpecRow;
