'use client';
import Description from '@/components/textTypes/Description';
import { IHeadingTags } from '@/components/textTypes/Heading';
import UnderlinedHeading from '@/components/underlinedHeading/UnderlinedHeading';
import React, { useRef } from 'react';
import { GIFS } from '../../../public/exporter';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

const AboutBusinessPlanSection = () => {
  gsap.registerPlugin(ScrollTrigger);
  const BusinessPlanSectionRef = useRef<HTMLDivElement | null>(null);
  const BusinessPlanHeadingRef = useRef<HTMLDivElement | null>(null);
  const BusinessPlanDescriptionRef = useRef<HTMLParagraphElement | null>(null);
  useGSAP(() => {
    const mq = gsap.matchMedia();
    mq.add('(min-width: 1280px)', () => {
      const t1 = gsap.timeline({
        scrollTrigger: {
          trigger: BusinessPlanSectionRef.current,
          start: 'top 96%',

          end: '8% 91%',
        },
      });
      t1.add('startT1')
        .from(
          BusinessPlanHeadingRef.current,
          {
            opacity: 0,
            duration: 1.2,
            yPercent: 100,
          },
          'startT1'
        )
        .from(
          BusinessPlanDescriptionRef.current,
          {
            opacity: 0,
            yPercent: 100,
            duration: 1.2,
          },
          'startT1'
        );
    });
    return () => mq.revert();
  });
  return (
    <section
      ref={BusinessPlanSectionRef}
      className="mt-10 md:mt-14 lg:mt-16 xl:mt-[100px]  mx-6  xl:mx-20"
    >
      <UnderlinedHeading
        customClasses=" xl:text-center"
        tagType={IHeadingTags.h2}
        content="Our Business Plan"
        compRef={BusinessPlanHeadingRef}
      />
      <Description
        compRef={BusinessPlanDescriptionRef}
        customClasses="mt-3  xl:mt-4 xl:text-center"
        content="Cosmic Security’s business plan focuses on innovation, reliability, and customized protection to meet evolving security needs across every sector.   "
      />
      <Image
        className="mx-auto mt-6  md:mt-8 lg:mt-10 xl:mt-14"
        height={680}
        width={680}
        src={GIFS.MAP_GIF}
        alt="map"
      />
    </section>
  );
};

export default AboutBusinessPlanSection;
