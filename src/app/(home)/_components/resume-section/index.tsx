'use client';

import React, { useEffect, useRef, useState } from 'react';

import { education } from '@/lib/education';
import { experience } from '@/lib/experience';

import JobRow from './partials/job-row';
import type { ResumeTab } from './partials/resume-tabs';
import ResumeTabs from './partials/resume-tabs';
import SchoolRow from './partials/school-row';

const ResumeSection: React.FC = (): React.JSX.Element => {
  const [active, setActive] = useState<ResumeTab>('work');
  const [height, setHeight] = useState<number>();
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const panel = panelRef.current;

    if (!panel) {
      return;
    }

    const observer = new ResizeObserver(() => setHeight(panel.scrollHeight));

    observer.observe(panel);
    setHeight(panel.scrollHeight);

    return () => observer.disconnect();
  }, [active]);

  return (
    <section className='glass glass-sheen rounded-[2rem] px-8 pt-7 pb-8'>
      <h2 className='sr-only'>Background</h2>
      <ResumeTabs active={active} onChange={setActive} />

      <div
        style={{ height }}
        className='overflow-hidden transition-[height] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] motion-reduce:transition-none'
      >
        <div ref={panelRef} className='pt-7'>
          {active === 'work' ? (
            <ul
              key='work'
              id='resume-panel-work'
              role='tabpanel'
              aria-label='Work'
              className='panel-in'
            >
              {experience.map((job) => (
                <JobRow key={job.company} job={job} />
              ))}
            </ul>
          ) : (
            <ul
              key='education'
              id='resume-panel-education'
              role='tabpanel'
              aria-label='Education'
              className='panel-in'
            >
              {education.map((school) => (
                <SchoolRow key={school.name} school={school} />
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
