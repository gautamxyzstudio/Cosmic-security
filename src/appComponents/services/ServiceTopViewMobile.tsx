import Description from '@/components/textTypes/Description';
import Heading, {
  IHeadingTypes,
  IHeadingTags,
} from '@/components/textTypes/Heading';
import React from 'react';

const ServiceTopViewMobile = () => {
  return (
    <div className="bg-serviceBgMobile bg-cover px-6 flex flex-col justify-end pb-20 bg-no-repeat h-[456px]">
      <Heading
        content="Our Services"
        type={IHeadingTypes.heading80}
        tagType={IHeadingTags.h1}
      />
      <Description content="Lorem ipsum dolor sit amet consectetur. Sodales volutpat lectus ut elementum semper nibh feugiat. Interdum faucibus maecenas pulvinar malesuada cursus turpis pretium." />
    </div>
  );
};

export default ServiceTopViewMobile;
