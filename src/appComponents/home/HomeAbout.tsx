import Heading, {
  IHeadingTags,
  IHeadingTypes,
} from '@/components/textTypes/Heading';
import { STRINGS } from '@/constants/en';
import Image from 'next/image';
import React from 'react';
import { images } from '../../../public/exporter';
import Description, {
  IDescriptionTypes,
} from '@/components/textTypes/Description';
import Button from '@/components/button/Button';

const HomeAbout = () => {
  return (
    <div className="px-20 mt-10">
      <Heading
        type={IHeadingTypes.heading56}
        customClasses="!w-[75%] !leading-[4rem]"
        tagType={IHeadingTags.h2}
        content={STRINGS.homeAboutHeading}
      />
      <div className="flex justify-between items-center flex-row mt-6">
        <div className="w-[45%] flex justify-center">
          <Image
            className="w-[365px] h-[365px]"
            src={images.ABOUT_ILLUSTRATION}
            alt=""
          />
        </div>

        <div className="w-[45%]">
          <Description
            type={IDescriptionTypes.dec24}
            content={STRINGS.homeAboutDec}
          />
          <Button customStyles="mt-6 !w-[116px]" title={STRINGS.view} />
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
