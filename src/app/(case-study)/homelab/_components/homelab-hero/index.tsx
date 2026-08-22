import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const HomelabHero: React.FC = (): React.JSX.Element => {
  return (
    <article className='glass glass-sheen rounded-[2rem] px-8 pt-7 pb-8'>
      <Link
        href='/'
        className='inline-flex items-center gap-1.5 text-xs text-foreground/60 transition-colors hover:text-foreground'
      >
        <ArrowLeft aria-hidden className='size-3' />
        Back
      </Link>

      <h1 className='font-display mt-6 text-[2rem] leading-none font-semibold tracking-tight'>
        Homelab
      </h1>

      <p className='mt-5 max-w-[62ch] leading-relaxed text-foreground/85'>
        One machine at home runs the media library, the house automation, the
        cameras and my files. I started it to stop paying for things I could
        host myself, and kept going because it is a good place to try things out
        when nobody else depends on them.
      </p>

      <p className='mt-3 max-w-[62ch] leading-relaxed text-foreground/85'>
        It is also where I picked up the things web projects never asked me for:
        virtual machines, a reverse proxy, DNS, certificates, backups, and
        getting in from outside without opening the router.
      </p>
    </article>
  );
};

export default HomelabHero;
