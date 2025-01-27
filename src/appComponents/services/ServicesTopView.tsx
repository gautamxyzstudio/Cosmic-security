import Description from "@/components/textTypes/Description";
import { IHeadingTags, IHeadingTypes } from "@/components/textTypes/Heading";
import React from "react";
import HomeChooseUsCard from "../home/HomeChooseUsCard";
import { icons } from "../../../public/exporter";
import UnderlinedHeading from "@/components/underlinedHeading/UnderlinedHeading";

const ServicesTopView = () => {
  const servicesData = [
    {
      icon: icons.ON_SITE_GUARDING_SECONDARY_ICON,
      title: "On-site Guarding",
      description: "Cosmic Security redefines security with remote guarding, integrating state-of-the-art CCTV technology for proactive surveillance and immediate response. Your property's protection is our priority, even from a distance."
    },
    {
      icon: icons.MOBILE_GUARDING_SECONDARY_ICON,
      title: "Mobile Guarding",
      description: "Cosmic Security redefines security with remote guarding, integrating state-of-the-art CCTV technology for proactive surveillance and immediate response. Your property's protection is our priority, even from a distance."
    },
    {
      icon: icons.REMOTE_GUARDING_SECONDARY_ICON,
      title: "Remote Guarding",
      description: "Cosmic Security redefines security with remote guarding, integrating state-of-the-art CCTV technology for proactive surveillance and immediate response. Your property's protection is our priority, even from a distance."
    }
  ];

  return (
    <div className="w-full px-6 xl:px-20 h-screen xl:pt-20 bg-no-repeat bg-[length:100%_70%] xl:bg-[length:100%_80.7%] bg-servicesTopBg max-h-[824px] xl:max-h-[920px] flex flex-col items-center gap-y-20 xl:gap-y-28">
      <div className="w-[584px] xl:w-[856px] flex flex-col justify-center items-center text-center gap-y-4 xl:gap-y-6 pt-[282px] lg:pt-[245px] xl:pt-[232px]">
        <UnderlinedHeading
          content="Our Services"
          type={IHeadingTypes.heading80}
          tagType={IHeadingTags.h1}
        />
        <Description
          content="Lorem ipsum dolor sit amet consectetur. Sodales volutpat lectus ut elementum semper nibh feugiat. Interdum faucibus maecenas pulvinar malesuada cursus turpis pretium."
        />
      </div>
      <div className="flex flex-row justify-between w-full">
        {servicesData.map((service, index) => (
          <HomeChooseUsCard
            key={index}
            icon={service.icon}
            customClass="!w-[224px] !min-h-[284px] lg:!w-[300px] xl:!w-[408px] xl:!min-h-[238px]"
            title={service.title}
            decs={service.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesTopView;
