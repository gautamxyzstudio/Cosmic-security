'use client';
import Description, {
  IDescriptionTypes,
} from '@/components/textTypes/Description';
import { IHeadingTags, IHeadingTypes } from '@/components/textTypes/Heading';
import UnderlinedHeading from '@/components/underlinedHeading/UnderlinedHeading';
import Image from 'next/image';
import React, { useRef } from 'react';
import { icons, images } from '../../../public/exporter';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HomeChooseUsCard, { IHomeChooseUsCardProps } from './HomeChooseUsCard';

const HomeWhyChooseUs = () => {
  const imageRef = useRef<HTMLImageElement | null>(null);
  const divOneRef = useRef<HTMLDivElement | null>(null);
  const divTwoRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const firstDivRef = useRef<HTMLDivElement | null>(null);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(
    () => {
      gsap.to(imageRef.current, {
        ease: 'none',
        duration: 10,
        repeat: -1,
        paused: false,
      });
      gsap.from(divOneRef.current, {
        yPercent: 100,
        ease: 'power3.inOut',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          end: 'top 0',
          scrub: 1,
        },
      });
      gsap.from(divTwoRef.current, {
        yPercent: -100,
        ease: 'power3.inOut',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          end: 'top 0%',
          scrub: 1,
        },
      });
      gsap.to(firstDivRef.current, {
        yPercent: -30,
        duration: 1,
        ease: 'power3.inOut',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 0%',
          end: 'bottom 90%',
          scrub: 1,
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
          <UnderlinedHeading
            type={IHeadingTypes.heading56}
            tagType={IHeadingTags.h2}
            content="Wy choose us"
          />
          <Description
            customClasses="mt-6"
            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
            type={IDescriptionTypes.dec24}
          />
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
    title: 'Perfection anytime',
    decs: 'We have commitment to delivering flawless services at all times and dedication to providing impeccable security solutions consistently. We offer a high standard of service, reliability, and excellence in safeguarding businesses and events.',
  },
  {
    icon: icons.CLOCK_ICON,
    title: 'Emergency help',
    decs: 'At Cosmic Security, we prioritize your safety. Our commitment to the fastest emergency response ensures support is dispatched promptly, providing reassurance in critical situations. Trust in our swift and reliable security services. ',
  },
  {
    icon: icons.ADV_TECH_ICON,
    title: 'Advance technology',
    decs: 'At Cosmic Security, we integrate cutting-edge technology for your safety. Our advanced systems include scanning checkpoints, building access control, CCTV, and metal detectors, ensuring comprehensive security solutions',
  },
];
export const ChooseUsTwo: IHomeChooseUsCardProps[] = [
  {
    icon: icons.PHONE_ICON,
    title: '24/7 Support',
    decs: "Experience peace of mind with Cosmic Security's 24/7 support. Our commitment to your safety never rests. At Cosmic Security, your protection is our priority. We ensure unwavering security vigilance, anytime, anywhere",
  },
  {
    icon: icons.OFFICER_ICON,
    title: 'Licensed officer',
    decs: 'Cosmic Security boasts a team of over 2000 active licensed security professionals. Highly experienced and fully trained, our experts ensure top-tier protection for your peace of mind ',
  },
  {
    icon: icons.ADV_TECH_ICON,
    title: 'Our fleet',
    decs: "Cosmic Security's vigilant fleet ensures round-the-clock protection. With 24/7 patrolling, we safeguard your assets and ensure your comfort. Trust in our commitment to security excellence. Your safety is our constant priority",
  },
];
