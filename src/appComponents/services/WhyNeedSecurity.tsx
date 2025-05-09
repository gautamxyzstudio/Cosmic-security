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
    <section className="xl:mx-20 mt-10 md:mt-14 overflow-hidden xl:mt-[0]">
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
        <div className="mt-6 ml-6 flex xl:hidden ">
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
    heading: 'Security Guard Role ',
    description:
      'Cosmic Security is a professional crowd controller offering efficient solutions for events, concerts, and public gatherings. Our professionals take proactive measures in ensuring a safe environment, professionally controlling crowds with expertise. Let us take care of your professional crowd control solutions paying attention to safety and delivering a praiseworthy experience to all. ',
  },
  {
    id: 1,
    image: images.CHOOSE_US_TWO,
    heading: 'Crowd Control',
    description:
'Cosmic Security specializes in crowd control and provides effective event planning, concerts, and public events. Our professionals utilize effective methods to provide a safe environment, professionally and accurately handling crowds. Trust us for safety-oriented professional crowd control services that maximize the entertainment of everyone.  ',
  },
  {
    id: 2,
    image: images.CHOOSE_US_THREE,
    heading: 'Powers of Arrest',
    description:
'Through holding Advanced Security License in Cosmic Security, our officers are endowed with arrest powers and arrest rights, thus validating our dedication to provide a safe environment. Through focusing on professionalism and adherence to legal procedures, our arrest power is exercised responsibly in an attempt to deter and rectify future risks, providing further security to clients and their properties. ',
  },
  {
    id: 4,
    image: images.CHOOSE_US_FOUR,
    heading: 'Patrol Techniques',
    description:
'Through holding Advanced Security License in Cosmic Security, our officers are endowed with arrest powers and arrest rights, thus validating our dedication to provide a safe environment. Through focusing on professionalism and adherence to legal procedures, our arrest power is exercised responsibly in an attempt to deter and rectify future risks, providing further security to clients and their properties. ',
  },
  {
    id: 5,
    image: images.CHOOSE_US_FIVE,
    heading: 'Use of Force',
    description:
'Force on Cosmic Security is utilized only as a last resort, only where absolutely necessary for the safety of life and property. Our highly trained staff observe strict guidelines with a priority to de-escalation and conflict resolution. Proper use of force is a measured response with safety and well-being to all concerned and adhering to the highest standards of ethical professional values and integrity. ',
  },
  {
    id: 6,
    image: images.CHOOSE_US_SIX,
    heading: 'First Aid',
    description:
'Safety is our first priority at Cosmic Security. Our staff are First Aid trained (OFA level 1,2 and 3 trained) to respond quickly and effectively should an emergency occur. From operations to construction sites and other places, our commitment to offering a safe environment encompasses being able to respond to medical emergencies quickly, with the health and safety of people in our care being of utmost importance to us. ',
  },
];
