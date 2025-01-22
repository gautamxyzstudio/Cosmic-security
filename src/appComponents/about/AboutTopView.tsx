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
    <div className="w-full bg-aboutBg bg-cover bg-bottom h-[600px]">
      <div className="w-full flex flex-row gap-x-6 relative top-0 left-0 px-20 pt-20 bg-aboutBgGradient h-full">
        <div className="mt-14 w-[50%] ">
          <Heading
            type={IHeadingTypes.heading56}
            customClasses="!text-primary"
            content="Your Trusted Security Partner"
          />
          <Description
            type={IDescriptionTypes.dec24}
            customClasses="mt-6"
            content="Cosmic Security, your dedicated ally, offers round-the-clock protection. As your trusted security partner, we prioritize your safety and well-being. "
          />
          <div className="absolute bottom-0 left-0">
            <svg
              className="relative top-0 left-0"
              xmlns="http://www.w3.org/2000/svg"
              width="798"
              height="93"
              viewBox="0 0 798 93"
              fill="none"
            >
              <path d="M738.08 0H1.90735e-06V93H798L738.08 0Z" fill="#282828" />
            </svg>
            <div className="absolute left-20 top-10 ">
              <UnderlinedHeading tagType={IHeadingTags.h2} content="About Us" />
            </div>
          </div>
        </div>
        <div className="w-[50%] flex  justify-center items-center">
          <Image alt="" src={images.ABOUT_TOP_ILLUSTRATION} />
        </div>
      </div>
    </div>
  );
};

export default AboutTopView;
