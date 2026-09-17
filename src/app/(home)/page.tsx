import React from 'react';

import { resolveExperience } from '@/lib/experience';

import Reveal from '@/components/reveal';

import AwaySection from './_components/away-section';
import GithubSection from './_components/github-section';
import HeroSection from './_components/hero-section';
import ProjectsSection from './_components/projects-section';
import ResumeSection from './_components/resume-section';
import SiteFooter from './_components/site-footer';
import SiteNav from './_components/site-nav';
import TechSection from './_components/tech-section';

const HomePage: React.FC = (): React.JSX.Element => {
  return (
    <div className='flex flex-1 flex-col items-center px-6 pt-8 pb-16'>
      <SiteNav />
      <div className='w-full max-w-[1080px]'>
        <HeroSection />
      </div>

      <Reveal className='mt-12 flex w-full max-w-[1080px] flex-col gap-3'>
        <ResumeSection jobs={resolveExperience()} />
        <ProjectsSection />
        <GithubSection />
        <TechSection />
        <AwaySection />
        <SiteFooter />
      </Reveal>
    </div>
  );
};

export default HomePage;
