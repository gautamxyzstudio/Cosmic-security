"use client";
import Description from "@/components/textTypes/Description";
import { IHeadingTags } from "@/components/textTypes/Heading";
import UnderlinedHeading from "@/components/underlinedHeading/UnderlinedHeading";
import React, { useRef } from "react";
import AboutTestimonialCard from "./AboutTestimonialCard";
import { images } from "../../../public/exporter";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const AboutTestimonialSection = () => {
  gsap.registerPlugin(ScrollTrigger);
  const TestimonialHeadingRef = useRef<HTMLDivElement | null>(null);
  const TestimonialDescriptionRef = useRef<HTMLParagraphElement | null>(null);
  const TestimonialSectionRef = useRef<HTMLDivElement | null>(null);
  useGSAP(() => {
    const mq = gsap.matchMedia();
    mq.add("(min-width: 1024px)", () => {
      const t1 = gsap.timeline({
        ease: "power1.out",
        scrollTrigger: {
          trigger: TestimonialSectionRef.current,
          start: "top 95%",
          end: "10% 90%",
        },
      });
      t1.add("startT1");
      t1.from(
        TestimonialHeadingRef.current,
        {
          opacity: 0,
          duration: 1.2,
          yPercent: 100,
        },
        "startT1"
      ).from(
        TestimonialDescriptionRef.current,
        {
          opacity: 0,
          yPercent: 100,
          duration: 1.2,
        },
        "startT1"
      );
    });
    return () => mq.revert();
  });
  return (
    <section
      ref={TestimonialSectionRef}
      className="mt-10 md:mt-14 lg:mt-16 xl:mt-[124px] mx-6 xl:mx-20"
    >
      <div className="overflow-hidden">
        <UnderlinedHeading
          customClasses=" xl:text-center"
          tagType={IHeadingTags.h2}
          content="Testimonials"
          compRef={TestimonialHeadingRef}
        />
      </div>
      <div className="overflow-hidden">
        <Description
          compRef={TestimonialDescriptionRef}
          customClasses=" mt-3 md:mt-4 xl:text-center"
          content="Lorem ipsum is common with typesetting and printing businesses. The text did not start with the age of digital businesses as it has been used since 1500s or even earlier. "
        />
      </div>
      <Swiper
        modules={[Pagination, Autoplay]}
        loop={true}
        autoplay
        slidesPerView={1.3}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          768: {
            slidesPerView: 2.3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3.3,
            spaceBetween: 30,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        className="mySwiper-pagination mt-6 md:mt-8 lg:mt-10 xl:mt-14"
      >
        {testimonialData.map((testimonial, index) => (
          <SwiperSlide className="w-min pt-3 " key={index}>
            <AboutTestimonialCard
              userName={testimonial.userName}
              userReview={testimonial.userReview}
              userImage={testimonial.userImage}
              reviewFrom={testimonial.reviewFrom}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default AboutTestimonialSection;

const testimonialData = [
  {
    userName: "Hannah",
    userReview:
      "No One Can beat Cosmic Security for its emergency response. You can have your site secured by Cosmic Team in Maximum 2 hours",
    userImage: images.KUNAL,
    reviewFrom: "Yelp Review",
  },
  {
    userName: "Hannah",
    userReview:
      "No One Can beat Cosmic Security for its emergency response. You can have your site secured by Cosmic Team in Maximum 2 hours",
    userImage: images.KUNAL,
    reviewFrom: "Yelp Review",
  },
  {
    userName: "Hannah",
    userReview:
      "No One Can beat Cosmic Security for its emergency response. You can have your site secured by Cosmic Team in Maximum 2 hours",
    userImage: images.KUNAL,
    reviewFrom: "Yelp Review",
  },
  {
    userName: "Hannah",
    userReview:
      "No One Can beat Cosmic Security for its emergency response. You can have your site secured by Cosmic Team in Maximum 2 hours",
    userImage: images.KUNAL,
    reviewFrom: "Yelp Review",
  },
  {
    userName: "Hannah",
    userReview:
      "No One Can beat Cosmic Security for its emergency response. You can have your site secured by Cosmic Team in Maximum 2 hours",
    userImage: images.KUNAL,
    reviewFrom: "Yelp Review",
  },
  {
    userName: "Hannah",
    userReview:
      "No One Can beat Cosmic Security for its emergency response. You can have your site secured by Cosmic Team in Maximum 2 hours",
    userImage: images.KUNAL,
    reviewFrom: "Yelp Review",
  },
  {
    userName: "Hannah",
    userReview:
      "No One Can beat Cosmic Security for its emergency response. You can have your site secured by Cosmic Team in Maximum 2 hours",
    userImage: images.KUNAL,
    reviewFrom: "Yelp Review",
  },
  {
    userName: "Hannah",
    userReview:
      "No One Can beat Cosmic Security for its emergency response. You can have your site secured by Cosmic Team in Maximum 2 hours",
    userImage: images.KUNAL,
    reviewFrom: "Yelp Review",
  },
];
