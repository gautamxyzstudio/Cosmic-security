'use client';
import Image from 'next/image';
import React, { useRef } from 'react';
import { icons, images } from '../../../public/exporter';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ServicesServiceCard from './ServicesServiceCard';
gsap.registerPlugin(ScrollTrigger);
const Services = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const circleRef = useRef<HTMLDivElement | null>(null);
  const lineRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    if (!circleRef.current || !sectionRef.current) return;
    gsap.to(circleRef.current, {
      rotate: 44,
      scrollTrigger: {
        trigger: sectionRef.current,
        pin: true,
        start: 'top 20%',
        end: '+=2000',
        scrub: 5,
      },
    });
    gsap.to(lineRef.current, {
      yPercent: -80,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 20%',
        end: '+=2000',
        scrub: 5,
      },
    });
  }, []);

  return (
    <section className="xl:ml-20  mt-10 justify-between md:mt-14 overflow-y-scroll overflow-x-hidden relative top-0 left-0 xl:mt-[128px]">
      <div
        ref={sectionRef}
        className="h-[640px]  relative  overflow-hidden  mt-10  pt-20"
      >
        <div ref={lineRef} className="w-[40%] absolute  ml-2">
          <div className="absolute w-12 left-0 top-0">
            <Image
              className="-mb-2"
              src={icons.SERVICE_LINE_TOP}
              alt="top line"
            />
            <svg
              width={48}
              height={3063}
              className="justify-center flex flex-row pl-[23px] items-center w-12 h-full"
            >
              <line
                className="relative"
                x1="0"
                y1="100%"
                x2="0"
                y2="0"
                stroke="#C1272D"
                strokeWidth="2"
              />
            </svg>
          </div>
          <div className="pt-[108px] flex-col flex gap-y-8 relative z-[1]">
            {servicesData.map((service, index) => (
              <ServicesServiceCard
                customClass="service"
                key={index}
                {...service}
              />
            ))}
          </div>
        </div>
        <div className="flex justify-center absolute  items-center top-0 bottom-0 right-[5rem]">
          <div
            ref={circleRef}
            className="will-change-transform  grid-rows-4 transform rotate-[-41deg] rounded-full flex  gap-y-12 flex-col justify-center left-0 items-start w-[250rem] aspect-square absolute transform-3d"
          >
            <div
              style={{ transform: 'translate(89%, 3%) rotate(35deg)' }}
              className="rounded-lg relative w-[16%] -left-[15%] "
            >
              <Image
                width={580}
                height={378}
                alt="image"
                className=" w-[580px] rotate-[5deg] h-[378px] "
                src={images.SERVICE_CARD_ONE}
              />
            </div>
            <div
              style={{
                transform: ' translate(49%, -4%) rotate(28deg)',
              }}
              className="rounded-lg relative w-[16%] -left-[15.5%] "
            >
              <Image
                width={580}
                height={378}
                alt="image"
                className=" w-[580px] h-[378px] "
                src={images.SERVICE_CARD_TWO}
              />
            </div>
            <div
              style={{
                transform: 'translate(21%, -3%) rotate(17deg)',
              }}
              className="rounded-lg relative w-[16%] -left-[15.5%] "
            >
              <Image
                width={580}
                height={378}
                alt="image"
                className=" w-[580px] h-[378px] "
                src={images.SERVICE_CARD_THREE}
              />
            </div>
            <div
              style={{
                transform: 'translate(7%, 7%) rotate(5deg)',
              }}
              className="rounded-lg relative w-[16%] -left-[15.5%] "
            >
              <Image
                width={580}
                height={378}
                alt="image"
                className=" w-[580px] h-[378px] "
                src={images.SERVICE_CARD_FOUR}
              />
            </div>
            <div
              style={{
                transform: ' translate(8%, 19%) rotate(-8deg)',
              }}
              className="rounded-lg relative w-[16%] -left-[15.5%] "
            >
              <Image
                width={580}
                height={378}
                alt="image"
                className=" w-[580px] h-[378px] "
                src={images.SERVICE_CARD_FIVE}
              />
            </div>
            <div
              style={{
                transform: 'translate(25%, 27%) rotate(-19deg)',
              }}
              className="rounded-lg relative w-[16%] -left-[15.5%] "
            >
              <Image
                width={580}
                height={378}
                alt="image"
                className=" w-[580px] h-[378px] "
                src={images.SERVICE_CARD_SIX}
              />
            </div>
            <div
              style={{
                transform: ' translate(57%, 29%) rotate(-32deg)',
              }}
              className="rounded-lg relative w-[16%] -left-[15.5%] "
            >
              <Image
                width={580}
                height={378}
                alt="image"
                className=" w-[580px] h-[378px] "
                src={images.SERVICE_CARD_SEVEN}
              />
            </div>
            <div
              style={{
                transform: 'translate(102%, 16%) rotate(-44deg)',
              }}
              className="rounded-lg relative w-[16%] -left-[15.5%] "
            >
              <Image
                width={580}
                height={378}
                alt="image"
                className=" w-[580px] h-[378px] "
                src={images.SERVICE_CARD_EIGHT}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

export const servicesData = [
  {
    count: 1,
    title: 'Mobile Patrol',
    description:
      "24/7 around-the-clock roving patrol security is offered by Cosmic Security's mobile patrol facility. Our professionals respond to emergencies immediately, providing personalized proactive security based on your requirement with peace of mind at 24/7.",
    cardImage: images.SERVICE_CARD_ONE,
  },
  {
    count: 2,
    title: 'Event Security',
    description:
'We organize all events from concerts to corporate functions with event security services. Your visitors have secure, trouble-free experiences with our professional guards and effective measures so your event stays safe with care and professionalism.',    cardImage: images.SERVICE_CARD_TWO,
  },
  {
    count: 3,
    title: 'Loss Prevention',
    description:

'Our loss prevention solutions render retail areas secure. Deterrence policies are applied in preventive measures to render assets secure and provide a secure shopping environment for consumers and businesses.',
    cardImage: images.SERVICE_CARD_THREE,
  },
  {
    count: 4,
    title: 'Construction Site Protection',
    description:
'Cosmic Security provides professional construction site security services like 24/7 monitoring, intelligent access control, and professional guarding services. We secure your project and your site, material, and equipment around the clock.',
    cardImage: images.SERVICE_CARD_FOUR,
  },
  {
    count: 5,
    title: 'Fire Watch',
    description:
'Our buzzer response and fire watch protect your site with security and compliance in event of system failure or conditions of higher risk. We possess fire risk observation, points of access, and prompt response through warning treatment to ensure risk and harm are mitigated. ',
    cardImage: images.SERVICE_CARD_FIVE,
  },
  {
    count: 6,
    title: 'CCTV Surveillance',
    description:
'We offer top-of-the-line 24/7 security monitoring to guard your property around the clock. Our security experts utilize advanced camera systems for detection, deterrence, and response—safe business with live alert and quick response.',
    cardImage: images.SERVICE_CARD_SIX,
  },
  {
    count: 7,
    title: 'Concierge Services',
    description:
'Improve hospitality and security with our expert concierge service. Ideal for office towers, commercial towers, and residential condominiums, our concierge greets visitors, manages access, and provides a secure but inviting environment.',
    cardImage: images.SERVICE_CARD_SEVEN,
  },
  {
    count: 8,
    title: 'Shopping Mall Security',
    description:
'Our specialty is shopping mall and retail security, from single-point-of-contact officers, shoplifting deterrence, to monitoring. Our mission is to provide a safe atmosphere among customers and business owners so they can shop in confidence and enhance the enjoyment of shopping.',
    cardImage: images.SERVICE_CARD_EIGHT,
  },
];
