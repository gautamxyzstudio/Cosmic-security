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
    <section className="bg-ourTeamTopBg bg-cover bg-no-repeat px-20 w-full h-full">
      <div className="pt-[244px] pb-[112px] text-white flex flex-col gap-y-6 w-[848px] ">
        <div className="flex flex-col gap-y-4">
          <Description content={STRINGS.join_us} customClasses="uppercase" />
          <div>
            <Heading content={STRINGS.for_pvt} type={IHeadingTypes.heading56} />
            <div className="flex gap-x-3">
              <Heading
                content={STRINGS.security}
                type={IHeadingTypes.heading56}
                tagType={IHeadingTags.h3}
              />
              <Heading
                content={STRINGS.training}
                type={IHeadingTypes.heading56}
                tagType={IHeadingTags.h2}
              />
            </div>
          </div>
          <Description content={STRINGS.team_dec} customClasses="!w-[72%]" />
        </div>
        <Button
          title={STRINGS.register}
          customStyles="!py-3 px-6 w-[220px] !text-2xl"
        />
      </div>
    </section>
  );
};

export default OurTeamTop;
