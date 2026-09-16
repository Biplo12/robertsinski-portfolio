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
        <h3 className='type-body font-semibold'>{name}</h3>
        {tag ? (
          <span className='rounded-full border border-white/15 px-1.5 py-0.5 type-micro text-ink-muted'>
            {tag}
          </span>
        ) : null}
        {repo ? (
          <a
            href={repo}
            target='_blank'
            rel='noreferrer'
            className='ml-auto inline-flex items-center gap-1.5 type-meta text-ink-muted transition-colors hover:text-foreground'
          >
            repo
            <ArrowUpRight aria-hidden className='size-3' />
          </a>
        ) : null}
      </div>

      <p className='mt-1.5 max-w-[62ch] type-body text-ink-muted'>
        {role}
      </p>

      <p className='mt-2 type-meta text-ink-muted'>{stack.join(' · ')}</p>
    </li>
  );
};

export default SpecRow;
