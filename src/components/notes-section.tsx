import React from 'react';

import NumberedRow from '@/components/numbered-row';
import SectionHeader from '@/components/section-header';

import type { Note } from '@/lib/case-study';

interface NotesSectionProps {
  title: string;
  note: string;
  notes: Note[];
  footnote?: string;
}

const NotesSection: React.FC<NotesSectionProps> = ({
  title,
  note,
  notes,
  footnote,
}): React.JSX.Element => {
  return (
    <section className='section-panel grid gap-x-10 gap-y-6 px-8 pt-7 pb-8 sm:grid-cols-[16rem_minmax(0,1fr)]'>
      <SectionHeader title={title} note={note} stacked />

      <div className='min-w-0'>
        <ul className='mt-5'>
          {notes.map((entry, index) => (
            <NumberedRow
              key={entry.title}
              index={index}
              title={entry.title}
              body={entry.body}
            />
          ))}
        </ul>

        {footnote ? (
          <p className='mt-7 max-w-[62ch] border-t border-white/10 pt-5 type-meta text-ink-faint'>
            {footnote}
          </p>
        ) : null}
      </div>
    </section>
  );
};

export default NotesSection;
