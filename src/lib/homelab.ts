export interface HomelabService {
  name: string;
  color: string;
  logo: string;
}

export interface HomelabGroup {
  label: string;
  items: HomelabService[];
}

export interface HomelabDecision {
  title: string;
  body: string;
}

const logo = (file: string): string => `/logos/homelab/${file}.svg`;

export const homelabGroups: HomelabGroup[] = [
  {
    label: 'Host',
    items: [
      { name: 'Proxmox', color: '#E57000', logo: logo('proxmox') },
      { name: 'Docker', color: '#2396ED', logo: logo('docker') },
      {
        name: 'Proxmox Backup Server',
        color: '#E57000',
        logo: logo('proxmox-backup-server'),
      },
    ],
  },
  {
    label: 'Media',
    items: [
      { name: 'Plex', color: '#E5A00D', logo: logo('plex') },
      { name: 'Jellyfin', color: '#00A4DC', logo: logo('jellyfin') },
      { name: 'Tautulli', color: '#E5A00D', logo: logo('tautulli') },
      { name: 'Overseerr', color: '#4F65F5', logo: logo('overseerr') },
    ],
  },
  {
    label: 'Library',
    items: [
      { name: 'Radarr', color: '#FFC230', logo: logo('radarr') },
      { name: 'Sonarr', color: '#00CCFF', logo: logo('sonarr') },
      { name: 'Lidarr', color: '#009252', logo: logo('lidarr') },
      { name: 'Bazarr', color: '#C8CDD8', logo: logo('bazarr') },
      { name: 'Prowlarr', color: '#E66001', logo: logo('prowlarr') },
    ],
  },
  {
    label: 'Home',
    items: [
      {
        name: 'Home Assistant',
        color: '#18BCF2',
        logo: logo('home-assistant'),
      },
      { name: 'Frigate', color: '#C8CDD8', logo: logo('frigate') },
      { name: 'Nextcloud', color: '#3784C9', logo: logo('nextcloud') },
    ],
  },
  {
    label: 'Network',
    items: [
      {
        name: 'Nginx Proxy Manager',
        color: '#FAA42F',
        logo: logo('nginx-proxy-manager'),
      },
      { name: 'Pi-hole', color: '#F42E1C', logo: logo('pi-hole') },
      { name: 'NetBird', color: '#F68330', logo: logo('netbird') },
      { name: 'Cloudflare', color: '#F4811F', logo: logo('cloudflare') },
    ],
  },
];

export const homelabDecisions: HomelabDecision[] = [
  {
    title: 'Two domains, one internal and one public',
    body: 'Services that only I use sit on subdomains of a domain that resolves inside the house. The few that other people use, Jellyfin and Plex, sit on a separate domain with Cloudflare in front of it. Keeping them apart means a name I give someone else has nothing private behind it, and the internal names are not visible from outside at all.',
  },
  {
    title: 'Getting in from outside goes through NetBird',
    body: 'For the internal domain there is nothing to connect to from the internet. My phone and laptop join the same private network as the services, a mesh built on WireGuard, so those names work from anywhere without being published. Everything that is not meant for other people lives only on that side.',
  },
  {
    title: 'Proxmox underneath, containers on top',
    body: 'The machine runs Proxmox rather than a plain Linux with Docker on it. That gives me two things. Snapshots before every risky change, so a bad update means rolling back instead of fixing it by hand. And separation between things that should not share a kernel, like the cameras and the file server.',
  },
  {
    title: 'The cameras never leave the house',
    body: 'Frigate does object detection on the GPU in the machine. Footage never leaves the house, there is no subscription tied to the cameras, and the recordings stay on my own disks. Without the GPU the processor could not keep up with several cameras at once.',
  },
  {
    title: 'Certificates for the internal services too',
    body: "Nginx Proxy Manager sits in front of both domains and issues Let's Encrypt certificates, validated over DNS. Nothing has to be reachable from the internet for that to work, so even the services nobody outside can reach get proper names and valid TLS instead of self-signed warnings.",
  },
  {
    title: 'Backups sit on a second machine',
    body: 'Proxmox Backup Server keeps deduplicated backups of the containers and virtual machines on its own storage. A copy on the same disk as the original goes with it when that disk dies. I also restore something from it every now and then, because otherwise I would not know if it works.',
  },
];
