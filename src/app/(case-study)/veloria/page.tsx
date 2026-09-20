import React from 'react';

import NotesSection from '@/components/notes-section';
import Reveal from '@/components/reveal';
import ScreensSection from '@/components/screens-section';

import { caseStudyMetadata } from '@/lib/case-study-page';
import { veloriaNotes, veloriaShots } from '@/lib/veloria';

import VeloriaHero from './_components/veloria-hero';

const description =
  'A site for a winery that does not exist: fifteen pages, no backend, and an interface coloured from its own hand-painted illustrations.';

export const metadata = caseStudyMetadata({
  title: 'Veloria Estate Winery, a case study',
  description,
  path: '/veloria',
});

const VeloriaPage: React.FC = (): React.JSX.Element => {
  return (
    <div className='flex flex-1 justify-center px-6 pt-8 pb-16'>
      <Reveal className='flex w-full max-w-[1080px] flex-col'>
        <VeloriaHero />

        <ScreensSection
          title='The pages'
          note='Four of the fifteen.'
          shots={veloriaShots}
        />

        <NotesSection
          title='How it is put together'
          note='Three rules the whole site follows.'
          notes={veloriaNotes}
        />
      </Reveal>
    </div>
  );
};

export default VeloriaPage;
