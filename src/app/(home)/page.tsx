import React from 'react';

import GithubSection from './_components/github-section';
import HeroSection from './_components/hero-section';
import HomelabSection from './_components/homelab-section';
import InterestsSection from './_components/interests-section';
import ProjectsSection from './_components/projects-section';
import ResumeSection from './_components/resume-section';
import SiteFooter from './_components/site-footer';
import TechSection from './_components/tech-section';

const HomePage: React.FC = (): React.JSX.Element => {
  return (
    <div className='flex flex-1 justify-center px-6 py-16'>
      <div className='stagger flex w-full max-w-3xl flex-col gap-4'>
        <HeroSection />
        <ResumeSection />
        <ProjectsSection />
        <TechSection />
        <GithubSection />
        <HomelabSection />
        <InterestsSection />
        <SiteFooter />
      </div>
    </div>
  );
};

export default HomePage;
