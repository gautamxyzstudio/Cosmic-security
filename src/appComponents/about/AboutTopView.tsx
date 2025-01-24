import Description, {
  IDescriptionTypes,
} from '@/components/textTypes/Description';
import Heading, {
  IHeadingTags,
  IHeadingTypes,
} from '@/components/textTypes/Heading';
import Image from 'next/image';
import React from 'react';
import { images } from '../../../public/exporter';
import UnderlinedHeading from '@/components/underlinedHeading/UnderlinedHeading';

const AboutTopView = () => {
  return (
    <div className="w-full bg-aboutBg bg-cover h-[300px] md:h-[454px] bg-bottom xl:h-[600px]">
      <div className="w-full flex flex-row gap-x-6 relative top-0 left-0 px-6  xl:px-20  xl:pt-20 bg-aboutBgGradient h-full">
        <div className="mt-[68px] md:mt-[145px] xl:mt-14 w-[80%] md:w-[50%] ">
          <Heading
            type={IHeadingTypes.heading56_sec}
            customClasses="!text-primary !font-bold"
            content="Your Trusted Security Partner"
          />
          <Description
            type={IDescriptionTypes.dec24}
            customClasses="mt-6"
            content="Cosmic Security, your dedicated ally, offers round-the-clock protection. As your trusted security partner, we prioritize your safety and well-being. "
          />
          <div className="absolute lg:hidden xl:inline-block -bottom-0.5 left-0">
            {/* for mobile pho  ne */}
            <svg
              className="inline-block md:hidden"
              xmlns="http://www.w3.org/2000/svg"
              width="275"
              height="32"
              viewBox="0 0 275 32"
              fill="none"
            >
              <path d="M254.351 0H0V32H275L254.351 0Z" fill="#282828" />
            </svg>
            {/* for ipad view */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className=" hidden md:inline-block lg:hidden"
              width="398"
              height="62"
              viewBox="0 0 398 62"
              fill="none"
            >
              <path d="M361.657 0H-86V62H398L361.657 0Z" fill="#282828" />
            </svg>
            {/* for laptop view */}
            <svg
              className="relative top-0 left-0 h-8 hidden xl:inline-block  w-full  lg:w-[798px] lg:h-[93px]"
              xmlns="http://www.w3.org/2000/svg"
              width="798"
              height="93"
              viewBox="0 0 798 93"
              fill="none"
            >
              <path
                d="M738.08 0H1.90735e-06V93H798L 738.08 0Z"
                fill="#282828"
              />
            </svg>
            <div className="absolute left-6 xl:left-20 top-3 md:top-6 xl:top-10 ">
              <UnderlinedHeading tagType={IHeadingTags.h2} content="About Us" />
            </div>
          </div>
        </div>
        <div className="hidden w-[50%] md:flex relative top-0 left-0  justify-center items-center">
          <Image
            alt=""
            className="absolute bottom-0"
            src={images.ABOUT_TOP_ILLUSTRATION}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutTopView;
