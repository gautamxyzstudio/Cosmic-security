"use client";
import Form from "@/components/form/Form";
import Description from "@/components/textTypes/Description";
import Heading, {
  IHeadingTags,
  IHeadingTypes,
} from "@/components/textTypes/Heading";
import UnderlinedHeading from "@/components/underlinedHeading/UnderlinedHeading";
import { STRINGS } from "@/constants/en";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const ContactFormSection = () => {
  const contactHeadingRef = useRef<HTMLDivElement | null>(null);
  const contactFormRef = useRef<HTMLDivElement | null>(null);
  const contactDescriptionRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const mq = gsap.matchMedia();
    mq.add("(min-width: 1280px)", () => {
      gsap.from(contactHeadingRef.current, {
        opacity: 0,
        xPercent: -100,
        duration: 1.3,
        ease: "power2.out",
      });
      gsap.from(contactFormRef.current, {
        opacity: 0,
        xPercent: -100,
        duration: 1.5,
        ease: "power2.out",
      });
      gsap.from(contactDescriptionRef.current, {
        opacity: 0,
        yPercent: 100,
        duration: 1.5,
        ease: "power2.out",
      });
    });
    return () => mq.revert();
  });
  return (
    <section className="flex flex-col gap-y-4 xl:gap-y-3 w-full h-full overflow-hidden pt-[68px] md:pt-20 lg:pt-24 xl:pt-28 xl:items-stretch">
      <div ref={contactHeadingRef} className="w-full">
        <UnderlinedHeading
          content={STRINGS.con_us}
          tagType={IHeadingTags.h1}
          type={IHeadingTypes.heading56}
          customClasses="capitalize"
        />
      </div>
      <div className="flex flex-col gap-y-10 md:gap-y-8 xl:flex-row items-center justify-end relative">
        <div
          ref={contactDescriptionRef}
          className="xl:bg-[#484848] xl:py-12 xl:pl-[132px] xl:pr-6 rounded-lg xl:h-full xl:w-[59%]"
        >
          <div className="flex flex-col gap-y-3 xl:gap-x-6 xl:w-[612px]">
            <Heading
              content={STRINGS.free_contact_us}
              type={IHeadingTypes.heading56}
              tagType={IHeadingTags.h2}
            />
            <div className="flex flex-col gap-y-1 md:gap-y-3 lg:gap-y-2">
              <Description content={STRINGS.contact_des} />
              <Description
                content={STRINGS.contact_thanks_message}
                customClasses="xl:w-[85%]"
              />
            </div>
          </div>
        </div>
        <div
          ref={contactFormRef}
          className="w-full md:w-[85%] md:h-[450px] xl:absolute xl:z-10  xl:w-[48%] xl:h-[86%] xl:left-0"
        >
          <Form isContactPage={true} customStyle="rounded-lg" />
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
