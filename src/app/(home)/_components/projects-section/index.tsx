import { ArrowUpRight } from 'lucide-react';
import React from 'react';

import { projects } from '@/lib/projects';
import { site } from '@/lib/site';

import ProjectRow from './partials/project-row';

const ProjectsSection: React.FC = (): React.JSX.Element => {
  return (
    <section className='glass glass-sheen rounded-[2rem] px-8 pt-7 pb-8'>
      <div className='flex items-baseline justify-between gap-3'>
        <h2 className='font-display text-lg font-semibold tracking-tight'>
          Projects
        </h2>
        <a
          href={site.github}
          target='_blank'
          rel='noreferrer'
          className='inline-flex items-center gap-1 text-xs text-foreground/60 transition-colors hover:text-foreground'
        >
          More on GitHub
          <ArrowUpRight aria-hidden className='size-3' />
        </a>
      </div>

      <ul className='mt-5'>
        {projects.map((project) => (
          <ProjectRow key={project.name} project={project} />
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
