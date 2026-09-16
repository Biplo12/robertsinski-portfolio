import React from 'react';

import { site } from '@/lib/site';

import Avatar from './avatar';

const ContactButton: React.FC = (): React.JSX.Element => {
  return (
    <a
      href={`mailto:${site.email}`}
      className='hero-pill inline-flex h-[46px] items-center gap-3 py-1 pr-6 pl-1.5 type-body text-foreground'
    >
      <Avatar />
      <span className='relative'>Get in Touch</span>
    </a>
  );
};

export default ContactButton;
