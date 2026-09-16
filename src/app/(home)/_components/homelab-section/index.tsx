import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

import SectionHeader from '@/components/section-header';

const HomelabSection: React.FC = (): React.JSX.Element => {
  return (
    /* Header down a left rail, prose on the right: the same split the
       experience table uses, so the page keeps one grid. */
    <section className='section-panel grid gap-x-10 gap-y-6 px-8 pt-7 pb-8 sm:grid-cols-[16rem_minmax(0,1fr)]'>
      <SectionHeader
        title='Homelab'
        note='One box at home, running more than it should.'
        stacked
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

      <div className='min-w-0'>
        <p className='type-body text-ink-muted'>
          One machine at home runs the media library, the house automation, the
          cameras and my files. Proxmox underneath, services in Docker, cameras
          processed on the GPU, backups on their own box.
        </p>

        <p className='mt-3 type-body text-ink-muted'>
          There are two domains. One resolves only inside the house and I reach
          it from anywhere over NetBird. The other sits behind Cloudflare, for
          the few things other people use, like Jellyfin and Plex.
        </p>
      </div>
    </section>
  );
};

export default HomelabSection;
