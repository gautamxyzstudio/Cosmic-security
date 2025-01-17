import Button from "@/components/button/Button";
import Description from "@/components/textTypes/Description";
import Heading, {
  IHeadingTags,
  IHeadingTypes,
} from "@/components/textTypes/Heading";
import { STRINGS } from "@/constants/en";
import React from "react";

const OurTeamTop = () => {
  return (
    <section className="bg-ourTeamTopBg bg-cover bg-center bg-no-repeat w-full h-full">
      <div className="px-6 lg:px-20 bg-overlayTeamBg">
        <div className=" pt-[127px]  lg:pt-[244px] pb-20 text-white flex flex-col gap-y-3 lg:gap-y-6 lg:w-[848px]">
          <div className="flex flex-col gap-y-2 lg:gap-y-4">
            <Description content={STRINGS.join_us} customClasses="uppercase !text-primary lg:!text-white " />
            <div>
              <Heading
                content={STRINGS.for_pvt}
                type={IHeadingTypes.heading80}
              />
              <div className="flex gap-x-3">
                <Heading
                  content={STRINGS.security}
                  type={IHeadingTypes.heading80}
                  tagType={IHeadingTags.h3}
                />
                <Heading
                  content={STRINGS.training}
                  type={IHeadingTypes.heading80}
                  tagType={IHeadingTags.h2}
                />
              </div>
            </div>
            <Description
              content={STRINGS.team_dec}
              customClasses="!w-[90%] lg:!w-[72%]"
              
            />
          </div>
          <Button
            title={STRINGS.register}
            customStyles="!py-3 px-6 w-[220px] !text-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default OurTeamTop;
