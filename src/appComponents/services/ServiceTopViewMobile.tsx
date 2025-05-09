import Description from "@/components/textTypes/Description";
import { IHeadingTypes, IHeadingTags } from "@/components/textTypes/Heading";
import UnderlinedHeading from "@/components/underlinedHeading/UnderlinedHeading";
import React from "react";

const ServiceTopViewMobile = () => {
  return (
    <div className="bg-serviceBgMobile bg-cover bg-no-repeat px-6 pt-[140px] h-[436px] ">
      {/* <div className="bg-overlayTeamBg w-full h-[436px] absolute top-0 left-0 z-0" /> */}
      <div className="w-full h-full flex flex-col gap-y-3 text-center items-center justify-center z-10">
        <UnderlinedHeading
          content="Our Services"
          type={IHeadingTypes.heading80}
          tagType={IHeadingTags.h1}
        />
        <Description content="Cosmic Security provides advanced, tailored solutions including on-site, mobile, and remote guarding to ensure round-the-clock protection. " />
      </div>
    </div>
  );
};

export default ServiceTopViewMobile;
