"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { icons, images } from "../../../public/exporter";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Heading, {
  IHeadingTags,
  IHeadingTypes,
} from "@/components/textTypes/Heading";
import { STRINGS } from "@/constants/en";
import Description, {
  IDescriptionTypes,
} from "@/components/textTypes/Description";
import HomeTopCircularDiv from "./HomeTopCircularDiv";
import { phoneNumber } from "@/utils/mockdata";
import HomeGuardingView from "./HomeGuardingView";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const HomeTop = () => {
  const refs = {
    homeHeading: useRef<HTMLDivElement | null>(null),
    homeMainHeading: useRef<HTMLDivElement | null>(null),
    homeDec: useRef<HTMLParagraphElement | null>(null),
    callDiv: useRef<HTMLDivElement | null>(null),
    homeGuardingView: useRef<HTMLDivElement | null>(null),
  };

  useGSAP(() => {
    const mq = gsap.matchMedia();
    mq.add("(min-width: 1280px)", () => {
      const animations = [
        { ref: refs.homeHeading, yPercent: 100 },
        { ref: refs.homeMainHeading, yPercent: 130 },
        { ref: refs.homeDec, yPercent: 100 },
        { ref: refs.callDiv, yPercent: 100 },
        { ref: refs.homeGuardingView, xPercent: 100 },
      ];

      animations.forEach(({ ref, yPercent, xPercent }) => {
        gsap.from(ref.current, {
          yPercent: yPercent || 0,
          xPercent: xPercent || 0,
          opacity: 0,
          duration: 1.2,
          ease: "power1.inOut",
        });
      });
    });
    return () => mq.revert();
  });

  const bgImages = [
    images.HOME_TOP_ONE,
    images.HOME_TOP_TWO,
    images.HOME_TOP_THREE,
  ];
  return (
    <div className="w-full relative rounded-b-[40px] xl:rounded-b-[80px] h-[436px] md:h-[512px] xl:h-full xl:max-h-[863px] overflow-hidden top-0 left-0">
      <Swiper
        spaceBetween={30}
        centeredSlides
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop
        pagination={{ clickable: true }}
        className="relative w-full h-full bg-red top-0 left-0"
        modules={[Autoplay]}
      >
        {bgImages.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-full">
              <Image
                className="w-full h-full object-cover xl:object-contain"
                alt={`homeTop${index + 1}`}
                src={image}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute pt-[143px] md:pt-[156px] xl:pt-40 z-[1] bg-[#12121299] top-0 flex-row flex left-0 h-full w-full">
        <div className="w-full md:w-[60%] px-6 md:pl-10 xl:pl-20">
          <div className="overflow-hidden">
            <Description
              content="SERVING IN CANADA SINCE 2018"
              customClasses="!text-primary"
              compRef={refs.homeHeading}
            />
          </div>
          <div className="overflow-hidden">
            <Heading
              tagType={IHeadingTags.h1}
              content={STRINGS.homeHeading}
              customClasses="mt-2 xl:mt-4"
              type={IHeadingTypes.heading80}
              compRef={refs.homeMainHeading}
            />
          </div>
          <div className="overflow-hidden">
            <Description
              compRef={refs.homeDec}
              customClasses="mt-3 xl:mt-6"
              content={STRINGS.homeDec}
            />
          </div>
          <div className="overflow-hidden">
            <div
              ref={refs.callDiv}
              className="mt-3 xl:mt-6 gap-x-2 xl:gap-x-4 items-center flex flex-row"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 xl:w-14 xl:h-14"
                width="56"
                height="56"
                viewBox="0 0 56 56"
                fill="none"
              >
                <circle cx="28" cy="28" r="28" fill="#C1272D" />
                <path
                  d="M37.0865 29.2382C36.8208 29.2382 36.543 29.1537 36.2773 29.0933C35.7392 28.9747 35.2104 28.8173 34.695 28.6222C34.1347 28.4184 33.5188 28.429 32.9658 28.6519C32.4128 28.8749 31.9618 29.2945 31.6996 29.8301L31.4339 30.3736C30.2574 29.7191 29.1764 28.9063 28.221 27.9579C27.2726 27.0025 26.4598 25.9215 25.8054 24.7451L26.3127 24.4069C26.8482 24.1447 27.2678 23.6937 27.4908 23.1407C27.7138 22.5877 27.7243 21.9718 27.5205 21.4115C27.3287 20.895 27.1714 20.3665 27.0494 19.8292C26.9891 19.5635 26.9407 19.2857 26.9045 19.0079C26.7578 18.1571 26.3122 17.3867 25.6479 16.8353C24.9836 16.2839 24.1442 15.9878 23.281 16.0004H19.6575C19.137 15.9955 18.6215 16.1028 18.1462 16.3151C17.6708 16.5273 17.2468 16.8395 16.903 17.2303C16.5591 17.6211 16.3035 18.0815 16.1536 18.58C16.0036 19.0785 15.9629 19.6034 16.034 20.1191C16.6775 25.1792 18.9884 29.8806 22.6018 33.4809C26.2152 37.0811 30.925 39.375 35.9874 40H36.4464C37.337 40.0013 38.197 39.6745 38.862 39.082C39.2442 38.7403 39.5494 38.3213 39.7576 37.8529C39.9658 37.3844 40.0722 36.8771 40.0699 36.3644V32.7409C40.0551 31.902 39.7496 31.0941 39.2055 30.4553C38.6614 29.8165 37.9125 29.3863 37.0865 29.2382ZM37.6904 36.4852C37.6902 36.6567 37.6535 36.8262 37.5827 36.9824C37.5119 37.1386 37.4086 37.2779 37.2798 37.3911C37.1448 37.5076 36.987 37.5947 36.8165 37.6466C36.6459 37.6986 36.4664 37.7144 36.2894 37.693C31.7659 37.113 27.5643 35.0436 24.3472 31.8112C21.1301 28.5789 19.0807 24.3674 18.5222 19.8413C18.5029 19.6644 18.5198 19.4854 18.5717 19.3151C18.6236 19.1449 18.7095 18.987 18.8241 18.8509C18.9373 18.722 19.0766 18.6188 19.2328 18.548C19.389 18.4772 19.5585 18.4404 19.73 18.4402H23.3535C23.6344 18.434 23.9086 18.5258 24.1291 18.7C24.3495 18.8741 24.5024 19.1197 24.5613 19.3944C24.6096 19.7245 24.67 20.0506 24.7425 20.3727C24.882 21.0094 25.0677 21.6351 25.2981 22.2449L23.6071 23.03C23.4625 23.0963 23.3325 23.1905 23.2244 23.3073C23.1164 23.424 23.0324 23.5609 22.9774 23.7102C22.9225 23.8595 22.8975 24.0181 22.904 24.1771C22.9105 24.336 22.9483 24.4921 23.0153 24.6364C24.7536 28.3598 27.7467 31.3529 31.4701 33.0912C31.7642 33.212 32.094 33.212 32.3881 33.0912C32.5387 33.0373 32.6771 32.9541 32.7953 32.8462C32.9135 32.7384 33.0091 32.6082 33.0765 32.4631L33.8254 30.7722C34.4498 30.9955 35.0871 31.181 35.7338 31.3278C36.0558 31.4002 36.382 31.4606 36.7121 31.5089C36.9868 31.5679 37.2324 31.7207 37.4065 31.9412C37.5807 32.1616 37.6725 32.4359 37.6663 32.7168L37.6904 36.4852Z"
                  fill="white"
                />
              </svg>
              <div>
                <Description
                  type={IDescriptionTypes.dec16}
                  content={STRINGS.callUsToday}
                />
                <Description
                  content={phoneNumber}
                  customClasses="xl:font-bold"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          ref={refs.homeGuardingView}
          className="h-full hidden xl:inline-block w-[40%]"
        >
          <HomeGuardingView />
        </div>
        <div className="absolute hidden xl:inline-block bottom-[20px] left-[46.3%]">
          <HomeTopCircularDiv />
        </div>
        <Image
          alt=""
          className="absolute hidden xl:inline-block w-[140px] bottom-[82px] left-0 h-[140px] object-contain"
          src={icons.CORNER_LEFT}
        />
        <svg
          pointerEvents="none"
          className="absolute hidden xl:inline-block bottom-[82px] z-30 right-0"
          viewBox="0 0 146 125"
          fill="none"
          width="146"
          height="125"
        >
          <path
            d="M146 125V0C146 69.0356 80.6335 125 0 125H146Z"
            fill="#282828"
          />
        </svg>
        <div className="h-[84px] hidden xl:inline-block w-full bottom-0 absolute z-10">
          <Image
            className="w-full h-[84px]"
            src={images.HOME_BOTTOM_DIV}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default HomeTop;
