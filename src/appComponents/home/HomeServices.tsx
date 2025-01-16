'use client';
import Description from '@/components/textTypes/Description';
import { IHeadingTags, IHeadingTypes } from '@/components/textTypes/Heading';
import React, { useRef } from 'react';
import HomeServiceCard from './HomeServiceCard';
import { servicesCardData } from '@/utils/mockdata';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import UnderlinedHeading from '@/components/underlinedHeading/UnderlinedHeading';

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
    <section ref={sectionRef} className="px-20 overflow-hidden relative">
      <UnderlinedHeading
        tagType={IHeadingTags.h2}
        type={IHeadingTypes.heading56}
        customClasses="text-center "
        content="Our Services"
      />
      <Description
        customClasses="mt-10 text-center px-[256px]"
        content="Cosmic Security specializes in tailored security solutions across eight major areas, ensuring comprehensive protection for diverse business needs."
      />
      <div
        ref={divRef}
        className="flex  flex-row gap-x-8 mt-14 gap-y-12 justify-center  items-center flex-wrap"
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
    </section>
  );
};

export default HomeServices;
