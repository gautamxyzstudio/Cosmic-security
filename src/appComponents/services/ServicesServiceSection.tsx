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
      "Cosmic Security's mobile guarding and patrolling service operates around the clock, ensuring the constant security of your sites. Our teams are trained to respond promptly to emergency situations, offering a proactive layer of protection. With agile patrols and a commitment to 24/7 vigilance, trust us for reliable and responsive security services tailored to your requirements. Your peace of mind is our priority at Cosmic Security. Experience the assurance of continuous protection with our mobile security solutions.",
    cardImage: images.SERVICE_CARD_ONE,
  },
  {
    count: 2,
    title: 'Event Security',
    description:
      'Cosmic Security specializes in event security, encompassing concerts, music festivals, games, and sports events. Our seasoned guards, supervisors, and smart deployment strategies ensure a seamless and secure experience for every occasion. Trust us to safeguard your events with professionalism and expertise.',
    cardImage: images.SERVICE_CARD_TWO,
  },
  {
    count: 3,
    title: 'Loss Prevention',
    description:
      'Cosmic Security specializes in loss prevention and retail security, implementing proactive measures to safeguard your assets. Our experienced team is adept at deterring theft and ensuring a secure shopping environment. Trust us for comprehensive loss prevention strategies tailored to the retail industry, offering peace of mind for both businesses and customers.',
    cardImage: images.SERVICE_CARD_THREE,
  },
  {
    count: 4,
    title: 'Construction Site Security',
    description:
      'Cosmic Security provides comprehensive construction site security, ensuring the safety of your project 24/7. Our specialized services include smart access control, vigilant monitoring, and experienced guards, contributing to a secure construction environment. Trust us to protect your construction site with precision and dedication',
    cardImage: images.SERVICE_CARD_FOUR,
  },
  {
    count: 5,
    title: 'Fire Watch',
    description:
      'At Cosmic Security, our expertise extends to prompt buzzer response, ensuring swift access control, and thorough fire watch services to safeguard against potential risks. Trust us for a proactive approach to security and fire prevention tailored for your peace of mind',
    cardImage: images.SERVICE_CARD_FIVE,
  },
  {
    count: 6,
    title: 'CCTV Surveillance',
    description:
      "Cosmic Security's CCTV Surveillance service operates 24/7, providing vigilant monitoring for enhanced security. Our advanced technology ensures real-time oversight, offering a proactive approach to safeguarding your premises. Trust us for constant, reliable surveillance tailored to your specific needs. Your peace of mind is our priority at Cosmic Security. Experience heightened security with our dedicated CCTV services.",
    cardImage: images.SERVICE_CARD_SIX,
  },
  {
    count: 7,
    title: 'Concierge Services',
    description:
      'Cosmic Security extends premium concierge services, combining security and hospitality for a seamless experience. Our dedicated team ensures a welcoming environment while prioritizing safety and security. Trust us to elevate your space with professional and attentive concierge services tailored to your needs',
    cardImage: images.SERVICE_CARD_SEVEN,
  },
  {
    count: 8,
    title: 'Shopping Mall Security',
    description:
      'Cosmic Security is a trusted partner for shopping mall and store security, ensuring a safe and secure environment for businesses and customers alike. Our vigilant personnel and advanced security technology work seamlessly to deter threats and protect assets. Count on us for comprehensive security solutions tailored to the unique needs of shopping establishments, enhancing the overall safety and experience for everyone',
    cardImage: images.SERVICE_CARD_EIGHT,
  },
];
