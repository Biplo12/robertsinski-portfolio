import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const OutsideWorkSection: React.FC = (): React.JSX.Element => {
  return (
    <section className='glass glass-sheen rounded-[2rem] px-8 pt-7 pb-8'>
      <div className='flex flex-wrap items-baseline justify-between gap-3'>
        <h2 className='font-display text-lg font-semibold tracking-tight'>
          Outside work
        </h2>
        <Link
          href='/homelab'
          className='inline-flex items-center gap-1 text-xs text-signal hover:underline hover:underline-offset-4'
        >
          the homelab in detail
          <ArrowUpRight aria-hidden className='size-3' />
        </Link>
      </div>

      <p className='mt-4 max-w-[62ch] leading-relaxed text-foreground/85'>
        I self-host what I can on one machine at home: Proxmox underneath,
        services in Docker, cameras processed on the GPU, backups on their own
        box, and two domains, one that only resolves inside the house and one
        behind Cloudflare for the few things other people use.
      </p>

      <p className='mt-3 max-w-[62ch] leading-relaxed text-foreground/85'>
        I watch a lot of films, mostly older ones. That is where Klaps came
        from: I kept missing screenings I would have gone to if I had known
        about them.
      </p>

      <p className='mt-3 max-w-[62ch] leading-relaxed text-foreground/85'>
        I also started playing golf recently. Still bad at it, and still going
        back.
      </p>
    </section>
  );
};

export default OutsideWorkSection;
