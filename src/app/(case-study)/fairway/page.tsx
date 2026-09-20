import React from 'react';

import NotesSection from '@/components/notes-section';
import Reveal from '@/components/reveal';
import ScreensSection from '@/components/screens-section';

import { caseStudyMetadata } from '@/lib/case-study-page';
import { fairwayDisclaimer, fairwayNotes, fairwayShots } from '@/lib/fairway';

import FairwayHero from './_components/fairway-hero';

const description =
  'A storefront for a golf shop that does not exist: 515 products across twelve makers, every product page prerendered, and no CMS.';

export const metadata = caseStudyMetadata({
  title: 'FAIRWAY, a case study',
  description,
  path: '/fairway',
});

const FairwayPage: React.FC = (): React.JSX.Element => {
  return (
    <div className='flex flex-1 justify-center px-6 pt-8 pb-16'>
      <Reveal className='flex w-full max-w-[1080px] flex-col'>
        <FairwayHero />

        <ScreensSection
          title='The pages'
          note='The home page, a shelf, a product and the brand index.'
          shots={fairwayShots}
        />

        <NotesSection
          title='Decisions'
          note='Three that shaped the rest of the shop.'
          notes={fairwayNotes}
          footnote={fairwayDisclaimer}
        />
      </Reveal>
    </div>
  );
};

export default FairwayPage;
