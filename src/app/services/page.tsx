import HomeChooseUsCard from "@/appComponents/home/HomeChooseUsCard";
import ServicesTopView from "@/appComponents/services/ServicesTopView";
import ServiceTopViewMobile from "@/appComponents/services/ServiceTopViewMobile";
import WhyNeedSecurity from "@/appComponents/services/WhyNeedSecurity";
import React from "react";
import { icons } from "../../../public/exporter";
import ServicesServiceSectionMobile from "@/appComponents/services/ServicesServiceSectionMobile";

const Services = () => {
  return (
    <div className="max-w-screen-2xl mb-3 md:mb-6 xl:mb-32 mx-auto">
      <div className="hidden md:flex">
        <ServicesTopView />
      </div>
      <div className="md:hidden">
        <ServiceTopViewMobile />
        <div className="mx-6 mt-6 flex flex-col gap-y-6">
          {[
            {
              icon: icons.ON_SITE_GUARDING_SECONDARY_ICON,
              title: "On-site Guarding",
            },
            {
              icon: icons.MOBILE_GUARDING_SECONDARY_ICON,
              title: "Mobile Guarding",
            },
            {
              icon: icons.REMOTE_GUARDING_SECONDARY_ICON,
              title: "Remote Guarding",
            },
          ].map(({ icon, title }, index) => (
            <HomeChooseUsCard
              key={index}
              icon={icon}
              customClass="!w-full !min-h-[220px] !py-6 clip-path-myPolygonServicesTopCard"
              title={title}
              descriptionClass="!text-sm"
              decs="Cosmic Security redefines security with remote guarding, integrating state-of-the-art CCTV technology for proactive surveillance and immediate response. Your property's protection is our priority, even from a distance."
            />
          ))}
        </div>
      </div>
      <div className="xl:hidden">
        <ServicesServiceSectionMobile />
      </div>
      <WhyNeedSecurity />
    </div>
  );
};

export default Services;
