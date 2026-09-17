import React from 'react';

import { Download } from 'lucide-react';

import { site } from '@/lib/site';

const ResumeButton: React.FC = (): React.JSX.Element => {
  return (
    <a
      href={site.resume}
      className='hero-pill hero-pill-quiet type-body inline-flex h-[46px] items-center gap-2 px-5 text-ink-strong'
    >
      <span className='relative'>Resume</span>
      <Download aria-hidden className='size-4' />
    </a>
  );
};

export default ResumeButton;
