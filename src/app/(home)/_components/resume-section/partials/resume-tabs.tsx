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
      className='flex gap-7 border-b border-white/8'
    >
      {tabs.map((tab) => (
        <button
          key={tab.id}
          type='button'
          role='tab'
          tabIndex={active === tab.id ? 0 : -1}
          aria-selected={active === tab.id}
          aria-controls={`resume-panel-${tab.id}`}
          onClick={() => onChange(tab.id)}
          className={`relative cursor-pointer pb-3 type-meta transition-colors after:absolute after:inset-x-0 after:-bottom-px after:h-px after:content-[''] ${
            active === tab.id
              ? 'text-ink-strong after:bg-ink-strong'
              : 'text-ink-faint after:bg-transparent hover:text-ink'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default ResumeTabs;
