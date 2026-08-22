import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const HomelabSection: React.FC = (): React.JSX.Element => {
  return (
    <section className='glass glass-sheen rounded-[2rem] px-8 pt-7 pb-8'>
      <div className='flex flex-wrap items-baseline justify-between gap-3'>
        <h2 className='font-display text-lg font-semibold tracking-tight'>
          Homelab
        </h2>
        <Link
          href='/homelab'
          className='inline-flex items-center gap-1 text-xs text-signal hover:underline hover:underline-offset-4'
        >
          the homelab in detail
          <ArrowUpRight aria-hidden className='size-3' />
        </Link>
      </div>

      <p className='mt-5 max-w-[62ch] leading-relaxed text-foreground/85'>
        One machine at home runs the media library, the house automation, the
        cameras and my files. Proxmox underneath, services in Docker, cameras
        processed on the GPU, backups on their own box.
      </p>

      <p className='mt-3 max-w-[62ch] leading-relaxed text-foreground/85'>
        There are two domains. One resolves only inside the house and I reach it
        from anywhere over NetBird. The other sits behind Cloudflare, for the
        few things other people use, like Jellyfin and Plex.
      </p>
    </section>
  );
};

export default HomelabSection;
