import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

import SectionHeader from '@/components/section-header';

const HomelabSection: React.FC = (): React.JSX.Element => {
  return (
    <section className='section-panel px-8 pt-7 pb-8'>
      <SectionHeader
        title='Homelab'
        note='One box at home, running more than it should.'
        action={
          <Link
            href='/homelab'
            className='inline-flex items-center gap-1.5 type-meta text-signal transition-colors hover:text-foreground'
          >
            the homelab in detail
            <ArrowUpRight aria-hidden className='size-3.5' />
          </Link>
        }
      />

      <p className='mt-7 max-w-[70ch] type-body text-ink-muted'>
        One machine at home runs the media library, the house automation, the
        cameras and my files. Proxmox underneath, services in Docker, cameras
        processed on the GPU, backups on their own box.
      </p>

      <p className='mt-3 max-w-[70ch] type-body text-ink-muted'>
        There are two domains. One resolves only inside the house and I reach it
        from anywhere over NetBird. The other sits behind Cloudflare, for the
        few things other people use, like Jellyfin and Plex.
      </p>
    </section>
  );
};

export default HomelabSection;
