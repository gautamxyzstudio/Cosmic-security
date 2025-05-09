"use client";
import Description from "@/components/textTypes/Description";
import { IHeadingTags, IHeadingTypes } from "@/components/textTypes/Heading";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import HomeChooseUsCard from "../home/HomeChooseUsCard";
import { icons } from "../../../public/exporter";
import UnderlinedHeading from "@/components/underlinedHeading/UnderlinedHeading";

const ServicesTopView = () => {
  const ServicesTopCardRef = useRef<HTMLDivElement | null>(null);
  const ServicesTopHeadingRef = useRef<HTMLDivElement | null>(null);
  const ServicesTopDescriptionRef = useRef<HTMLParagraphElement | null>(null);
  useGSAP(() => {
    const mq = gsap.matchMedia();
    mq.add("(min-width: 1280px)", () => {
      gsap.from(ServicesTopHeadingRef.current, {
        opacity: 0,
        duration: 1.2,
        yPercent: 100,
      });
      gsap.from(ServicesTopDescriptionRef.current, {
        opacity: 0,
        duration: 1.2,
        yPercent: 100,
      });
      const t1 = gsap.timeline({
        ease: "power1.inOut",
        delay: 0.3,
      });
      t1.from(".card-0", {
        opacity: 0,
        yPercent: 100,
      })
        .from(".card-1", {
          opacity: 0,
          yPercent: 100,
        })
        .from(".card-2", {
          opacity: 0,
          yPercent: 100,
        });
    });
    return () => mq.revert();
  });

  const servicesData = [
    {
      icon: icons.ON_SITE_GUARDING_SECONDARY_ICON,
      title: "On-site Guarding",
      description:
"Cosmic Security provides expert, on-site security guards to watch over and protect your property, control access points, prevent crime, and provide a secure environment around the clock for all your security requirements.",
    },
    {
      icon: icons.MOBILE_GUARDING_SECONDARY_ICON,
      title: "Mobile Guarding",
      description:
'Our mobile guard service provides flexible, roving patrols that involve instant response times, delivering overall security with real-time monitoring, instant response, and proactive threat notification for your property or business.',
    },
    {
      icon: icons.REMOTE_GUARDING_SECONDARY_ICON,
      title: "Remote Guarding",
      description:
"With the most advanced CCTV technology, our remote guarding service provides continuous, real-time monitoring of your property. We give proactive security and quick response to threats, maintaining your security in line from a distance. ",
    },
  ];

  return (
    <div className="w-full px-6 xl:px-20 h-screen xl:pt-20 bg-no-repeat bg-[length:100%_70%] xl:bg-[length:100%_85%] bg-servicesTopBg max-h-[680px] xl:max-h-[898px] flex flex-col items-center gap-y-20 xl:gap-y-28 relative">
      <div className="w-[584px] xl:w-[856px] flex flex-col justify-center items-center text-center gap-y-4 xl:gap-y-6 pt-[190px] lg:pt-[170px] xl:pt-[120px] ">
        <div className="overflow-hidden">
          <UnderlinedHeading
            content="Our Services"
            type={IHeadingTypes.heading80}
            tagType={IHeadingTags.h1}
            compRef={ServicesTopHeadingRef}
          />
        </div>
        <div className="overflow-hidden">
          <Description
            compRef={ServicesTopDescriptionRef}
            content="Cosmic Security provides advanced, tailored solutions including on-site, mobile, and remote guarding to ensure round-the-clock protection. "
          />
        </div>
      </div>
      <div
        ref={ServicesTopCardRef}
        className="flex flex-row justify-between w-full absolute -bottom-[3%] px-6 xl:px-20"
      >
        {servicesData.map((service, index) => (
          <HomeChooseUsCard
            key={index}
            icon={service.icon}
            customClass={`!w-[224px] !min-h-[284px] lg:!w-[300px] xl:!w-[408px] xl:!min-h-[238px] card-${index} !py-6 clip-path-myPolygonServicesTopCard`}
            title={service.title}
            decs={service.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesTopView;
