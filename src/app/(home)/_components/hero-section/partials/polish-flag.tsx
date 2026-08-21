import React from 'react';

const PolishFlag: React.FC = (): React.JSX.Element => {
  return (
    <span
      role='img'
      aria-label='Poland'
      className='inline-flex h-3 w-[1.2rem] shrink-0 flex-col overflow-hidden rounded-[1px] ring-1 ring-white/25'
    >
      <span className='h-1/2 bg-[#efe9dd]' />
      <span className='h-1/2 bg-[#c33b45]' />
    </span>
  );
};

export default PolishFlag;
