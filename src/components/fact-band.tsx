import React from 'react';

interface Fact {
  value: string;
  label: string;
}

interface FactBandProps {
  facts: Fact[];
}

/** A row of headline numbers: how much of the thing there actually is. */
const FactBand: React.FC<FactBandProps> = ({ facts }): React.JSX.Element => {
  return (
    <dl className='grid grid-cols-2 gap-x-8 gap-y-7 sm:grid-cols-4'>
      {facts.map((fact) => (
        /* Reversed, so the value reads first while the term still comes
           before its definition in the markup. */
        <div key={fact.label} className='flex flex-col-reverse gap-1'>
          <dt className='type-meta text-ink-faint'>{fact.label}</dt>
          <dd className='type-title text-ink-strong tabular-nums'>
            {fact.value}
          </dd>
        </div>
      ))}
    </dl>
  );
};

export default FactBand;
