'use client';
import { IHeadingTags, IHeadingTypes } from '@/components/textTypes/Heading';
import Image from 'next/image';
import React, { useRef } from 'react';
import { images } from '../../../public/exporter';
import Description, {
  IDescriptionTypes,
} from '@/components/textTypes/Description';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
// import gsap
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import UnderlinedHeading from '@/components/underlinedHeading/UnderlinedHeading';

const OurTeamBottom = () => {
  gsap.registerPlugin(ScrollTrigger);
  const mainSectionRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const teamDetailDivRef = useRef<HTMLDivElement | null>(null);
  useGSAP(() => {
    const mq = gsap.matchMedia();
    mq.add('(min-width: 1280px)', () => {
      const t1 = gsap.timeline({
        scrollTrigger: {
          trigger: mainSectionRef.current,
          start: 'top 100%',
          end: '70% 90%',
        },
      });
      t1.add('startT1')
        .from(
          headingRef.current,
          {
            xPercent: -100,
            ease: 'power1.inOut',
            duration: 1.5,
            opacity: 0,
          },
          'startT1'
        )

        .from(
          teamDetailDivRef.current,
          {
            xPercent: 100,
            ease: 'power1.inOut',
            duration: 1.4,
            opacity: 0,
          },
          'startT1'
        );
    });
    return () => mq.revert();
  });
  return (
    <section
      ref={mainSectionRef}
      className="px-6 xl:px-20 w-full h-full flex flex-col items-center md:items-start gap-y-6 lg:gap-y-9  xl:gap-y-14 overflow-hidden"
    >
      <div ref={headingRef}>
        <UnderlinedHeading
          tagType={IHeadingTags.h2}
          type={IHeadingTypes.heading56}
          content="Cosmic Beings"
        />
      </div>
      {/* Desktop view */}
      <div
        ref={teamDetailDivRef}
        className="hidden xl:flex gap-x-10 w-full h-full items-center justify-between"
      >
        {TeamDetails.map((item, index) => {
          return (
            <div key={index} className="flex flex-col w-[224px] h-[300px]">
              <Image
                alt={item.name}
                src={item.path}
                className="w-[224px] h-[212px] rounded-t-xl"
              />
              <div className="bg-black p-3 rounded-b-xl flex flex-col w-full h-[88px]">
                <Description
                  customClasses="!text-primary"
                  content={item.name}
                  type={IDescriptionTypes.dec16}
                />
                <Description
                  content={item.role}
                  type={IDescriptionTypes.dec12_static}
                />
              </div>
            </div>
          );
        })}
      </div>
      {/* End Desktop */}
      {/* Mobile view */}
      <div className="xl:hidden flex w-full h-full">
        <Swiper
          modules={[Pagination, Autoplay]}
          loop={true}
          autoplay
          slidesPerView={2}
          spaceBetween={50}
          pagination={{
            clickable: true, 
          }}
          breakpoints={{
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3.5,
              spaceBetween: 50,
            },
          }}
          className="mySwiper-pagination"
        >
          {TeamDetails.map((team) => (
            <SwiperSlide key={team.id}>
              <div className="flex flex-col min-w-[180px] h-[240px] md:min-w-[224px] md:h-[300px] lg:min-w-[260px] lg:h-[319px]">
                <Image
                  alt={team.name}
                  src={team.path}
                  width={260}
                  height={391}
                  className="w-[180px] h-[164px] md:w-[224px] md:h-[212px] lg:w-[260px] lg:h-[235px] rounded-t-lg object-cover"
                />
                <div className="bg-black p-2 rounded-b-lg flex flex-col  h-[76px] md:h-[88px] lg:h-[100px]">
                  <Description
                    customClasses="!text-primary"
                    content={team.name}
                    type={IDescriptionTypes.dec16_sec}
                  />
                  <Description
                    content={team.role}
                    type={IDescriptionTypes.dec12_static}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* End Mobile */}
    </section>
  );
};

export default OurTeamBottom;

export const TeamDetails = [
  { id: 1, path: images.SHERRY, name: 'Sherry Sidhu', role: 'CEO/Founder' },
  { id: 2, path: images.PARAMJIT, name: 'Paramjit Kaur', role: 'Co-Founder' },
  {
    id: 3,
    path: images.AMRIT,
    name: 'Amritpal Singh',
    role: 'Sr. Account Manager',
  },
  {
    id: 4,
    path: images.KUNAL,
    name: 'Kunal Sethi',
    role: 'Vice President of Business Development',
  },
  { id: 5, path: images.JASMINE, name: 'Jasmine', role: 'Operations Manager' },
];
