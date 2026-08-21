import React from 'react';

import PolishFlag from './polish-flag';

const LocationPill: React.FC = (): React.JSX.Element => {
  return (
    <span className='glass-pill inline-flex items-center gap-1.5 rounded-full py-1 pr-3 pl-2 text-xs text-foreground'>
      <PolishFlag />
      Katowice
    </span>
  );
};

export default LocationPill;
