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

export type IHomeTickerCardProps = {
  name: string;
  icon: StaticImport;
  count: string;
  customClass?: string;
};

const HomeTickerCard: React.FC<IHomeTickerCardProps> = ({
  name,
  customClass,
  icon,
  count,
}) => {
  return (
    <div
      className={
        `flex gap-x-4 w-[291px] flex-row items-center p-6 ` + `${customClass}`
      }
    >
      <Image alt="person" src={icon} />
      <div>
        <Heading
          tagType={IHeadingTags.h4}
          content={`${count}+`}
          type={IHeadingTypes.heading40}
        />
        <Description
          content={name}
          type={IDescriptionTypes.dec20}
          customClasses="!text-primary !w-max"
        />
      </div>
    </div>
  );
};

export default HomeTickerCard;
