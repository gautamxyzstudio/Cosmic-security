"use client";
import React, { useRef } from "react";
import Heading, { IHeadingTags, IHeadingTypes } from "@/components/textTypes/Heading";
import { STRINGS } from "@/constants/en";
import Button from "@/components/button/Button";
import HomeAboutUsLottie from "../lotties/HomeAboutUsLottie";
import Description from "@/components/textTypes/Description";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const HomeAbout = () => {
  gsap.registerPlugin(ScrollTrigger);
  const homeAboutRef = useRef<HTMLDivElement | null>(null);
  const homeAboutHeadingRef = useRef<HTMLDivElement | null>(null);
  const homeAboutContentRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const mq = gsap.matchMedia();
    mq.add("(min-width: 1280px)", () => {
      const animationConfig = {
        duration: 1.2,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: homeAboutRef.current,
          start: "10% 90%",
          end: "20% 87%",
        },
      };

      gsap.from(homeAboutHeadingRef.current, {
        ...animationConfig,
        yPercent: 100,
        opacity: 0,
      });

      gsap.from(homeAboutContentRef.current, {
        ...animationConfig,
        xPercent: 100,
        opacity: 0,
      });
    });
    return () => mq.revert();
  });

  return (
    <div ref={homeAboutRef} className="px-6 xl:px-20 bg-background pt-6 md:pt-14 xl:pt-10">
      <div className="overflow-hidden">
        <Heading
          type={IHeadingTypes.heading56}
          customClasses="!w-[75%] hidden xl:inline-block !leading-[4rem]"
          tagType={IHeadingTags.h2}
          content={STRINGS.homeAboutHeading}
          compRef={homeAboutHeadingRef}
        />
      </div>
      <div className="flex justify-between flex-wrap md:flex-nowrap items-center mt-0 xl:mt-6 md:gap-x-[22px]">
        <div className="w-full md:w-[39%] xl:w-[45%] flex justify-center">
          <HomeAboutUsLottie />
        </div>
        <Heading
          type={IHeadingTypes.heading56}
          customClasses="md:hidden mt-6 inline-block"
          tagType={IHeadingTags.h2}
          content={STRINGS.homeAboutHeading}
        />
        <div ref={homeAboutContentRef} className="w-full mt-3 xl:mt-0 md:w-[60%] xl:w-[45%]">
          <Heading
            type={IHeadingTypes.heading56}
            customClasses="hidden mb-4 md:inline-block xl:hidden"
            tagType={IHeadingTags.h2}
            content={STRINGS.homeAboutHeading}
          />
          <Description content={STRINGS.homeAboutDec} />
          <Button
            customStyles="py-2 md:py-3 rounded-md mt-4 xl:mt-6 w-[104px] md:w-[112px] xl:w-[124px] h-10 md:h-12 xl:h-14"
            title={STRINGS.view}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
