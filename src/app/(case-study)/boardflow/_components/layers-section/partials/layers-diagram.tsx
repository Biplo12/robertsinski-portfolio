import React from 'react';

interface Node {
  x: number;
  label: string;
  note: string;
  items: string[];
}

const BOX_W = 190;
const BOX_H = 52;

/* One canvas, two stores, split by how long the data has to last. */
const canvas = { x: 235, y: 16 };

const stores: Node[] = [
  {
    x: 40,
    label: 'The room',
    note: 'while someone is looking',
    items: ['cursors, selections,', 'the stroke being drawn'],
  },
  {
    x: 430,
    label: 'The database',
    note: 'has to survive a refresh',
    items: ['accounts, organisations,', 'boards, invitations'],
  },
];

const LayersDiagram: React.FC = (): React.JSX.Element => {
  return (
    <div className='-mx-1 overflow-x-auto px-1 pb-1'>
      <svg
        viewBox='0 0 660 226'
        role='img'
        aria-label='The canvas in the browser splits into two stores: a Liveblocks room for what only matters while someone is looking, such as cursors, selections and the stroke being drawn, and a Convex database for what has to survive a refresh, such as accounts, organisations, boards and invitations.'
        className='h-auto w-full min-w-[520px] sm:min-w-0'
      >
        <rect
          x={canvas.x}
          y={canvas.y}
          width={BOX_W}
          height={BOX_H}
          rx={12}
          fill='rgb(255 255 255 / 0.08)'
          stroke='rgb(255 255 255 / 0.18)'
        />
        <text
          x={canvas.x + BOX_W / 2}
          y={canvas.y + 22}
          textAnchor='middle'
          fill='currentColor'
          fontSize='13'
        >
          The canvas
        </text>
        <text
          x={canvas.x + BOX_W / 2}
          y={canvas.y + 39}
          textAnchor='middle'
          fill='currentColor'
          fontSize='10'
          opacity='0.55'
        >
          what you draw on
        </text>

        <path
          d='M 330 68 L 330 100 M 135 100 L 525 100'
          fill='none'
          stroke='rgb(255 255 255 / 0.28)'
          strokeWidth='1.5'
        />

        {stores.map((store) => (
          <g key={store.label}>
            <path
              d={`M ${store.x + BOX_W / 2} 100 L ${store.x + BOX_W / 2} 128`}
              fill='none'
              stroke='rgb(255 255 255 / 0.28)'
              strokeWidth='1.5'
              markerEnd='url(#layer-arrow)'
            />

            <rect
              x={store.x}
              y={132}
              width={BOX_W}
              height={BOX_H}
              rx={12}
              fill='rgb(255 255 255 / 0.08)'
              stroke='rgb(255 255 255 / 0.18)'
            />
            <text
              x={store.x + BOX_W / 2}
              y={154}
              textAnchor='middle'
              fill='currentColor'
              fontSize='13'
            >
              {store.label}
            </text>
            <text
              x={store.x + BOX_W / 2}
              y={171}
              textAnchor='middle'
              fill='currentColor'
              fontSize='10'
              opacity='0.55'
            >
              {store.note}
            </text>

            {store.items.map((item, index) => (
              <text
                key={item}
                x={store.x + BOX_W / 2}
                y={204 + index * 14}
                textAnchor='middle'
                fill='currentColor'
                fontSize='10'
                opacity='0.42'
              >
                {item}
              </text>
            ))}
          </g>
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

export default LayersDiagram;
