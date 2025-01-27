"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { images } from "../../../public/exporter";
import Description from "@/components/textTypes/Description";
import { STRINGS } from "@/constants/en";
import { IHeadingTags, IHeadingTypes } from "@/components/textTypes/Heading";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import UnderlinedHeading from "@/components/underlinedHeading/UnderlinedHeading";

const OurTeamMiddle = () => {
  gsap.registerPlugin(ScrollTrigger);
  const ceoMessageSectionRef = useRef<HTMLDivElement | null>(null);
  const messageDivRef = useRef<HTMLDivElement | null>(null);
  useGSAP(() => {
    const mq = gsap.matchMedia();
    mq.add("(min-width: 1280px)", () => {
      gsap.from(messageDivRef.current, {
        xPercent: 110,
        duration: 1.2,
        ease: "power1.inOut",
        opacity: 0,
        scrollTrigger: {
          trigger: ceoMessageSectionRef.current,
          start: "top 80%",
          end: "20% 70%",
          scrub: 1,
        },
      });
    });
    return () => mq.revert();
  });
  return (
    <section
      ref={ceoMessageSectionRef}
      className="px-6 xl:px-20 w-full h-full flex flex-col gap-y-6 md:flex-row items-center relative overflow-hidden"
    >
      <Image
        alt="Sherry Sidhu, CEO"
        src={images.CEO_IMAGE}
        className="rounded-xl object-cover w-[342px] h-[232px] md:w-[478px] md:h-[378px] lg:w-[611px] lg:h-[470px] xl:w-[961px] xl:h-[660px]"
      />
      {/* Desktop view */}
      <div
        ref={messageDivRef}
        className=" hidden md:block absolute p-3 right-6 lg:p-6 xl:p-8 xl:right-20 rounded-xl bg-ceoMessageBg w-[385px] lg:w-[500px] xl:w-[611px] h-auto z-10"
      >
        <div className="flex flex-col gap-y-3 lg:gap-y-5 xl:gap-y-6 ">
          <UnderlinedHeading
            tagType={IHeadingTags.h2}
            type={IHeadingTypes.heading56}
            content="CEO Message"
          />
          <Description content={STRINGS.ceo_message} />
          <Description
            content="Sherry Sidhu, CEO"
            customClasses="!text-primary"
          />
        </div>
      </div>
      {/* end mobile view */}
      {/* Mobile view */}
      <div className="flex flex-col gap-y-2 md:hidden">
        <div className="flex flex-col items-center gap-y-3">
          <UnderlinedHeading
            tagType={IHeadingTags.h2}
            type={IHeadingTypes.heading56}
            content="CEO Message"
          />
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
