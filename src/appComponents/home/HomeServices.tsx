import Description from '@/components/textTypes/Description';
import Heading, {
  IHeadingTags,
  IHeadingTypes,
} from '@/components/textTypes/Heading';
import React from 'react';
import HomeServiceCard from './HomeServiceCard';
import { servicesCardData } from '@/utils/mockdata';

const HomeServices = () => {
  return (
    <section className="px-20">
      <Heading
        tagType={IHeadingTags.h2}
        type={IHeadingTypes.heading56}
        customClasses="text-center"
        content="Our Services"
      />
      <Description
        customClasses="mt-10 text-center px-[256px]"
        content="Cosmic Security specializes in tailored security solutions across eight major areas, ensuring comprehensive protection for diverse business needs."
      />
      <div className="flex flex-row gap-x-8 mt-14 gap-y-12  flex-wrap">
        {servicesCardData.map((item) => (
          <HomeServiceCard
            key={item.id}
            cardImage={item.cardImage}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
};

export default HomeServices;
