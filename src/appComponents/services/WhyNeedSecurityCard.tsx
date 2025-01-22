import Image from 'next/image';
import React from 'react';
import Heading, {
  IHeadingTags,
  IHeadingTypes,
} from '@/components/textTypes/Heading';
import Description, {
  IDescriptionTypes,
} from '@/components/textTypes/Description';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

export interface IWhyNeedSecurityCardProps {
  image: StaticImport;
  heading: string;
  description: string;
}
const WhyNeedSecurityCard: React.FC<IWhyNeedSecurityCardProps> = ({
  image,
  heading,
  description,
}) => {
  return (
    <div className="clip-path-mypolygon  p-3 min-w-[280px]  xl:w-[28%] min-h-[448px]  xl:min-h-[516px] bg-black">
      <Image
        alt="home-top-one  "
        className="xl:clip-path-mypolygonImage       clip-path-mypolygonImageMobile  w-[384px] h-[184px]"
        width={384}
        height={184}
        src={image}
      />
      <Heading
        type={IHeadingTypes.heading24}
        customClasses="mt-4 mb-2"
        tagType={IHeadingTags.h3}
        content={heading}
      />
      <Description content={description} type={IDescriptionTypes.dec16} />
    </div>
  );
};

export default WhyNeedSecurityCard;
