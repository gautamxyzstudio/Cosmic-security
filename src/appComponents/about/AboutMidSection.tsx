import Image from "next/image";
import React from "react";
import { images } from "../../../public/exporter";
import Description from "@/components/textTypes/Description";
import { IHeadingTags } from "@/components/textTypes/Heading";
import UnderlinedHeading from "@/components/underlinedHeading/UnderlinedHeading";

const AboutMidSection = () => {
  return (
    <div className="mx-6 xl:mx-20 relative  top-0 left-0">
      <div className="flex flex-col xl:flex-row mt-8  md:mt-10 xl:mt-20 justify-between items-center">
        <div className="hidden lg:inline-block mb-12 xl:hidden">
          <UnderlinedHeading tagType={IHeadingTags.h2} content="About Us" />
        </div>
        <div className=" relative hidden xl:inline-block top-0 left-0 w-[42%]">
          <Image src={images.MASK_ILLUSTRATION} alt="mask top" />
        </div>
        <div className="inline-block mb-4 md:mb-6 lg:mb-8  xl:hidden">
          <Image
            className="w-full h-[226px] md:h-[461px] lg:h-[662px] rounded-xl"
            alt="illustration"
            src={images.HOME_TOP_ONE}
          />
        </div>
        <div className="w-full xl:w-[52%]">
          <Description content="Established in 2012, Cosmic Security has evolved into a global security services provider, initially gaining prominence in India for securing major concerts and private parties. Recognizing the burgeoning demand for comprehensive security solutions, we expanded our operations to British Columbia, Canada, in 2018, solidifying our commitment to excellence. Specializing in security guard services, emergency security coverage, CCTV surveillance, loss prevention, access control, and concierge services, Cosmic Security is well-versed in managing diverse security needs. Our experienced team has successfully handled large-scale events, including 24/7 operations at musical festivals, securing store and mall premises, and providing outsourced security work for major companies. With a proven track record in venues such as stadiums, arenas, and parks across the Lower Mainland, our adaptability shines through in our ability to mobilize over 200 guards with just 24 hours' notice. Whether you require immediate emergency response or meticulous security planning, Cosmic Security is dedicated to delivering tailored solutions for your peace of mind. Your safety remains at the forefront of our commitment." />
        </div>
      </div>
    </div>
  );
};
export default AboutMidSection;
