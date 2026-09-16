import React from 'react';
import { FaGithub } from 'react-icons/fa6';

import { site } from '@/lib/site';

const GithubButton: React.FC = (): React.JSX.Element => {
  return (
    <a
      href={site.github}
      target='_blank'
      rel='noreferrer'
      className='hero-pill hero-pill-quiet type-body inline-flex h-[46px] items-center gap-2 px-5 text-ink-strong'
    >
      <FaGithub aria-hidden className='size-4' />
      <span className='relative'>GitHub</span>
    </a>
  );
};

export default GithubButton;
