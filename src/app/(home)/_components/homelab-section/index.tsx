import React from 'react';

const HomelabSection: React.FC = (): React.JSX.Element => {
  return (
    <section className='glass glass-sheen rounded-[2rem] px-8 pt-7 pb-8'>
      <h2 className='font-display text-lg font-semibold tracking-tight'>
        Homelab
      </h2>

      <p className='mt-4 max-w-[62ch] leading-relaxed text-foreground/85'>
        I got into self-hosting not long ago and I keep adding to it. Proxmox on
        the machine, everything else in Docker: Plex, Jellyfin and the arr apps
        for the library, Home Assistant for the house, Frigate for the cameras
        with detection running locally, Nextcloud for files, Nginx Proxy Manager
        in front of it all.
      </p>

      <p className='mt-4 max-w-[62ch] leading-relaxed text-foreground/85'>
        It is where I try things out before using them anywhere else.
      </p>
    </section>
  );
};

export default HomelabSection;
