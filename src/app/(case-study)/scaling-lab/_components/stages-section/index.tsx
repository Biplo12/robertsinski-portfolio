import React from 'react';

import DiagramFrame from '@/components/diagram-frame';
import SectionHeader from '@/components/section-header';

import { scalingStages } from '@/lib/scaling-lab';

import CapacityChart from './partials/capacity-chart';

const StagesSection: React.FC = (): React.JSX.Element => {
  return (
    <section className='section-panel px-8 pt-7 pb-8'>
      <SectionHeader
        title='Eight steps'
        note='Capacity is the highest rate the server kept up with. Same machine throughout.'
      />

      <div className='mt-6'>
        <DiagramFrame caption='Capacity in requests per second, measured from zero.'>
          <CapacityChart />
        </DiagramFrame>
      </div>

      {/* p99 is at 2000 requests asked for, which only means anything once the
          server could be pushed that far. */}
      <div className='-mx-1 mt-7 overflow-x-auto px-1'>
        <table className='w-full min-w-[520px] border-collapse text-left'>
          <thead>
            <tr className='border-b border-white/10'>
              <th className='pb-2 pr-4 type-meta font-normal text-ink-faint'>
                Step
              </th>
              <th className='pb-2 pr-4 type-meta font-normal text-ink-faint'>
                Change
              </th>
              <th className='pb-2 pr-4 type-meta font-normal text-ink-faint'>
                Capacity
              </th>
              <th className='pb-2 pr-4 type-meta font-normal text-ink-faint'>
                p95 there
              </th>
              <th className='pb-2 type-meta font-normal text-ink-faint'>
                p99 at 2000
              </th>
            </tr>
          </thead>

          <tbody>
            {scalingStages.map((stage) => (
              <tr key={stage.step} className='border-b border-white/8'>
                <td className='py-3 pr-4 type-meta text-ink-faint'>
                  {String(stage.step).padStart(2, '0')}
                </td>
                <td className='py-3 pr-4 type-body text-ink'>
                  {stage.change}
                </td>
                <td className='py-3 pr-4 type-body text-ink-strong'>
                  {`${stage.capacity} RPS`}
                </td>
                <td className='py-3 pr-4 type-body text-ink-muted'>
                  {stage.p95}
                </td>
                <td className='py-3 type-body text-ink-muted'>
                  {stage.p99 ?? ''}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className='mt-5 max-w-[62ch] type-meta text-ink-faint'>
        Step 6 sits at the same capacity as step 5. It did not add throughput,
        it put a ceiling on latency above capacity, so only the last column
        moves.
      </p>
    </section>
  );
};

export default StagesSection;
