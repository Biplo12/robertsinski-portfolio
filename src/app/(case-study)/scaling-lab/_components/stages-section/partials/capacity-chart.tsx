import React from 'react';

import { scalingStages } from '@/lib/scaling-lab';

/* A viewBox near 660, like the other diagrams, so the type lands at about the
   size of the page around it. */
const ROW = 26;
const BAR = 14;
const PLOT_X = 22;
const PLOT_W = 500;
const WIDTH = 660;

/* Linear and measured from zero. A log scale would fit step 1 on the page and
   flatten the point of the chart, so every bar is labelled instead. */
const max = Math.max(...scalingStages.map((stage) => stage.capacity));
const height = scalingStages.length * ROW;

const CapacityChart: React.FC = (): React.JSX.Element => {
  return (
    <div className='-mx-1 overflow-x-auto px-1 pb-1'>
      <svg
        viewBox={`0 0 ${WIDTH} ${height}`}
        role='img'
        aria-label='Capacity by step, in requests per second: 1, then 30, 120, 400, 1200, 1200, 2000 and 2600'
        className='h-auto w-full min-w-[440px] sm:min-w-0'
      >
        <line
          x1={PLOT_X}
          y1={0}
          x2={PLOT_X}
          y2={height}
          stroke='currentColor'
          strokeOpacity={0.14}
        />

        {scalingStages.map((stage, index) => {
          const y = index * ROW;
          const width = (stage.capacity / max) * PLOT_W;

          return (
            <g key={stage.step}>
              <text
                x={0}
                y={y + ROW / 2}
                dominantBaseline='central'
                fill='currentColor'
                fillOpacity={0.42}
                fontSize='10'
              >
                {stage.step}
              </text>

              <rect
                x={PLOT_X}
                y={y + (ROW - BAR) / 2}
                width={width}
                height={BAR}
                fill='var(--signal)'
              />

              <text
                x={PLOT_X + width + 10}
                y={y + ROW / 2}
                dominantBaseline='central'
                fill='currentColor'
                fillOpacity={0.85}
                fontSize='12'
              >
                {`${stage.capacity} RPS`}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
};

export default CapacityChart;
