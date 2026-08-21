import React from 'react';
import type { IconType } from 'react-icons';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6';
import { HiOutlineEnvelope } from 'react-icons/hi2';

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
  {
    Icon: HiOutlineEnvelope,
    name: 'Email',
    href: `mailto:${site.email}`,
  },
];

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
          className='inline-flex size-9 items-center justify-center rounded border text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground'
        >
          <Icon aria-hidden className='size-4' />
        </a>
      ))}
    </>
  );
};

export default SocialLinks;
