'use client';
import Heading, {
  IHeadingTags,
  IHeadingTypes,
} from '@/components/textTypes/Heading';
import React from 'react';
import WhyNeedSecurityCard, {
  IWhyNeedSecurityCardProps,
} from './WhyNeedSecurityCard';
import { images } from '../../../public/exporter';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const WhyNeedSecurity = () => {
  return (
    <section className="xl:mx-20 mt-10 md:mt-14 overflow-hidden xl:mt-[128px]">
      <span className="flex gap-x-1 xl:gap-x-3 flex-row justify-center items-center">
        <Heading
          type={IHeadingTypes.heading56}
          content="Why Do You Need"
          tagType={IHeadingTags.h2}
        />
        <Heading
          type={IHeadingTypes.heading56}
          content="Security"
          customClasses="!text-primary"
          tagType={IHeadingTags.h2}
        />
        <Heading
          type={IHeadingTypes.heading56}
          content="?"
          tagType={IHeadingTags.h2}
        />
      </span>
      <div className=" hidden xl:flex  flex-row  mt-14 flex-wrap justify-center gap-x-10 gap-y-14">
        {whyChooseUsData.map((data) => (
          <WhyNeedSecurityCard key={data.id} {...data} />
        ))}
      </div>
      <div className="w-full">
        <div className="mt-6 ml-6 flex lg:hidden ">
          <Swiper
            grabCursor={true}
            scrollbar={false}
            effect="fade"
            updateOnWindowResize={true}
            className="w-full"
            spaceBetween={'16vw'}
            slidesPerView={'auto'}
          >
            {whyChooseUsData.map((_, index) => (
              <SwiperSlide
                key={index}
                className={
                  whyChooseUsData.length - 1 === index
                    ? '!w-min mr-6'
                    : '!w-min'
                }
              >
                <WhyNeedSecurityCard key={index} {..._} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default WhyNeedSecurity;

export interface IWhyNeedSecurityCardData extends IWhyNeedSecurityCardProps {
  id: number;
}

export const whyChooseUsData: IWhyNeedSecurityCardData[] = [
  {
    id: 0,
    image: images.CHOOSE_US_ONE,
    heading: 'Role of a Security Guard',
    description:
      'Cosmic Security excels in crowd control, offering effective strategies for events, concerts, and public gatherings. Our experienced team employs proactive measures to ensure a secure environment, managing crowds with professionalism and precision. Trust us for expert crowd control services that prioritize safety and enhance the overall experience for all attendees.',
  },
  {
    id: 1,
    image: images.CHOOSE_US_TWO,
    heading: 'Crowd Control',
    description:
      'Cosmic Security excels in crowd control, offering effective strategies for events, concerts, and public gatherings. Our experienced team employs proactive measures to ensure a secure environment, managing crowds with professionalism and precision. Trust us for expert crowd control services that prioritize safety and enhance the overall experience for all attendees.',
  },
  {
    id: 2,
    image: images.CHOOSE_US_THREE,
    heading: 'Powers of Arrest',
    description:
      'At Cosmic Security, with Advanced Security Licence, our personnel are empowered with the authority and responsibility of arrest, bolstering our commitment to ensuring a secure environment. With a focus on professionalism and adherence to legal protocols, our power of arrest is wielded responsibly to deter and address potential threats, providing an added layer of protection for our clients and their assets.',
  },
  {
    id: 4,
    image: images.CHOOSE_US_FOUR,
    heading: 'Patrol Techniques',
    description:
      'Cosmic Security employs advanced patrol techniques to enhance security measures. Our experienced teams are adept at strategic patrolling, utilizing a combination of technology and on-the-ground expertise. From mobile patrols to perimeter checks, our techniques are tailored for comprehensive coverage, ensuring a proactive approach to safeguarding your premises and assets.',
  },
  {
    id: 5,
    image: images.CHOOSE_US_FIVE,
    heading: 'Use of Force',
    description:
      'At Cosmic Security, the use of force is a last resort, employed only when necessary to protect lives and property. Our highly trained personnel adhere to strict guidelines, prioritizing de-escalation and conflict resolution. The responsible use of force is a measured response, ensuring the safety and well-being of all parties involved while upholding the highest standards of professionalism and ethics.',
  },
  {
    id: 6,
    image: images.CHOOSE_US_SIX,
    heading: 'First Aid',
    description:
      'At Cosmic Security, safety is paramount. Our personnel are trained in First Aid with (OFA level 1,2 and 3 training), ensuring a swift and effective response in emergencies. Whether at events, construction sites, or other locations, our commitment to providing a secure environment includes the capability to address medical incidents promptly, prioritizing the well-being of individuals under our care.',
  },
];
