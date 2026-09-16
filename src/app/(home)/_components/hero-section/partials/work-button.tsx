import React from 'react';

const WorkButton: React.FC = (): React.JSX.Element => {
  return (
    <a
      href='#projects'
      className='hero-pill hero-pill-quiet inline-flex h-[46px] items-center px-6 type-body text-foreground'
    >
      <span className='relative'>View Recent Work</span>
    </a>
  );
};

export default WorkButton;
