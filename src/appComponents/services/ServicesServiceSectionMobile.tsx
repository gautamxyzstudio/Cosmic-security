import React from 'react';
import ServicesServiceCardMobile from './ServicesServiceCardMobile';
import { images } from '../../../public/exporter';

const ServicesServiceSectionMobile = () => {
  return (
    <section className="px-6 mt-10 md:pt-14 md:mt-4">
      <div className="flex gap-y-3 flex-col">
        {servicesData.map((service, index) => (
          <ServicesServiceCardMobile
            key={index}
            poster={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesServiceSectionMobile;

const servicesData = [
  {
    icon: images.SERVICE_CARD_ONE,
    title: 'Mobile Patrol',
    description:
      "Cosmic Security's mobile guarding and patrolling service operates around the clock, ensuring the constant security of your sites. Our teams are trained to respond promptly to emergency situations, offering a proactive layer of protection. With agile patrols and a commitment to 24/7 vigilance, trust us for reliable and responsive security services tailored to your requirements. Your peace of mind is our priority at Cosmic Security. Experience the assurance of continuous protection with our mobile security solutions.",
  },
  {
    icon: images.SERVICE_CARD_TWO,
    title: 'Event Security',
    description:
      'Cosmic Security specializes in event security, encompassing concerts, music festivals, games, and sports events. Our seasoned guards, supervisors, and smart deployment strategies ensure a seamless and secure experience for every occasion. Trust us to safeguard your events with professionalism and expertise.',
  },
  {
    icon: images.SERVICE_CARD_THREE,
    title: 'Loss Prevention',
    description:
      'Cosmic Security specializes in loss prevention and retail security, implementing proactive measures to safeguard your assets. Our experienced team is adept at deterring theft and ensuring a secure shopping environment. Trust us for comprehensive loss prevention strategies tailored to the retail industry, offering peace of mind for both businesses and customers.',
  },
  {
    icon: images.SERVICE_CARD_FOUR,
    title: 'Construction Site Security',
    description:
      'Cosmic Security provides comprehensive construction site security, ensuring the safety of your project 24/7. Our specialized services include smart access control, vigilant monitoring, and experienced guards, contributing to a secure construction environment. Trust us to protect your construction site with precision and dedication',
  },
  {
    icon: images.SERVICE_CARD_ONE,
    title: 'Fire Watch',
    description:
      'At Cosmic Security, our expertise extends to prompt buzzer response, ensuring swift access control, and thorough fire watch services to safeguard against potential risks. Trust us for a proactive approach to security and fire prevention tailored for your peace of mind',
  },
  {
    icon: images.SERVICE_CARD_TWO,
    title: 'CCTV Surveillance',
    description:
      "Cosmic Security's CCTV Surveillance service operates 24/7, providing vigilant monitoring for enhanced security. Our advanced technology ensures real-time oversight, offering a proactive approach to safeguarding your premises. Trust us for constant, reliable surveillance tailored to your specific needs. Your peace of mind is our priority at Cosmic Security. Experience heightened security with our dedicated CCTV services.",
  },
  {
    icon: images.SERVICE_CARD_THREE,
    title: 'Concierge Services',
    description:
      'Cosmic Security extends premium concierge services, combining security and hospitality for a seamless experience. Our dedicated team ensures a welcoming environment while prioritizing safety and security. Trust us to elevate your space with professional and attentive concierge services tailored to your needs',
  },
  {
    icon: images.SERVICE_CARD_FOUR,
    title: 'Shopping Mall Security',
    description:
      'Cosmic Security is a trusted partner for shopping mall and store security, ensuring a safe and secure environment for businesses and customers alike. Our vigilant personnel and advanced security technology work seamlessly to deter threats and protect assets. Count on us for comprehensive security solutions tailored to the unique needs of shopping establishments, enhancing the overall safety and experience for everyone',
  },
];
