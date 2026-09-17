import React from 'react';

import type { IconType } from 'react-icons';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6';

import { site } from '@/lib/site';

interface SocialLink {
  Icon: IconType;
  name: string;
  href: string;
  target?: string;
  rel?: string;
}

const links: SocialLink[] = [
  {
    Icon: FaGithub,
    name: 'GitHub',
    href: site.github,
    target: '_blank',
    rel: 'noreferrer',
  },
  {
    Icon: FaLinkedinIn,
    name: 'LinkedIn',
    href: site.linkedin,
    target: '_blank',
    rel: 'noreferrer',
  },
];

/* Icons rather than labels: more worded buttons would crowd the row. Mail
   is absent on purpose, since Get in Touch already opens it. */
const SocialLinks: React.FC = (): React.JSX.Element => {
  return (
    <>
      {links.map(({ Icon, name, href, target, rel }) => (
        <a
          key={name}
          href={href}
          target={target}
          rel={rel}
          aria-label={name}
          title={name}
          className='hero-pill hero-pill-quiet inline-flex size-[46px] items-center justify-center text-ink-strong'
        >
          <Icon aria-hidden className='relative size-4' />
        </a>
      ))}
    </>
  );
};

export default SocialLinks;
