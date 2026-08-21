import React from 'react';

interface NumberedRowProps {
  index: number;
  title: string;
  body: string;
}

const NumberedRow: React.FC<NumberedRowProps> = ({
  index,
  title,
  body,
}): React.JSX.Element => {
  return (
    <li className='flex gap-4 border-t border-white/10 py-5 first:border-t-0 first:pt-0 last:pb-0'>
      <span className='mt-0.5 font-mono text-xs text-foreground/40'>
        {String(index + 1).padStart(2, '0')}
      </span>

      <div className='min-w-0'>
        <h3 className='font-medium'>{title}</h3>
        <p className='mt-2 max-w-[62ch] text-sm leading-relaxed text-foreground/70'>
          {body}
        </p>
      </div>
    </li>
  );
};

export default NumberedRow;
