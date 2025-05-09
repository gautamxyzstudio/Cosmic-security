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
    title: ' Site Guarding Construction',
    description:
'Protect your sites with 24/7 site guard. We control access, patrol the site, and protect valuable equipment and materials. We deter theft, vandalism, and trespassing—protecting your schedules and investments.',
  },
  {
    icon: images.SERVICE_CARD_ONE,
    title: 'Buzzer Response & Fire Watch',
    description:
'Our buzzer response and fire watch protect your site with security and compliance in event of system failure or conditions of higher risk. We possess fire risk observation, points of access, and prompt response through warning treatment to ensure risk and harm are mitigated. ',
  },
  {
    icon: images.SERVICE_CARD_TWO,
    title: 'CCTV Surveillance',
    description:
'We offer top-of-the-line 24/7 security monitoring to guard your property around the clock. Our security experts utilize advanced camera systems for detection, deterrence, and response—safe business with live alert and quick response.',
  },
  {
    icon: images.SERVICE_CARD_THREE,
    title: 'Concierge Services',
    description:
'Improve hospitality and security with our expert concierge service. Ideal for office towers, commercial towers, and residential condominiums, our concierge greets visitors, manages access, and provides a secure but inviting environment.',
  },
  {
    icon: images.SERVICE_CARD_FOUR,
    title: 'Shopping Mall Security',
    description:
'Our specialty is shopping mall and retail security, from single-point-of-contact officers, shoplifting deterrence, to monitoring. Our mission is to provide a safe atmosphere among customers and business owners so they can shop in confidence and enhance the enjoyment of shopping.',
  },
];
