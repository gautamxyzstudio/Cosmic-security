import HomeChooseUsCard from '@/appComponents/home/HomeChooseUsCard';
import React from 'react';
import { icons } from '../../../public/exporter';
import ServicesServiceSection from '@/appComponents/services/ServicesServiceSection';
import ServicesTopView from '@/appComponents/services/ServicesTopView';
import ServiceTopViewMobile from '@/appComponents/services/ServiceTopViewMobile';
import WhyNeedSecurity from '@/appComponents/services/WhyNeedSecurity';
import ServicesServiceSectionMobile from '@/appComponents/services/ServicesServiceSectionMobile';

const Services = () => {
  return (
    <div className="max-w-screen-2xl mb-3 md:mb-6 xl:mb-32 mx-auto">
      <div className="hidden md:flex">
        <ServicesTopView />
      </div>
      <div className="md:hidden">
        <ServiceTopViewMobile />
        <div className="mx-6 mt-6 flex flex-col gap-y-6">
          <HomeChooseUsCard
            icon={icons.ON_SITE_GUARDING_SECONDARY_ICON}
            customClass="!w-full !min-h-[220px] "
            title={'On-site Guarding'}
            descriptionClass="!text-sm"
            decs={
              "Cosmic Security redefines security with remote guarding, integrating state-of-the-art CCTV technology for proactive surveillance and immediate response. Your property's protection is our priority, even from a distance."
            }
          />
          <HomeChooseUsCard
            icon={icons.MOBILE_GUARDING_SECONDARY_ICON}
            customClass="!w-full !min-h-[220px] "
            title={'Mobile Guarding'}
            descriptionClass="!text-sm"
            decs={
              "Cosmic Security redefines security with remote guarding, integrating state-of-the-art CCTV technology for proactive surveillance and immediate response. Your property's protection is our priority, even from a distance."
            }
          />
          <HomeChooseUsCard
            icon={icons.REMOTE_GUARDING_SECONDARY_ICON}
            customClass="!w-full !min-h-[220px]"
            title={'Remote Guarding'}
            descriptionClass="!text-sm"
            decs={
              "Cosmic Security redefines security with remote guarding, integrating state-of-the-art CCTV technology for proactive surveillance and immediate response. Your property's protection is our priority, even from a distance."
            }
          />
        </div>
      </div>
      <div className="hidden xl:flex flex-col">
        <ServicesServiceSection />
      </div>
      <div className="visible xl:hidden">
        <ServicesServiceSectionMobile />
      </div>
      ` <WhyNeedSecurity />`
    </div>
  );
};

export default Services;
