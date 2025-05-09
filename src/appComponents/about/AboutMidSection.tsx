"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { images } from "../../../public/exporter";
import Description from "@/components/textTypes/Description";
import { IHeadingTags } from "@/components/textTypes/Heading";
import UnderlinedHeading from "@/components/underlinedHeading/UnderlinedHeading";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const AboutMidSection = () => {
  const DescriptionRef = useRef<HTMLParagraphElement | null>(null);
  const ImageRef = useRef<HTMLImageElement | null>(null);
  useGSAP(() => {
    const mq = gsap.matchMedia();
    mq.add("(min-width: 1024px)", () => {
      gsap.from(ImageRef.current, {
        opacity: 0,
        duration: 2.5,
        ease: "power1.out",
      });
      gsap.from(DescriptionRef.current, {
        opacity: 0,
        xPercent: 100,
        duration: 1.5,
        ease: "power1.out",
      });
    });
    return () => mq.revert();
  });
  return (
    <div className="mx-6 xl:mx-20 relative  top-0 left-0">
      <div className="flex flex-col xl:flex-row mt-8  md:mt-10 xl:mt-20 justify-between items-center">
        <div className="hidden lg:inline-block mb-12 xl:hidden">
          <UnderlinedHeading tagType={IHeadingTags.h2} content="About Us" />
        </div>
        <div className=" relative hidden xl:inline-block top-0 left-0 w-[42%]">
          <Image src={images.MASK_ILLUSTRATION} alt="mask top" ref={ImageRef} />
        </div>
        <div className="inline-block mb-4 md:mb-6 lg:mb-8  xl:hidden">
          <Image
            className="w-full h-[226px] md:h-[461px] lg:h-[662px] rounded-xl"
            alt="illustration"
            src={images.HOME_TOP_ONE}
          />
        </div>
        <div className="w-full xl:w-[52%]">
          <Description
            compRef={DescriptionRef}
            content="Cosmic Security was established in 2012 and has been a world-renowned security service firm ever since. We started making waves in India by providing security for ginormous concerts, private events, and VIP events. With the growing demand for trusted security, we established our head office in British Columbia, Canada, in 2018 and took our love for security and service excellence with us. Our specialties include uniformed security guard services, rapid emergency coverage, 24/7 CCTV monitoring, retail loss prevention, access control systems, and professional concierge support. With extensive experience in handling high-traffic environments and complex security logistics, we’ve protected major public events, festivals, and ongoing operations for commercial clients. Our skilled team has managed large venues such as shopping malls, music arenas, sports stadiums, and public parks across the Lower Mainland. We also have the capability to deploy over 200 trained guards within 24 hours, and with this, we have the authority to do the same accordingly to different client orders. For rapid deployment or overall long-term security strategic plan, Cosmic Security has multi-purpose and effective solutions to every project. We customize our services to combat the very threat and objective of every client. Committed to integrity, readiness, and professionalism, Cosmic Security is ready to protect what matters most to you—your people, your property, and your peace of mind."
          />
        </div>
      </div>
    </div>
  );
};
export default AboutMidSection;
