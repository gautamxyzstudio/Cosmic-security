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

export interface IHomeChooseUsCardProps {
  customClass?: string;
  icon: StaticImport;
  title: string;
  decs: string;
}

const HomeChooseUsCard: React.FC<IHomeChooseUsCardProps> = ({
  customClass = '',
  icon,
  title,
  decs,
}) => {
  return (
    <div
      className={
        'bg-black min-h-[256px]  xl:min-h-[324px]  w-[316px] py-6 px-4 ' +
        customClass
      }
    >
      <Image className="mb-3 w-8 h-8 xl:w-12 xl:h-12 " src={icon} alt="clock" />
      <Heading
        tagType={IHeadingTags.h3}
        type={IHeadingTypes.heading24}
        customClasses="!text-primary"
        content={title}
      />
      <Description
        customClasses="mt-3"
        type={IDescriptionTypes.dec16}
        content={decs}
      />
    </div>
  );
};

export default HomeChooseUsCard;
