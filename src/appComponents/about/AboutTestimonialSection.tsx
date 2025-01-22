'use client';
import Description from '@/components/textTypes/Description';
import { IHeadingTags } from '@/components/textTypes/Heading';
import UnderlinedHeading from '@/components/underlinedHeading/UnderlinedHeading';
import React from 'react';
import AboutTestimonialCard from './AboutTestimonialCard';
import { images } from '../../../public/exporter';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

const AboutTestimonialSection = () => {
  return (
    <section className="mt-[124px] mx-20">
      <UnderlinedHeading
        customClasses="text-center"
        tagType={IHeadingTags.h2}
        content="Testimonials"
      />
      <Description
        customClasses="mt-4 text-center"
        content="Lorem ipsum is common with typesetting and printing businesses. The text did not start with the age of digital businesses as it has been used since 1500s or even earlier. "
      />
      <Swiper
        modules={[Pagination, Autoplay]}
        loop={true}
        autoplay
        slidesPerView={1}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          768: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        className="mySwiper-pagination mt-14"
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
    userName: 'Hannah',
    userReview:
      'No One Can beat Cosmic Security for its emergency response. You can have your site secured by Cosmic Team in Maximum 2 hours',
    userImage: images.KUNAL,
    reviewFrom: 'Yelp Review',
  },
  {
    userName: 'Hannah',
    userReview:
      'No One Can beat Cosmic Security for its emergency response. You can have your site secured by Cosmic Team in Maximum 2 hours',
    userImage: images.KUNAL,
    reviewFrom: 'Yelp Review',
  },
  {
    userName: 'Hannah',
    userReview:
      'No One Can beat Cosmic Security for its emergency response. You can have your site secured by Cosmic Team in Maximum 2 hours',
    userImage: images.KUNAL,
    reviewFrom: 'Yelp Review',
  },
  {
    userName: 'Hannah',
    userReview:
      'No One Can beat Cosmic Security for its emergency response. You can have your site secured by Cosmic Team in Maximum 2 hours',
    userImage: images.KUNAL,
    reviewFrom: 'Yelp Review',
  },
  {
    userName: 'Hannah',
    userReview:
      'No One Can beat Cosmic Security for its emergency response. You can have your site secured by Cosmic Team in Maximum 2 hours',
    userImage: images.KUNAL,
    reviewFrom: 'Yelp Review',
  },
  {
    userName: 'Hannah',
    userReview:
      'No One Can beat Cosmic Security for its emergency response. You can have your site secured by Cosmic Team in Maximum 2 hours',
    userImage: images.KUNAL,
    reviewFrom: 'Yelp Review',
  },
  {
    userName: 'Hannah',
    userReview:
      'No One Can beat Cosmic Security for its emergency response. You can have your site secured by Cosmic Team in Maximum 2 hours',
    userImage: images.KUNAL,
    reviewFrom: 'Yelp Review',
  },
  {
    userName: 'Hannah',
    userReview:
      'No One Can beat Cosmic Security for its emergency response. You can have your site secured by Cosmic Team in Maximum 2 hours',
    userImage: images.KUNAL,
    reviewFrom: 'Yelp Review',
  },
];
