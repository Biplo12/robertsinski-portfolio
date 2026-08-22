import React from 'react';

const levelClass = [
  'bg-white/10',
  'bg-signal/30',
  'bg-signal/50',
  'bg-signal/75',
  'bg-signal',
];

const ActivityLegend: React.FC = (): React.JSX.Element => {
  return (
    <div className='flex items-center gap-1.5 text-[0.6875rem] text-foreground/60'>
      Less
      {levelClass.map((className) => (
        <span
          key={className}
          aria-hidden
          className={`size-[9px] rounded-[2px] ${className}`}
        />
      ))}
      More
    </div>
  );
};

export default ActivityLegend;
