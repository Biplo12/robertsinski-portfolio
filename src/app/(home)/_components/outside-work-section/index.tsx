import React from 'react';

const OutsideWorkSection: React.FC = (): React.JSX.Element => {
  return (
    <section className='glass glass-sheen rounded-[2rem] px-8 pt-7 pb-8'>
      <h2 className='font-display text-lg font-semibold tracking-tight'>
        Outside work
      </h2>

      <p className='mt-4 max-w-[62ch] leading-relaxed text-foreground/85'>
        I got into self-hosting not long ago and keep adding to it. Proxmox on
        the machine, everything else in Docker: Plex, Jellyfin and the arr apps
        for the library, Home Assistant for the house, Frigate for the cameras
        with detection running locally, Nextcloud for files, Pi-hole taking care
        of ads for every device, Nginx Proxy Manager in front of it all, and a
        VPN so I can reach any of it from outside. It is where I try things out
        before using them anywhere else.
      </p>

      <p className='mt-4 max-w-[62ch] leading-relaxed text-foreground/85'>
        I watch a lot of films, mostly older ones. That is where Klaps came
        from: I kept missing screenings I would have gone to if I had known
        about them.
      </p>

      <p className='mt-4 max-w-[62ch] leading-relaxed text-foreground/85'>
        I also started playing golf recently. Still bad at it, and still going
        back.
      </p>
    </section>
  );
};

export default OutsideWorkSection;
