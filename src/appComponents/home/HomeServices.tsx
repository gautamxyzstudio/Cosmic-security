'use client';
import React, { useRef } from 'react';
import Description from '@/components/textTypes/Description';
import Heading, {
  IHeadingTags,
  IHeadingTypes,
} from '@/components/textTypes/Heading';
import HomeServiceCard from './HomeServiceCard';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import UnderlinedHeading from '@/components/underlinedHeading/UnderlinedHeading';
import Image from 'next/image';
import Link from 'next/link';
import { icons } from '../../../public/exporter';
import { route } from '@/constants/route';
import { servicesData } from '../services/ServicesServiceSection';

const HomeServices = () => {
  const divRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const homeServicesRef = useRef<HTMLDivElement | null>(null);
  const homeServicesContentRef = useRef<HTMLParagraphElement | null>(null);

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const mq = gsap.matchMedia();
    mq.add('(min-width: 1280px)', () => {
      const targets = gsap.utils.toArray<HTMLElement>('.serviceCard');

      targets.forEach((element, index) => {
        gsap.set(element, { rotate: index % 2 === 0 ? '-8deg' : '8deg' });
      });

      gsap.from(divRef.current, {
        xPercent: 50,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 50%',
          end: 'bottom 95%',
          scrub: 1,
        },
      });

      targets.forEach((element) => {
        gsap.to(element, {
          rotate: 0,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 40%',
            end: 'bottom 95%',
            scrub: 1,
          },
        });
      });

      const fadeInAnimation = {
        yPercent: 100,
        opacity: 0,
        duration: 1.2,
        ease: 'power1.inOut',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 90%',
          end: '10% 87%',
        },
      };

      gsap.from(homeServicesRef.current, fadeInAnimation);
      gsap.from(homeServicesContentRef.current, fadeInAnimation);
    });
    return () => mq.revert();
  });

  return (
    <div ref={sectionRef} className="px-6 xl:px-20 overflow-hidden relative">
      <div className="overflow-hidden">
        <UnderlinedHeading
          tagType={IHeadingTags.h2}
          type={IHeadingTypes.heading56}
          customClasses="text-center"
          content="Our Services"
          compRef={homeServicesRef}
        />
      </div>
      <div className="overflow-hidden">
        <Description
          compRef={homeServicesContentRef}
          customClasses="xl:mt-10 mt-4 text-center xl:px-[256px]"
          content="Cosmic Security specializes in tailored security solutions across eight major areas, ensuring comprehensive protection for diverse business needs."
        />
      </div>
      <div
        ref={divRef}
        className="xl:flex hidden flex-row gap-x-8 mt-14 gap-y-12 justify-center items-center flex-wrap"
      >
        {servicesData.map((item) => (
          <HomeServiceCard
            key={item.count}
            cardImage={item.cardImage}
            title={item.title}
            description={item.description}
            customClass="serviceCard"
          />
        ))}
      </div>
      <div className="flex xl:hidden mt-6 md:mt-8 w-full h-full justify-center gap-3 md:gap-4 flex-wrap flex-row">
        {servicesData.map((item) => (
          <Link
            href={route.services}
            className="rounded-lg overflow-hidden relative top-0 left-0 w-[165px] h-[224px]"
            key={item.count}
          >
            <Image
              alt=""
              className="w-full h-full object-cover"
              src={item.cardImage}
            />
            <div className="bg-serviceCarGradient flex flex-row items-end justify-between px-2 py-4 w-full absolute z-[1] bottom-0 h-[56px]">
              <Heading content={item.title} type={IHeadingTypes.heading24} />
              <Image
                className="w-6 h-6"
                alt="arrow Red"
                src={icons.ARROW_RED}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomeServices;
