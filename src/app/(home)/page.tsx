import React from "react";

import HeroSection from "./_components/hero-section";

const HomePage: React.FC = (): React.JSX.Element => {
  return (
    <div className="flex flex-1 items-center justify-center p-6">
      <HeroSection />
    </div>
  );
};

export default HomePage;
