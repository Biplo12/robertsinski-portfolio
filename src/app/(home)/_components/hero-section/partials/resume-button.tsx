import { Download } from 'lucide-react';
import React from 'react';

import { site } from '@/lib/site';

const ResumeButton: React.FC = (): React.JSX.Element => {
  return (
    <a
      href={site.resume}
      className='inline-flex h-9 items-center gap-2 rounded border px-3 text-sm transition-colors hover:bg-secondary'
    >
      Resume
      <Download aria-hidden className='size-3.5' />
    </a>
  );
};

export default ResumeButton;
