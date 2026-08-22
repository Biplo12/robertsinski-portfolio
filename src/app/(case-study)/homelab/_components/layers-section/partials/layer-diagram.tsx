import React from 'react';

interface Box {
  x: number;
  y: number;
  width: number;
  label: string;
  note: string;
}

const boxes: Box[] = [
  {
    x: 6,
    y: 14,
    width: 300,
    label: 'NetBird',
    note: 'my phone and laptop, internal domain',
  },
  {
    x: 354,
    y: 14,
    width: 300,
    label: 'Cloudflare',
    note: 'Jellyfin and Plex, public domain',
  },
  {
    x: 6,
    y: 96,
    width: 648,
    label: 'Nginx Proxy Manager',
    note: 'a name and a certificate per service',
  },
  {
    x: 6,
    y: 178,
    width: 648,
    label: 'Docker',
    note: 'the services themselves',
  },
  {
    x: 6,
    y: 260,
    width: 300,
    label: 'Proxmox',
    note: 'machines, snapshots',
  },
  {
    x: 354,
    y: 260,
    width: 300,
    label: 'Proxmox Backup Server',
    note: 'deduplicated, separate storage',
  },
];

const arrows = [
  'M 156 68 L 156 92',
  'M 504 68 L 504 92',
  'M 156 150 L 156 174',
  'M 156 232 L 156 256',
  'M 308 286 L 350 286',
];

const LayerDiagram: React.FC = (): React.JSX.Element => {
  return (
    <div className='-mx-1 overflow-x-auto px-1 pb-1 sm:mx-0 sm:overflow-visible sm:px-0 sm:pb-0'>
      <svg
        viewBox='0 0 660 326'
        role='img'
        aria-label='Two ways in: my own devices over NetBird on the internal domain, and everyone else over Cloudflare on the public domain. Both land on Nginx Proxy Manager, which passes them to the services in Docker, running on Proxmox, with Proxmox Backup Server keeping copies on separate storage'
        className='h-auto w-full min-w-[560px] sm:min-w-0'
      >
        {boxes.map((box) => (
          <g key={box.label}>
            <rect
              x={box.x}
              y={box.y}
              width={box.width}
              height={52}
              rx={12}
              fill='rgb(255 255 255 / 0.08)'
              stroke='rgb(255 255 255 / 0.18)'
            />
            <text
              x={box.x + box.width / 2}
              y={box.y + 22}
              textAnchor='middle'
              fill='currentColor'
              fontSize='13'
            >
              {box.label}
            </text>
            <text
              x={box.x + box.width / 2}
              y={box.y + 39}
              textAnchor='middle'
              fill='currentColor'
              fontSize='10'
              opacity='0.55'
            >
              {box.note}
            </text>
          </g>
        ))}

        {arrows.map((path) => (
          <path
            key={path}
            d={path}
            fill='none'
            stroke='rgb(255 255 255 / 0.28)'
            strokeWidth='1.5'
            markerEnd='url(#layer-arrow)'
          />
        ))}

        <defs>
          <marker
            id='layer-arrow'
            viewBox='0 0 10 10'
            refX='8'
            refY='5'
            markerWidth='6'
            markerHeight='6'
            orient='auto-start-reverse'
          >
            <path d='M 0 0 L 10 5 L 0 10 z' fill='rgb(255 255 255 / 0.35)' />
          </marker>
        </defs>
      </svg>
    </div>
  );
};

export default LayerDiagram;
