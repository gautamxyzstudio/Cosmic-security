"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { images } from "../../../public/exporter";
import Description from "@/components/textTypes/Description";
import { STRINGS } from "@/constants/en";
import Heading, {
  IHeadingTags,
  IHeadingTypes,
} from "@/components/textTypes/Heading";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

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
      className="px-6 lg:px-20 w-full h-full flex flex-col gap-y-6 lg:flex-row items-center relative overflow-hidden"
    >
      <Image
        alt="Sherry Sidhu, CEO"
        src={images.CEO_IMAGE}
        className="rounded-xl object-cover lg:w-[961px] lg:h-[660px]"
      />
      {/* Desktop view */}
      <div
        ref={messageDivRef}
        className=" hidden lg:block absolute p-8 right-20 rounded-xl bg-ceoMessageBg lg:w-[611px] h-auto z-10"
      >
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
