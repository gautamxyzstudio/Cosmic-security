import Heading, {
  IHeadingTags,
  IHeadingTypes,
} from "@/components/textTypes/Heading";
import { STRINGS } from "@/constants/en";
import React from "react";
import Button from "@/components/button/Button";
import HomeAboutUsLottie from "../lotties/HomeAboutUsLottie";
import Description from "@/components/textTypes/Description";

const HomeAbout = () => {
  return (
    <div className="px-6  xl:px-20 bg-background pt-6 md:pt-14 xl:pt-10">
      <Heading
        type={IHeadingTypes.heading56}
        customClasses="!w-[75%] hidden xl:inline-block !leading-[4rem]"
        tagType={IHeadingTags.h2}
        content={STRINGS.homeAboutHeading}
      />
      <div className="flex justify-between flex-wrap md:flex-nowrap items-center flex-row mt-0 xl:mt-6 md:gap-x-[22px]">
        <div className="w-full md:w-[39%]  xl:w-[45%] flex justify-center ">
          <HomeAboutUsLottie />
        </div>
        <Heading
          type={IHeadingTypes.heading56}
          customClasses="md:hidden mt-6 inline-block"
          tagType={IHeadingTags.h2}
          content={STRINGS.homeAboutHeading}
        />
        <div className=" w-full mt-3 xl:mt-0 md:w-[60%] xl:w-[45%] ">
          <Heading
            type={IHeadingTypes.heading56}
            customClasses="hidden mb-4 md:inline-block xl:hidden"
            tagType={IHeadingTags.h2}
            content={STRINGS.homeAboutHeading}
          />
          <Description content={STRINGS.homeAboutDec} customClasses="md:!text-sm" />
          <Button
            customStyles=" py-2 md:py-3 rounded-md mt-4 xl:mt-6 w-[104px] md:w-[112px] xl:w-[124px] h-10 md:h-12 xl:h-14"
            title={STRINGS.view}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
