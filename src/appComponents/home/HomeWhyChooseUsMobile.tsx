"use client";
import Description from "@/components/textTypes/Description";
import { IHeadingTags, IHeadingTypes } from "@/components/textTypes/Heading";
import UnderlinedHeading from "@/components/underlinedHeading/UnderlinedHeading";
import React, { useRef } from "react";
import { images } from "../../../public/exporter";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import HomeChooseUsCard from "./HomeChooseUsCard";
import { ChooseUsOne, ChooseUsTwo } from "./HomeWhyChooseUs";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const HomeWhyChooseUsMobile = () => {
  const imageRef = useRef<HTMLImageElement | null>(null);

  useGSAP(() => {
    gsap.to(imageRef.current, {
      rotation: 360,
      ease: "none",
      duration: 10,
      repeat: -1,
      paused: false,
    });
  });
  const arraySlides = [...ChooseUsOne, ...ChooseUsTwo];
  return (
    <section>
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-start text-center md:text-left mx-6 md:gap-x-24">
        <div className="flex flex-col w-full md:w-[54%] ">
          <UnderlinedHeading
            type={IHeadingTypes.heading56}
            tagType={IHeadingTags.h2}
            customClasses=""
            content="Wy choose us"
          />
          <Description
            customClasses="!mt-4"
              content="Cosmic Security offers reliable protection through trained professionals, advanced technology, and fast response times. We provide customized security solutions for homes, businesses, and events; keeping people and property safe, 24/7. Trust us for peace of mind that lasts. "
          />
        </div>
        <div className="mt-6 relative top-0 flex flex-row justify-center items-center left-0 ">
          <Image
            ref={imageRef}
            className="relative w-[254px] h-[254px] md:w-[184px] md:h-[192px]  top-0 left-0"
            src={images.CHOOSE_OUTER}
            alt=""
          />
          <Image
            src={images.CHOOSE_INNER}
            alt="security "
            className="absolute w-[104px] h-[132px] md:w-[85px] md:h-[108px] pt-6 pl-1"
          />
        </div>
      </div>
      <div className="mt-6 md:mt-5 ml-6 ">
        <Swiper
          grabCursor={true}
          scrollbar={false}
          className=" w-full"
          effect="fade"
          updateOnWindowResize={true}
          spaceBetween={"16vw"}
          slidesPerView={"auto"}
        >
          {arraySlides.map((_, index) => (
            <SwiperSlide
              className={
                arraySlides.length - 1 === index ? "!w-min mr-6" : "!w-min"
              }
              key={index}
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
