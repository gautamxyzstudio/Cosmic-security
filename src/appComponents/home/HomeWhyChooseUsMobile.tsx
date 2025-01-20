'use client';
import Description from '@/components/textTypes/Description';
import { IHeadingTags, IHeadingTypes } from '@/components/textTypes/Heading';
import UnderlinedHeading from '@/components/underlinedHeading/UnderlinedHeading';
import React, { useRef } from 'react';
import { images } from '../../../public/exporter';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import HomeChooseUsCard from './HomeChooseUsCard';
import { ChooseUsOne, ChooseUsTwo } from './HomeWhyChooseUs';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const HomeWhyChooseUsMobile = () => {
  const imageRef = useRef<HTMLImageElement | null>(null);

  useGSAP(() => {
    gsap.to(imageRef.current, {
      ease: 'none',
      duration: 10,
      repeat: -1,
      paused: false,
    });
  });
  const arraySlides = [...ChooseUsOne, ...ChooseUsTwo];
  return (
    <section className="overflow-x-hidden ">
      <UnderlinedHeading
        type={IHeadingTypes.heading56}
        tagType={IHeadingTags.h2}
        customClasses="text-center "
        content="Wy choose us"
      />
      <Description
        customClasses=" !mt-4 text-center  "
        content="Lorem Ipsum is simply dummy text of the printing and typesetting industry.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
      />
      <div className="mt-6 relative top-0 flex flex-row justify-center items-center left-0">
        <Image
          ref={imageRef}
          className="relative w-[254px] h-[254px]  top-0 left-0"
          src={images.CHOOSE_OUTER}
          alt=""
        />
        <Image
          src={images.CHOOSE_INNER}
          alt="security "
          className="absolute w-[104px] h-[132px] pt-6 pl-1"
        />
      </div>
      <div className="mt-6 ml-6 overflow-x-hidden">
        <Swiper
          grabCursor={true}
          scrollbar={false}
          effect="fade"
          updateOnWindowResize={true}
          cssMode
          spaceBetween={'16vw'}
          slidesPerView={'auto'}
        >
          {arraySlides.map((_, index) => (
            <SwiperSlide
              key={index}
              className={
                arraySlides.length - 1 === index ? '!w-min mr-6' : '!w-min'
              }
            >
              <HomeChooseUsCard icon={_.icon} title={_.title} decs={_.decs} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default HomeWhyChooseUsMobile;
