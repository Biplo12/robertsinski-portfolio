import React from 'react';

interface Node {
  x: number;
  y: number;
  label: string;
  note: string;
}

const nodes: Node[] = [
  { x: 6, y: 18, label: 'Cinema listings', note: 'public sources' },
  { x: 172, y: 18, label: 'Collector', note: 'schedule, enrich' },
  { x: 338, y: 18, label: 'API', note: 'owns the data' },
  { x: 504, y: 18, label: 'Site', note: 'klaps.space' },
  { x: 504, y: 96, label: 'Radar bot', note: 'social posts' },
  { x: 338, y: 96, label: 'Studio', note: 'admin panel' },
  { x: 504, y: 174, label: 'Outreach', note: 'emails cinemas' },
];

const arrows = [
  'M 138 44 L 168 44',
  'M 304 44 L 334 44',
  'M 470 44 L 500 44',
  'M 401 70 L 401 92',
  'M 470 122 L 500 122',
  'M 567 70 L 567 92',
  'M 567 148 L 567 170',
];

const FlowDiagram: React.FC = (): React.JSX.Element => {
  return (
    <div className='-mx-1 overflow-x-auto px-1 pb-1'>
      <svg
        viewBox='0 0 660 226'
        role='img'
        aria-label='Cinema listings feed the collector, the collector writes to the API, and the site, admin panel, social bot and mailer all read from it'
        className='h-auto w-full min-w-[560px] sm:min-w-0'
      >
        {nodes.map((node) => (
          <g key={node.label}>
            <rect
              x={node.x}
              y={node.y}
              width={132}
              height={52}
              rx={12}
              fill='rgb(255 255 255 / 0.08)'
              stroke='rgb(255 255 255 / 0.18)'
            />
            <text
              x={node.x + 66}
              y={node.y + 22}
              textAnchor='middle'
              fill='currentColor'
              fontSize='13'
            >
              {node.label}
            </text>
            <text
              x={node.x + 66}
              y={node.y + 39}
              textAnchor='middle'
              fill='currentColor'
              fontSize='10'
              opacity='0.55'
            >
              {node.note}
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
            markerEnd='url(#arrow)'
          />
        ))}

        <defs>
          <marker
            id='arrow'
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

export default FlowDiagram;
