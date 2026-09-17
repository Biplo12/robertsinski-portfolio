import { ArrowUpRight } from 'lucide-react';
import React from 'react';

import SectionHeader from '@/components/section-header';
import { projects } from '@/lib/projects';
import { site } from '@/lib/site';

import ProjectRow from './partials/project-row';

const ProjectsSection: React.FC = (): React.JSX.Element => {
  return (
    <section id='projects' className='section-panel scroll-mt-24 px-8 pt-7 pb-8'>
      <SectionHeader
        title='Projects'
        note='Things I built and still run.'
        action={
          <a
            href={site.github}
            target='_blank'
            rel='noreferrer'
            className='inline-flex items-center gap-1.5 type-meta text-ink-muted transition-colors hover:text-foreground'
          >
            More on GitHub
            <ArrowUpRight aria-hidden className='size-3.5' />
          </a>
        }
      />

      <ul className='mt-6 grid gap-4 sm:grid-cols-2'>
        {projects.map((project) => (
          <ProjectRow key={project.name} project={project} />
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
