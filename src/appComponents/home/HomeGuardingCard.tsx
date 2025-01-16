import Image from 'next/image';
import React from 'react';
import Description, {
  IDescriptionTypes,
} from '@/components/textTypes/Description';
import Heading, {
  IHeadingTags,
  IHeadingTypes,
} from '@/components/textTypes/Heading';

type IHomeGuardingCardProps = {
  customClass: string;
  image: string;
  title: string;
  compRef: React.Ref<HTMLDivElement>;
  onMouseOver: React.MouseEventHandler<HTMLDivElement>;
  onMouseOut: React.MouseEventHandler<HTMLDivElement>;
  description: string;
};

const HomeGuardingCard: React.FC<IHomeGuardingCardProps> = ({
  customClass = ' ',
  image,
  title,
  compRef,
  onMouseOut,
  onMouseOver,
  description,
}) => {
  return (
    <div
      ref={compRef}
      onMouseEnter={onMouseOver}
      onMouseLeave={onMouseOut}
      className={
        `bg-guardingGradientOne cursor-pointer shadow-[0_0_44px_0_#C18A8D] p-6 rounded-2xl max-w-[324px] ` +
        customClass
      }
    >
      <Image src={image} className="mb-4" alt="" />
      <Heading
        tagType={IHeadingTags.h4}
        customClasses="!font-normal !text-black"
        content={title}
        type={IHeadingTypes.heading24}
      />
      <Description
        customClasses="mt-4"
        type={IDescriptionTypes.dec16}
        content={description}
      />
    </div>
  );
};

export default HomeGuardingCard;
