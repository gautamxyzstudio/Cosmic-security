import ServicesTopView from '@/appComponents/services/ServicesTopView';
import WhyNeedSecurity from '@/appComponents/services/WhyNeedSecurity';
import React from 'react';

const Services = () => {
  return (
    <div className="max-w-screen-2xl mb-80 mx-auto">
      <ServicesTopView />
      <WhyNeedSecurity />
    </div>
  );
};

export default Services;
