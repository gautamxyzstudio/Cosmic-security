import Heading, {
  IHeadingTags,
  IHeadingTypes,
} from '@/components/textTypes/Heading';
import { STRINGS } from '@/constants/en';
import React from 'react';

import Description, {
  IDescriptionTypes,
} from '@/components/textTypes/Description';
import Button from '@/components/button/Button';

import HomeAboutUsLottie from '../lotties/HomeAboutUsLottie';

const HomeAbout = () => {
  return (
    <div className="px-6  xl:px-20 bg-background  pt-6  xl:pt-10">
      <Heading
        type={IHeadingTypes.heading56}
        customClasses="!w-[75%] hidden xl:inline-block !leading-[4rem]"
        tagType={IHeadingTags.h2}
        content={STRINGS.homeAboutHeading}
      />
      <div className="flex justify-between flex-wrap xl:flex-nowrap items-center flex-row mt-0 xl:mt-6">
        <div className="w-full  xl:w-[45%] flex justify-center">
          <HomeAboutUsLottie />
        </div>
        <Heading
          type={IHeadingTypes.heading56}
          customClasses="xl:hidden mt-6 inline-block"
          tagType={IHeadingTags.h2}
          content={STRINGS.homeAboutHeading}
        />
        <div className=" w-full mt-3 xl:mt-0 xl:w-[45%]">
          <Description
            type={IDescriptionTypes.dec24}
            content={STRINGS.homeAboutDec}
          />
          <Button
            customStyles="mt-4 xl:mt-6 !w-[104px] xl:!w-[116px]"
            title={STRINGS.view}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
