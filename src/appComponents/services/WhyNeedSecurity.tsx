import Heading, {
  IHeadingTags,
  IHeadingTypes,
} from '@/components/textTypes/Heading';
import React from 'react';
import WhyNeedSecurityCard from './WhyNeedSecurityCard';

const WhyNeedSecurity = () => {
  return (
    <section className="mx-20 mt-[112px]">
      <span className="flex gap-x-3 flex-row justify-center items-center">
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
      <WhyNeedSecurityCard />
    </section>
  );
};

export default WhyNeedSecurity;
