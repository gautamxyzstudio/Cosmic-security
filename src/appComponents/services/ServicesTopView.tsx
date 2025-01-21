import Description from '@/components/textTypes/Description';
import Heading, {
  IHeadingTags,
  IHeadingTypes,
} from '@/components/textTypes/Heading';
import React from 'react';
import HomeChooseUsCard, {
  IHomeChooseUsCardProps,
} from '../home/HomeChooseUsCard';
import { icons } from '../../../public/exporter';

const ServicesTopView = () => {
  return (
    <div className="w-full px-20 h-screen pt-20  bg-no-repeat bg-[length:100%_80.7%]  bg-servicesTopBg max-h-[920px]">
      <div className="w-full h-[450px] flex flex-col justify-center items-center">
        <Heading
          content="Our Services"
          type={IHeadingTypes.heading80}
          tagType={IHeadingTags.h1}
        />
        <Description
          customClasses="!text-center !px-10 mt-6"
          content="Lorem ipsum dolor sit amet consectetur. Sodales volutpat lectus ut elementum semper nibh feugiat. Interdum faucibus maecenas pulvinar malesuada cursus turpis pretium."
        />
      </div>
      <div className="flex flex-row justify-between">
        <HomeChooseUsCard
          icon={icons.ON_SITE_GUARDING_SECONDARY_ICON}
          customClass="!w-[30%] !min-h-[268px] "
          title={'On-site Guarding'}
          decs={
            "Cosmic Security redefines security with remote guarding, integrating state-of-the-art CCTV technology for proactive surveillance and immediate response. Your property's protection is our priority, even from a distance."
          }
        />
        <HomeChooseUsCard
          icon={icons.MOBILE_GUARDING_SECONDARY_ICON}
          customClass="!w-[30%] !min-h-[268px]"
          title={'Mobile Guarding'}
          decs={
            "Cosmic Security redefines security with remote guarding, integrating state-of-the-art CCTV technology for proactive surveillance and immediate response. Your property's protection is our priority, even from a distance."
          }
        />
        <HomeChooseUsCard
          icon={icons.REMOTE_GUARDING_SECONDARY_ICON}
          customClass="!w-[30%] !min-h-[268px] "
          title={'Remote Guarding'}
          decs={
            "Cosmic Security redefines security with remote guarding, integrating state-of-the-art CCTV technology for proactive surveillance and immediate response. Your property's protection is our priority, even from a distance."
          }
        />
      </div>
    </div>
  );
};

export default ServicesTopView;

export const services: IHomeChooseUsCardProps[] = [
  {
    icon: icons.CLOCK_ICON,
    title: 'Perfection anytime',
    decs: 'We have commitment to delivering flawless services at all times and dedication to providing impeccable security solutions consistently. We offer a high standard of service, reliability, and excellence in safeguarding businesses and events.',
  },
  {
    icon: icons.CLOCK_ICON,
    title: 'Emergency help',
    decs: 'At Cosmic Security, we prioritize your safety. Our commitment to the fastest emergency response ensures support is dispatched promptly, providing reassurance in critical situations. Trust in our swift and reliable security services. ',
  },
  {
    icon: icons.ADV_TECH_ICON,
    title: 'Advance technology',
    decs: 'At Cosmic Security, we integrate cutting-edge technology for your safety. Our advanced systems include scanning checkpoints, building access control, CCTV, and metal detectors, ensuring comprehensive security solutions',
  },
];
