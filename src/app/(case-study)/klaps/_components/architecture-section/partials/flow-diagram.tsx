import React from 'react';

interface Node {
  x: number;
  y: number;
  label: string;
  note: string;
}

const BOX_W = 124;
const BOX_H = 52;

/* A hub, not a chain. Everything on the right hangs off the API, which is the
   rule this project is built on: one writer, one owner of the database. An
   earlier version ran these boxes in a line and invented a path from the admin
   panel through the bot to the mailer, which does not exist. */
const nodes: Node[] = [
  { x: 6, y: 114, label: 'Cinema sites', note: '563 of them' },
  { x: 162, y: 114, label: 'Collector', note: 'schedule, enrich' },
  { x: 318, y: 114, label: 'API', note: 'owns the data' },
  { x: 490, y: 36, label: 'Site', note: 'klaps.space' },
  { x: 490, y: 114, label: 'Studio', note: 'admin panel' },
  { x: 490, y: 192, label: 'Radar bot', note: 'social posts' },
  { x: 646, y: 36, label: 'Outreach', note: 'emails cinemas' },
];

const arrows = ['M 130 140 L 158 140', 'M 286 140 L 314 140'];

/* Off the spine: the site and the bot only read. */
const reads = ['M 460 62 L 486 62', 'M 460 218 L 486 218'];

const ARROW = 'url(#arrow)';

const FlowDiagram: React.FC = (): React.JSX.Element => {
  return (
    <div className='-mx-1 overflow-x-auto px-1 pb-1'>
      <svg
        viewBox='0 0 776 244'
        role='img'
        aria-label='Cinema sites feed the collector, the collector writes to the API in batches, and the site, the admin panel and the social bot all read from the API. The admin panel is the one that also writes back. The mailer reads the sitemap the site publishes.'
        className='h-auto w-full min-w-[620px] sm:min-w-0'
      >
        {nodes.map((node) => (
          <g key={node.label}>
            <rect
              x={node.x}
              y={node.y}
              width={BOX_W}
              height={BOX_H}
              rx={12}
              fill='rgb(255 255 255 / 0.08)'
              stroke='rgb(255 255 255 / 0.18)'
            />
            <text
              x={node.x + BOX_W / 2}
              y={node.y + 22}
              textAnchor='middle'
              fill='currentColor'
              fontSize='13'
            >
              {node.label}
            </text>
            <text
              x={node.x + BOX_W / 2}
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

        {[...arrows, ...reads, 'M 614 62 L 642 62'].map((path) => (
          <path
            key={path}
            d={path}
            fill='none'
            stroke='rgb(255 255 255 / 0.28)'
            strokeWidth='1.5'
            markerEnd={ARROW}
          />
        ))}

        {/* The stub and the spine carry no head: they are the fan-out, not a
            direction of their own. */}
        <path
          d='M 442 140 L 460 140'
          fill='none'
          stroke='rgb(255 255 255 / 0.28)'
          strokeWidth='1.5'
        />
        <path
          d='M 460 62 L 460 218'
          fill='none'
          stroke='rgb(255 255 255 / 0.28)'
          strokeWidth='1.5'
        />

        {/* Two heads: the admin panel is the one reader that writes back, and
            it goes through the API like everything else. */}
        <path
          d='M 460 140 L 486 140'
          fill='none'
          stroke='rgb(255 255 255 / 0.28)'
          strokeWidth='1.5'
          markerStart={ARROW}
          markerEnd={ARROW}
        />

        <text x={300} y={104} textAnchor='middle' fill='currentColor' fontSize='10' opacity='0.55'>
          batch writes
        </text>

        <text x={628} y={26} textAnchor='middle' fill='currentColor' fontSize='10' opacity='0.55'>
          sitemap
        </text>

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
