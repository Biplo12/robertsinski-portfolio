import { Download } from 'lucide-react';
import React from 'react';

import { site } from '@/lib/site';

const ResumeButton: React.FC = (): React.JSX.Element => {
  return (
    <a
      href={site.resume}
      className='inline-flex h-11 items-center gap-2 rounded-full bg-foreground px-5 text-sm font-medium text-background shadow-[0_8px_24px_-8px_rgb(0_0_0/0.6)] transition-transform hover:-translate-y-0.5'
    >
      Resume
      <Download aria-hidden className='size-4' />
    </a>
  );
};

export default ResumeButton;
