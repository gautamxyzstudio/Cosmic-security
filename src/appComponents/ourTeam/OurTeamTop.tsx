"use client";
import React, { useRef } from "react";
import Button from "@/components/button/Button";
import Description from "@/components/textTypes/Description";
import Heading, {
  IHeadingTags,
  IHeadingTypes,
} from "@/components/textTypes/Heading";
import { STRINGS } from "@/constants/en";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const OurTeamTop = () => {
  const joinUsTextRef = useRef<HTMLParagraphElement | null>(null);
  const joinUsButtonRef = useRef<HTMLButtonElement | null>(null);
  const mainHeadingRef = useRef<HTMLDivElement | null>(null);
  const descriptionTextRef = useRef<HTMLParagraphElement | null>(null);
  useGSAP(() => {
    const mq = gsap.matchMedia();
    mq.add("(min-width: 1280px)", () => {
      gsap.from(joinUsTextRef.current, {
        yPercent: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power1.inOut",
      });
      gsap.from(mainHeadingRef.current, {
        yPercent: 130,
        opacity: 0,
        duration: 1.2,
        ease: "power1.inOut",
      });
      gsap.from(descriptionTextRef.current, {
        yPercent: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power1.inOut",
      });
      gsap.from(joinUsButtonRef.current, {
        yPercent: 110,
        opacity: 0,
        duration: 1.2,
        ease: "power1.inOut",
      });
    });
    return () => mq.revert();
  });
  return (
    <section className="bg-ourTeamTopBg bg-cover bg-center bg-no-repeat w-full h-full">
      <div className="px-6 lg:px-20 bg-overlayTeamBg">
        <div className=" pt-[127px]  lg:pt-[244px] pb-20 text-white flex flex-col gap-y-3 lg:gap-y-6 lg:w-[848px] ">
          <div className="flex flex-col gap-y-2 lg:gap-y-4 ">
            <div className="overflow-y-hidden">
              <Description
                content={STRINGS.join_us}
                customClasses="uppercase !text-primary lg:!text-white"
                compRef={joinUsTextRef}
              />
            </div>
            <div className="overflow-y-hidden">
              <div ref={mainHeadingRef} className="flex flex-col">
                <Heading
                  content={STRINGS.for_pvt}
                  type={IHeadingTypes.heading80}
                />
                <div className="flex gap-x-3">
                  <Heading
                    content={STRINGS.security}
                    type={IHeadingTypes.heading80}
                    tagType={IHeadingTags.h3}
                  />
                  <Heading
                    content={STRINGS.training}
                    type={IHeadingTypes.heading80}
                    tagType={IHeadingTags.h2}
                  />
                </div>
              </div>
            </div>
            <div className="overflow-y-hidden">
              <Description
                content={STRINGS.team_dec}
                customClasses="!w-[90%] lg:!w-[72%]"
                compRef={descriptionTextRef}
              />
            </div>
          </div>
          <div className="overflow-y-hidden">
            <Button
              comRef={joinUsButtonRef}
              title={STRINGS.register}
              customStyles=" md:rounded-md py-3 w-[148px] md:w-[220px] h-12 md:h-14 md:h-16"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeamTop;
