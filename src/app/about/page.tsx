import AboutBusinessPlanSection from '@/appComponents/about/AboutBusinessPlanSection';
import AboutMidSection from '@/appComponents/about/AboutMidSection';
import AboutTestimonialSection from '@/appComponents/about/AboutTestimonialSection';
import AboutTopView from '@/appComponents/about/AboutTopView';
import React from 'react';

const About = () => {
  return (
    <div className="max-w-screen-2xl xl:mb-32 mx-auto">
      <AboutTopView />
      <AboutMidSection />
      <AboutTestimonialSection />
      <AboutBusinessPlanSection />
    </div>
  );
};

export default About;
