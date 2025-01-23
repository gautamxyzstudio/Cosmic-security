'use client';
import Description from '@/components/textTypes/Description';
import Heading, {
  IHeadingTags,
  IHeadingTypes,
} from '@/components/textTypes/Heading';
import React, { useRef } from 'react';
import HomeServiceCard from './HomeServiceCard';
import { servicesCardData } from '@/utils/mockdata';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import UnderlinedHeading from '@/components/underlinedHeading/UnderlinedHeading';
import Image from 'next/image';
import Link from 'next/link';
import { icons } from '../../../public/exporter';
import { route } from '@/constants/route';

const HomeServices = () => {
  const divRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    const targets: gsap.TweenTarget[] = gsap.utils.toArray('.serviceCard');
    targets.forEach((element, index) => {
      if (index % 2 === 0) {
        gsap.set(element, { rotate: '-8deg' });
      } else {
        gsap.set(element, { rotate: '8deg' });
      }
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
  });
  return (
    <section
      ref={sectionRef}
      className="px-6 xl:px-20 overflow-hidden relative"
    >
      <UnderlinedHeading
        tagType={IHeadingTags.h2}
        type={IHeadingTypes.heading56}
        customClasses="text-center "
        content="Our Services"
      />
      <Description
        customClasses="xl:mt-10 mt-4 text-center  xl:px-[256px]"
        content="Cosmic Security specializes in tailored security solutions across eight major areas, ensuring comprehensive protection for diverse business needs."
      />
      <div
        ref={divRef}
        className="xl:flex hidden flex-row gap-x-8 mt-14 gap-y-12 justify-center  items-center flex-wrap"
      >
        {servicesCardData.map((item) => (
          <HomeServiceCard
            key={item.id}
            cardImage={item.cardImage}
            title={item.title}
            description={item.description}
            customClass={'serviceCard'}
          />
        ))}
      </div>
      <div className="flex xl:hidden mt-6 md:mt-8 w-full h-full justify-center  gap-3 md:gap-4 flex-wrap flex-row">
        {servicesCardData.map((item) => (
          <Link
            href={route.services}
            className="rounded-lg overflow-hidden relative top-0 left-0 w-[165px] h-[224px]"
            key={item.id}
          >
            <Image
              alt=""
              className="w-full h-full object-cover"
              src={item.cardImage}
            />
            <div className="bg-serviceCarGradient flex flex-row items-end justify-between px-2 py-4  w-full absolute z-[1]  bottom-0 h-[56px]">
              <Heading content={item.title} type={IHeadingTypes.heading24}  />
              <Image
                className="w-6 h-6"
                alt="arrow Red"
                src={icons.ARROW_RED}
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default HomeServices;
