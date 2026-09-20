import React from 'react';

import SectionHeader from '@/components/section-header';
import ShotGallery, { type Shot } from '@/components/shot-gallery';

interface ScreensSectionProps {
  title: string;
  note: string;
  shots: Shot[];
}

const ScreensSection: React.FC<ScreensSectionProps> = ({
  title,
  note,
  shots,
}): React.JSX.Element => {
  return (
    <section className='section-panel px-8 pt-7 pb-8'>
      <SectionHeader title={title} note={note} />
      <ShotGallery shots={shots} />
    </section>
  );
};

export default ScreensSection;
