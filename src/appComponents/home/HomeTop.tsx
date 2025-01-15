'use client';
import Image from 'next/image';
import React from 'react';
import { images } from '../../../public/exporter';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Heading, {
  IHeadingTags,
  IHeadingTypes,
} from '@/components/textTypes/Heading';
import { STRINGS } from '@/constants/en';
import Description, {
  IDescriptionTypes,
} from '@/components/textTypes/Description';
import HomeTopCircularDiv from './HomeTopCircularDiv';
const HomeTop = () => {
  return (
    <div className="mx-10 relative max-h-[863px] overflow-hidden top-0 left-0">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop
        pagination={{
          clickable: true,
        }}
        className="relative top-0 left-0"
        navigation={true}
        modules={[Autoplay]}
      >
        <SwiperSlide>
          <div className="w-full">
            <Image alt="homeTopOne" src={images.HOME_TOP_ONE} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full">
            <Image
              alt="homeTopOne"
              className="w-full h-full"
              src={images.HOME_TOP_TWO}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full">
            <Image
              alt="homeTopOne"
              className="w-full h-full"
              src={images.HOME_TOP_THREE}
            />
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="absolute pt-40 z-[1] bg-[#12121299] top-0  left-0 h-full w-full">
        <div className="w-full h-full   px-20">
          <Heading
            tagType={IHeadingTags.h1}
            customClasses="!w-1/2"
            content={STRINGS.homeHeading}
            type={IHeadingTypes.heading80}
          />
          <div className="flex flex-row justify-end ">
            <Description
              type={IDescriptionTypes.dec24}
              customClasses="!w-1/2"
              content={STRINGS.homeDec}
            />
          </div>
        </div>
        <div className="absolute bottom-[20px] left-[46.3%]">
          <HomeTopCircularDiv />
        </div>
        <Image
          className="bottom-0 absolute h-[223px]"
          src={images.HOME_BOTTOM_DIV}
          alt=""
        />
      </div>
    </div>
  );
};

export default HomeTop;
