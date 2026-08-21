import React from 'react';

export type ResumeTab = 'work' | 'education';

interface ResumeTabsProps {
  active: ResumeTab;
  onChange: (tab: ResumeTab) => void;
}

const tabs: { id: ResumeTab; label: string }[] = [
  { id: 'work', label: 'Work' },
  { id: 'education', label: 'Education' },
];

const ResumeTabs: React.FC<ResumeTabsProps> = ({
  active,
  onChange,
}): React.JSX.Element => {
  const move = (step: number): void => {
    const current = tabs.findIndex((tab) => tab.id === active);
    const next = (current + step + tabs.length) % tabs.length;

    onChange(tabs[next].id);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>): void => {
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
      event.preventDefault();
      move(1);
    }

    if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
      event.preventDefault();
      move(-1);
    }

    if (event.key === 'Home') {
      event.preventDefault();
      onChange(tabs[0].id);
    }

    if (event.key === 'End') {
      event.preventDefault();
      onChange(tabs[tabs.length - 1].id);
    }
  };

  return (
    <div
      role='tablist'
      aria-label='Background'
      onKeyDown={handleKeyDown}
      className='glass-pill relative grid w-56 grid-cols-2 rounded-full p-1'
    >
      <span
        aria-hidden
        className='absolute top-1 bottom-1 left-1 w-[calc(50%-0.25rem)] rounded-full bg-white/20 transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] motion-reduce:transition-none'
        style={{
          transform:
            active === 'education' ? 'translateX(100%)' : 'translateX(0)',
        }}
      />
      {tabs.map((tab) => (
        <button
          key={tab.id}
          type='button'
          role='tab'
          tabIndex={active === tab.id ? 0 : -1}
          aria-selected={active === tab.id}
          aria-controls={`resume-panel-${tab.id}`}
          onClick={() => onChange(tab.id)}
          className={
            active === tab.id
              ? 'relative z-10 rounded-full py-1 text-sm text-foreground'
              : 'relative z-10 rounded-full py-1 text-sm text-foreground/60 transition-colors hover:text-foreground/85'
          }
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default ResumeTabs;
