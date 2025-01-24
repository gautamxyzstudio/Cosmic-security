import Description from '@/components/textTypes/Description';
import { IHeadingTags } from '@/components/textTypes/Heading';
import UnderlinedHeading from '@/components/underlinedHeading/UnderlinedHeading';
import React from 'react';
import { GIFS } from '../../../public/exporter';
import Image from 'next/image';

const AboutBusinessPlanSection = () => {
  return (
    <section className="mt-10 md:mt-14 lg:mt-16 xl:mt-[100px]  mx-6  xl:mx-20">
      <UnderlinedHeading
        customClasses=" xl:text-center"
        tagType={IHeadingTags.h2}
        content="Our Business Plan"
      />
      <Description
        customClasses="mt-3  xl:mt-4 xl:text-center"
        content="Lorem ipsum is common with typesetting and printing businesses. The text did not start with the age of digital businesses as it has been used since 1500s or even earlier. "
      />
      <Image
        className="mx-auto mt-6  md:mt-8 lg:mt-10 xl:mt-14"
        height={680}
        width={680}
        src={GIFS.MAP_GIF}
        alt="map"
      />
    </section>
  );
};

export default AboutBusinessPlanSection;
