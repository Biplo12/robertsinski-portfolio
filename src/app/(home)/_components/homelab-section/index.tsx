import React from 'react';

import ServiceChip from './partials/service-chip';

interface Service {
  name: string;
  logo?: string;
}

interface Group {
  label: string;
  items: Service[];
}

const logo = (file: string): string => `/logos/homelab/${file}.svg`;

const groups: Group[] = [
  {
    label: 'Host',
    items: [
      { name: 'Proxmox', logo: logo('proxmox') },
      { name: 'Docker', logo: logo('docker') },
    ],
  },
  {
    label: 'Media',
    items: [
      { name: 'Plex', logo: logo('plex') },
      { name: 'Jellyfin', logo: logo('jellyfin') },
      { name: 'Tautulli', logo: logo('tautulli') },
      { name: 'Overseerr', logo: logo('overseerr') },
    ],
  },
  {
    label: 'Library',
    items: [
      { name: 'Radarr', logo: logo('radarr') },
      { name: 'Sonarr', logo: logo('sonarr') },
      { name: 'Lidarr', logo: logo('lidarr') },
      { name: 'Bazarr', logo: logo('bazarr') },
      { name: 'Prowlarr', logo: logo('prowlarr') },
    ],
  },
  {
    label: 'Home',
    items: [
      { name: 'Home Assistant', logo: logo('home-assistant') },
      { name: 'Frigate', logo: logo('frigate') },
      { name: 'Nextcloud', logo: logo('nextcloud') },
    ],
  },
  {
    label: 'Network',
    items: [
      { name: 'Nginx Proxy Manager', logo: logo('nginx-proxy-manager') },
      { name: 'DNS adblock' },
      { name: 'VPN' },
    ],
  },
];

const HomelabSection: React.FC = (): React.JSX.Element => {
  return (
    <section className='glass glass-sheen rounded-[2rem] px-8 pt-7 pb-8'>
      <h2 className='font-display text-lg font-semibold tracking-tight'>
        Homelab
      </h2>
      <p className='mt-2 max-w-[62ch] text-sm leading-relaxed text-foreground/70'>
        Everything below runs at home, on my own hardware. It is also where I
        break things without anybody filing a ticket.
      </p>

      <dl className='mt-6 grid gap-y-3 sm:grid-cols-[5.5rem_1fr] sm:gap-x-5'>
        {groups.map((group) => (
          <React.Fragment key={group.label}>
            <dt className='text-xs text-foreground/60 sm:pt-1.5'>
              {group.label}
            </dt>
            <dd className='flex flex-wrap gap-1.5'>
              {group.items.map((item) => (
                <ServiceChip
                  key={item.name}
                  name={item.name}
                  logo={item.logo}
                />
              ))}
            </dd>
          </React.Fragment>
        ))}
      </dl>
    </section>
  );
};

export default HomelabSection;
