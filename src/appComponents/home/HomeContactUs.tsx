"use client";
import React, { useRef } from "react";
import { icons } from "../../../public/exporter";
import { emailAddress, phoneNumber } from "@/utils/mockdata";
import Description, {
  IDescriptionTypes,
} from "@/components/textTypes/Description";
import UnderlinedHeading from "@/components/underlinedHeading/UnderlinedHeading";
import Form from "@/components/form/Form";
import IconWithText from "@/components/iconWithText/IconWithText";
import { STRINGS } from "@/constants/en";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { IHeadingTags, IHeadingTypes } from "@/components/textTypes/Heading";

const HomeContactUs = () => {
  gsap.registerPlugin(ScrollTrigger);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLParagraphElement | null>(null);

  useGSAP(() => {
    const mq = gsap.matchMedia();
    mq.add("(min-width: 1280px)", () => {
      const animationConfig = {
        yPercent: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
          end: "10% 87%",
        },
      };

      gsap.from(headingRef.current, animationConfig);
      gsap.from(contentRef.current, animationConfig);
    });
    return () => mq.revert();
  });

  const iconStyles = "w-6 h-6 xl:w-10 xl:h-10";
  const iconDivStyles = "gap-x-2 xl:gap-x-3 text-base xl:text-2xl";
  const contactInfo = [
    { icon: icons.PHONE_ICON, content: phoneNumber },
    { icon: icons.MESSAGE_ICON, content: emailAddress },
  ];

  return (
    <div ref={sectionRef} className="mx-6 xl:mx-20">
      <UnderlinedHeading
        tagType={IHeadingTags.h2}
        content={STRINGS.request_information}
        type={IHeadingTypes.heading56}
        customClasses="md:text-center xl:text-left"
        compRef={headingRef}
      />
      <Description
        customClasses="xl:mt-6 mt-4 md:text-center xl:text-left"
        type={IDescriptionTypes.dec24}
        content={STRINGS.request_info_dec}
        compRef={contentRef}
      />
      <div className="flex mt-3 xl:mt-14 flex-row flex-wrap xl:flex-nowrap items-center xl:justify-between gap-x-20 md:justify-center">
        <div className="w-full xl:w-[30%]">
          <Description
            customClasses="md:text-center xl:text-left"
            content="Thank you for choosing Cosmic Security to meet your safety needs. Once you’ve submitted the form, our dedicated team will promptly review your requirements. A security specialist will then reach out to discuss tailored solutions that align with your unique needs."
          />
          <div className="flex flex-col md:flex-row xl:flex-col gap-y-1 xl:gap-y-3 md:gap-x-10 mt-3 md:mt-4 xl:mt-10 md:w-full md:justify-center">
            {contactInfo.map((data, index) => (
              <IconWithText
                key={index}
                icon={data.icon}
                content={data.content}
                customClasses={iconDivStyles}
                customIconsStyles={iconStyles}
              />
            ))}
          </div>
        </div>
        <div className="pb-5 xl:pb-10 pl-5 xl:pl-10 w-full md:w-[564px] md:h-[442px] xl:w-[55%] relative h-[420px] top-0 left-0 xl:h-[670px] mt-6 xl:mt-0 bg-contain bg-left-bottom bg-no-repeat bg-contactLines md:bg-none xl:bg-contactLines">
          <Form />
          <div className="bg-black absolute top-[12%] rotate-45 left-3 w-4 h-4 xl:w-[54px] xl:h-[54px]" />
        </div>
      </div>
    </div>
  );
};

export default HomeContactUs;
