import React from 'react';

interface SectionHeaderProps {
  title: string;
  /* One line under the title. Optional, because some sections speak for
     themselves. */
  note?: string;
  /* A single link on the right: more of this elsewhere. */
  action?: React.ReactNode;
  /* Stacked puts the action under the title, for sections that run the
     header down a narrow left rail instead of across the top. */
  stacked?: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  note,
  action,
  stacked,
}): React.JSX.Element => {
  return (
    <div
      className={
        stacked
          ? 'flex flex-col items-start gap-3'
          : 'flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2'
      }
    >
      <div>
        <h2 className='type-heading text-ink-strong'>{title}</h2>
        {note ? <p className='mt-1 type-meta text-ink-faint'>{note}</p> : null}
      </div>

      {action}
    </div>
  );
};

export default SectionHeader;
