"use client";
import Description, {
  IDescriptionTypes,
} from "@/components/textTypes/Description";
import { IHeadingTags, IHeadingTypes } from "@/components/textTypes/Heading";
import UnderlinedHeading from "@/components/underlinedHeading/UnderlinedHeading";
import Image from "next/image";
import React, { useRef } from "react";
import { icons, images } from "../../../public/exporter";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HomeChooseUsCard, { IHomeChooseUsCardProps } from "./HomeChooseUsCard";

const HomeWhyChooseUs = () => {
  const imageRef = useRef<HTMLImageElement | null>(null);
  const divOneRef = useRef<HTMLDivElement | null>(null);
  const divTwoRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const firstDivRef = useRef<HTMLDivElement | null>(null);
  const chooseHeadingRef = useRef<HTMLDivElement | null>(null);
  const chooseContentRef = useRef<HTMLDivElement | null>(null);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(
    () => {
      gsap.to(imageRef.current, {
        ease: "none",
        rotation: 360,
        duration: 10,
        repeat: -1,
        paused: false,
      });
      gsap.from(divOneRef.current, {
        yPercent: 100,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          end: "top 0",
          scrub: 1,
        },
      });
      gsap.from(divTwoRef.current, {
        yPercent: -100,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          end: "top 0%",
          scrub: 1,
        },
      });
      gsap.to(firstDivRef.current, {
        yPercent: -30,
        duration: 1,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 0%",
          end: "bottom 90%",
          scrub: 1,
        },
      });
      gsap.from(chooseHeadingRef.current, {
        yPercent: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 94%",
          end: "6% 90%",
        },
      });
      gsap.from(chooseContentRef.current, {
        yPercent: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 94%",
          end: "6% 90%",
        },
      });
    },
    {
      scope: sectionRef,
    }
  );

  return (
    <section
      ref={sectionRef}
      className="mx-20 overflow-y-hidden  h-[840px]  mt-[128px]"
    >
      <div className="w-full  overflow-hidden   gap-x-14 flex flex-row ">
        <div ref={firstDivRef} className="w-[55%] h-full flex flex-row gap-6 ">
          <div ref={divOneRef} className="flex   h-full  flex-col gap-y-6">
            {ChooseUsOne.map((card, index) => (
              <HomeChooseUsCard
                key={index}
                icon={card.icon}
                title={card.title}
                decs={card.decs}
              />
            ))}
          </div>
          <div ref={divTwoRef} className="flex h-full   flex-col gap-y-6">
            {ChooseUsTwo.map((card, index) => (
              <HomeChooseUsCard
                key={index}
                icon={card.icon}
                title={card.title}
                decs={card.decs}
              />
            ))}
          </div>
        </div>
        <div className="w-[45%] h-full pt-[42px]">
          <div className="overflow-hidden">
            <UnderlinedHeading
              type={IHeadingTypes.heading56}
              tagType={IHeadingTags.h2}
              content="Wy choose us"
              compRef={chooseHeadingRef}
            />
          </div>
          <div className="overflow-hidden">
            <Description
              customClasses="mt-6"
              content="Cosmic Security offers reliable protection through trained professionals, advanced technology, and fast response times. We provide customized security solutions for homes, businesses, and events; keeping people and property safe, 24/7. Trust us for peace of mind that lasts. "
              type={IDescriptionTypes.dec24}
              compRef={chooseContentRef}
            />
          </div>
          <div className="mt-[42px] relative top-0 flex flex-row justify-center items-center left-0">
            <Image
              ref={imageRef}
              className="relative  top-0 left-0"
              src={images.CHOOSE_OUTER}
              alt=""
            />
            <Image
              src={images.CHOOSE_INNER}
              alt="security "
              className="absolute pt-6 pl-1"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeWhyChooseUs;

export const ChooseUsOne: IHomeChooseUsCardProps[] = [
  {
    icon: icons.CLOCK_ICON,
    title: "Perfectness at all times ",
    decs: "We ensure perfection in our services at any given time and dedication to always providing perfect security solutions. Perfect service, reliability, and perfection in securing businesses and events are what we offer. ",
  },
  {
    icon: icons.CLOCK_ICON,
    title: "Emergency support",
    decs: "Your security is our concern at Cosmic Security. Our dedication to the fastest emergency response ensures that assistance is dispatched immediately, with help arriving now of need. Trust our prompt and reliable security solutions.  ",
  },
  {
    icon: icons.ADV_TECH_ICON,
    title: "Cutting-edge technology ",
    decs: "At Cosmic Security, we implement the newest technology for your safety. State-of-the-art scanning checkpoints, building access control, CCTV, and metal detectors are used by us to implement comprehensive security solutions ",
  },
];
export const ChooseUsTwo: IHomeChooseUsCardProps[] = [
  {
    icon: icons.PHONE_ICON,
    title: "24/7 Support",
    decs: "Experience the peace of mind with 24/7 support from Cosmic Security. Be sure our commitment to safety operates round the clock. Your safety is our responsibility at Cosmic Security. We render tireless security surveillance, day and night, everywhere ",
  },
  {
    icon: icons.OFFICER_ICON,
    title: "Licensed officer",
    decs: "Cosmic Security has more than 2000 active licensed security officers. Our highly trained and experienced professionals provide top-class security for your peace of mind  ",
  },
  {
    icon: icons.ADV_TECH_ICON,
    title: "Our fleet",
    decs: "Cosmic Security's watchful fleet provides round-the-clock security. Patrols 24/7, we protect your assets and provide you with peace of mind. Trust us with our dedication to security perfection. Your safety is our every moment priority. ",
  },
];
