import Image from "next/image";
import React from "react";
import { icons } from "../../../public/exporter";
import Heading, { IHeadingTags, IHeadingTypes } from "@/components/textTypes/Heading";

const FollowUs = () => {
  return (
    <div className="flex flex-col gap-y-2 md:gap-y-4">
      <Heading
        tagType={IHeadingTags.h4}
        content="Follow us"
               type={IHeadingTypes.heading20}
      />

      <div className="flex flex-row gap-x-3 items-center">
        <Image
          alt="facebook"
          className="w-5 h-5 cursor-pointer md:w-6 md:h-6"
          src={icons.FACEBOOK_ICON}
        />
        <Image
          alt="instagram"
          className="w-5 h-5 cursor-pointer md:w-6 md:h-6"
          src={icons.INSTAGRAM_ICON}
        />
        <Image
          alt="linkedIn"
          className="w-5 h-5 cursor-pointer md:w-6 md:h-6"
          src={icons.LINKEDIN_ICON}
        />
        <Image
          alt="linkedIn"
          className="w-5 h-5 cursor-pointer md:w-6 md:h-6"
          src={icons.TWITTER_ICON}
        />
      </div>
    </div>
  );
};

export default FollowUs;
