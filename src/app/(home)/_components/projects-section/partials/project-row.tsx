import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { FaGithub } from 'react-icons/fa6';

import LogoTile from '@/components/logo-tile';
import type { Project } from '@/lib/projects';

interface ProjectRowProps {
  project: Project;
}

const ProjectRow: React.FC<ProjectRowProps> = ({
  project,
}): React.JSX.Element => {
  return (
    <li className='border-t border-white/10 py-4 first:border-t-0 first:pt-0 last:pb-0'>
      <div className='flex items-baseline justify-between gap-3'>
        <h3 className='flex items-center gap-2 font-medium'>
          {project.logo ? (
            <LogoTile
              src={project.logo}
              name={project.name}
              small
              bleed={project.logoBleed}
            />
          ) : null}
          {project.name}
          {project.repoLabel ? (
            <span className='text-xs font-normal text-foreground/60'>
              @{project.repoLabel}
              {project.repoNote ? ` · ${project.repoNote}` : ''}
            </span>
          ) : null}
        </h3>

        <div className='flex shrink-0 items-center gap-3 text-xs'>
          {project.caseStudy ? (
            <Link
              href={project.caseStudy}
              className='text-signal hover:underline hover:underline-offset-4'
            >
              case study
            </Link>
          ) : null}
          {project.demo ? (
            <a
              href={project.demo}
              target='_blank'
              rel='noreferrer'
              className='inline-flex items-center gap-1 text-foreground/60 transition-colors hover:text-foreground'
            >
              {project.demoLabel}
              <ArrowUpRight aria-hidden className='size-3' />
            </a>
          ) : null}
          {project.repo ? (
            <a
              href={project.repo}
              target='_blank'
              rel='noreferrer'
              aria-label={`${project.name} on GitHub`}
              className='text-foreground/50 transition-colors hover:text-foreground'
            >
              <FaGithub aria-hidden className='size-4' />
            </a>
          ) : null}
          {project.private ? (
            <span className='rounded-full border border-white/15 px-1.5 py-0.5 text-[0.65rem] text-foreground/60'>
              private
            </span>
          ) : null}
        </div>
      </div>

      <p className='mt-1.5 max-w-[58ch] text-sm leading-relaxed text-foreground/70'>
        {project.description}
      </p>

      <p className='mt-2 text-xs text-foreground/60'>
        {project.stack.join(' · ')}
      </p>
    </li>
  );
};

export default ProjectRow;
