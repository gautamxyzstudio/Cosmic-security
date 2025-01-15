import Image from 'next/image';
import React from 'react';
import { icons } from '../../../public/exporter';
import Heading, {
  IHeadingTags,
  IHeadingTypes,
} from '@/components/textTypes/Heading';
import Description, {
  IDescriptionTypes,
} from '@/components/textTypes/Description';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Link from 'next/link';

export interface IHomeServiceCardProps {
  cardImage: StaticImport | string;
  title: string;
  description: string;
}

const HomeServiceCard: React.FC<IHomeServiceCardProps> = ({
  cardImage,
  title,
  description,
}) => {
  return (
    <Link
      href={'/'}
      className="w-[296px] rounded-lg cursor-pointer group h-[380px] overflow-hidden relative"
    >
      <div className="w-full h-full group-hover:hidden ">
        <Image
          className="w-full h-full object-cover "
          src={cardImage}
          alt="service card one"
        />
        <div className="bg-serviceCarGradient flex flex-row items-end justify-between px-4 py-6  w-full absolute z-[1]  bottom-0 h-[112px]">
          <Heading content={title} type={IHeadingTypes.heading24} />
          <Image alt="arrow Red" src={icons.ARROW_RED} />
        </div>
      </div>
      <div className="group-hover:flex flex-col w-full h-full bg-black p-4 ">
        <div className="w-full flex flex-row justify-end ">
          <Image
            className=" w-[116px] h-20 object-cover rounded-lg "
            src={cardImage}
            alt="service card one"
          />
        </div>
        <div className="mt-3 flex flex-col gap-y-2">
          <Heading
            type={IHeadingTypes.heading24}
            content={title}
            tagType={IHeadingTags.h3}
            customClasses="!text-primary"
          />
          <Description content={description} type={IDescriptionTypes.dec16} />
        </div>
      </div>
    </Link>
  );
};

export default HomeServiceCard;
