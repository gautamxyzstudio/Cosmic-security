import Description from '@/components/textTypes/Description';
import { IHeadingTags } from '@/components/textTypes/Heading';
import UnderlinedHeading from '@/components/underlinedHeading/UnderlinedHeading';
import React from 'react';
import { GIFS } from '../../../public/exporter';
import Image from 'next/image';

const AboutBusinessPlanSection = () => {
  return (
    <section className="mt-[124px] mx-20">
      <UnderlinedHeading
        customClasses="text-center"
        tagType={IHeadingTags.h2}
        content="Our Business Plan"
      />
      <Description
        customClasses="mt-4 text-center"
        content="Lorem ipsum is common with typesetting and printing businesses. The text did not start with the age of digital businesses as it has been used since 1500s or even earlier. "
      />
      <Image
        className="mx-auto mt-14"
        height={680}
        width={680}
        src={GIFS.MAP_GIF}
        alt="map"
      />
    </section>
  );
};

export default AboutBusinessPlanSection;
