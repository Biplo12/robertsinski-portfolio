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
    <li className='flex flex-col rounded-2xl border border-white/8 bg-white/2 p-6 transition-colors hover:border-white/14 hover:bg-white/4'>
      <div className='flex items-start justify-between gap-3'>
        <div className='min-w-0'>
          {/* Logo and name share one flex line, so the mark centres on the
              name instead of hanging off the top of the block. */}
          <div className='flex items-center gap-2.5'>
            {project.logo ? (
              <LogoTile
                src={project.logo}
                name={project.name}
                small
                bleed={project.logoBleed}
              />
            ) : null}

            <h3 className='type-body font-semibold text-ink-strong'>
              {project.name}
            </h3>
          </div>

          {project.repoLabel ? (
            <p className='mt-1.5 type-meta text-ink-faint'>
              @{project.repoLabel}
              {project.repoNote ? ` · ${project.repoNote}` : null}
            </p>
          ) : null}
        </div>

        {project.private ? (
          <span className='shrink-0 rounded-full border border-white/15 px-2 py-0.5 type-meta text-ink-faint'>
            private
          </span>
        ) : null}
      </div>

      <p className='mt-4 type-body text-ink-muted'>{project.description}</p>

      {/* Stack and links sit at the foot of the card, so cards of different
          description lengths still line their actions up. */}
      <p className='mt-auto pt-4 type-meta text-ink-faint'>
        {project.stack.join('  ')}
      </p>

      <div className='mt-5 flex items-center gap-4 border-t border-white/8 pt-4 type-meta'>
        {project.caseStudy ? (
          <Link
            href={project.caseStudy}
            className='text-signal transition-colors hover:text-foreground'
          >
            case study
          </Link>
        ) : null}

        {project.demo ? (
          <a
            href={project.demo}
            target='_blank'
            rel='noreferrer'
            className='inline-flex items-center gap-1.5 text-ink-muted transition-colors hover:text-foreground'
          >
            {project.demoLabel}
            <ArrowUpRight aria-hidden className='size-3.5' />
          </a>
        ) : null}

        {project.repo ? (
          <a
            href={project.repo}
            target='_blank'
            rel='noreferrer'
            aria-label={`${project.name} on GitHub`}
            className='ml-auto text-ink-muted transition-colors hover:text-foreground'
          >
            <FaGithub aria-hidden className='size-4' />
          </a>
        ) : null}
      </div>
    </li>
  );
};

export default ProjectRow;
