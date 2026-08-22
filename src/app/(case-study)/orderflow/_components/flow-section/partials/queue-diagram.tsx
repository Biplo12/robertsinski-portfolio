import React from 'react';

interface Node {
  x: number;
  y: number;
  label: string;
  note: string;
}

const nodes: Node[] = [
  { x: 6, y: 14, label: 'Client', note: 'places an order' },
  { x: 158, y: 14, label: 'api', note: '202 accepted' },
  { x: 310, y: 14, label: 'PostgreSQL', note: 'order + outbox' },
  { x: 310, y: 94, label: 'outbox-relay', note: 'publishes events' },
  { x: 462, y: 94, label: 'Redis, BullMQ', note: 'the only channel' },
  { x: 6, y: 174, label: 'inventory', note: 'reserve, release' },
  { x: 158, y: 174, label: 'payment', note: 'charge once' },
  { x: 310, y: 174, label: 'notification', note: 'confirm' },
];

const arrows = [
  'M 140 40 L 154 40',
  'M 292 40 L 306 40',
  'M 376 68 L 376 90',
  'M 444 120 L 458 120',
  'M 528 148 L 528 162 L 72 162 L 72 172',
  'M 140 200 L 154 200',
  'M 292 200 L 306 200',
];

const QueueDiagram: React.FC = (): React.JSX.Element => {
  return (
    <div className='-mx-1 overflow-x-auto px-1 pb-1'>
      <svg
        viewBox='0 0 660 258'
        role='img'
        aria-label='The API writes the order and its event in one transaction, the relay publishes events to the queue, and three workers reserve stock, charge the card and send the confirmation'
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
            markerEnd='url(#flow-arrow)'
          />
        ))}

        <path
          d='M 224 228 L 224 242 L 72 242 L 72 228'
          fill='none'
          stroke='rgb(255 255 255 / 0.2)'
          strokeWidth='1.5'
          strokeDasharray='4 4'
          markerEnd='url(#flow-arrow)'
        />
        <text x={300} y={239} fill='currentColor' fontSize='10' opacity='0.5'>
          payment failed, release the reservation
        </text>

        <defs>
          <marker
            id='flow-arrow'
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

export default QueueDiagram;
