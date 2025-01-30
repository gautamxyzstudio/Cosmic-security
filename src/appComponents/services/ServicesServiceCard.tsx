import React from 'react';
import Heading, {
  heeboSans,
  IHeadingTags,
  IHeadingTypes,
} from '@/components/textTypes/Heading';
import Description, {
  IDescriptionTypes,
} from '@/components/textTypes/Description';

type IServicesServiceCardProps = {
  title: string;
  description: string;
  count: number;
  customClass?: string;
};

const ServicesServiceCard: React.FC<IServicesServiceCardProps> = ({
  title,
  description,
  customClass,
  count,
}) => {
  return (
    <div className={`flex gap-x-6  min-h-6 flex-row `}>
      <div className="w-12 rotate-45 p-[1px] bg-serviceStepGradient h-12">
        <div className="bg-black flex flex-row justify-center items-center w-full h-full">
          <p
            className={`-rotate-45 ${heeboSans.className} text-stroke-gradient text-[40px]`}
          >
            {count}
          </p>
        </div>
      </div>
      <div className="flex-1">
        <Heading
          type={IHeadingTypes.heading28}
          content={title}
          tagType={IHeadingTags.h3}
        />
        <Description
          content={description}
          type={IDescriptionTypes.dec16}
          customClasses={`mt-2 ${customClass} `}
        />
      </div>
    </div>
  );
};

export default ServicesServiceCard;
