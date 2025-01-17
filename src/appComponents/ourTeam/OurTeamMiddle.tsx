import Image from "next/image";
import React from "react";
import { images } from "../../../public/exporter";
import Description from "@/components/textTypes/Description";
import { STRINGS } from "@/constants/en";
import Heading, {
  IHeadingTags,
  IHeadingTypes,
} from "@/components/textTypes/Heading";

const OurTeamMiddle = () => {
  return (
    <section className="px-6 lg:px-20 w-full h-full flex flex-col gap-y-6 lg:flex-row items-center">
      <Image
        alt="Sherry Sidhu, CEO"
        src={images.CEO_IMAGE}
        className="rounded-xl object-cover lg:w-[961px] lg:h-[660px] relative top-0 left-0"
      />
      {/* Desktop view */}
      <div className=" hidden lg:block absolute p-8 right-20 rounded-xl bg-ceoMessageBg lg:w-[611px] h-auto">
        <div className="flex flex-col gap-y-6">
          <div className="flex flex-col items-end gap-y-2 w-fit">
            <Heading
              tagType={IHeadingTags.h2}
              type={IHeadingTypes.heading56}
              content="CEO Message"
            />
            <div className="bg-primary h-0.5 w-[124px]" />
          </div>
          <Description content={STRINGS.ceo_message} />
          <Description
            content="Sherry Sidhu, CEO"
            customClasses="!text-primary"
          />
        </div>
      </div>
      {/* end mobile view */}
      {/* Mobile view */}
      <div className="flex flex-col gap-y-2 lg:hidden">
        <div className="flex flex-col items-center gap-y-3">
          <div className="flex flex-col items-end gap-y-1 w-fit">
            <Heading
              tagType={IHeadingTags.h2}
              type={IHeadingTypes.heading56}
              content="CEO Message"
            />
            <div className="bg-primary h-0.5 w-12 " />
          </div>
          <Description content={STRINGS.ceo_message} />
        </div>
        <Description
          content="Sherry Sidhu, CEO"
          customClasses="!text-primary text-start"
        />
      </div>
      {/* end mobile view */}
    </section>
  );
};

export default OurTeamMiddle;
