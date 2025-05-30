import React from 'react';
import Heading, { IHeadingProps } from '../textTypes/Heading';

interface IUnderlinedHeading extends IHeadingProps {
  underlined?: boolean;
}

const UnderlinedHeading: React.FC<IUnderlinedHeading> = ({
  underlined = true,
  ...headingProps
}) => {
  return (
    <div ref={headingProps.compRef} className={headingProps.customClasses}>
      <div className={' inline-block flex-col items-start justify-start '}>
        <Heading {...headingProps} />
        {underlined && (
          <div className=" ml-auto w-12 lg:w-[124px] bg-primary mt-1 lg:mt-2  h-0.5 " />
        )}
      </div>
    </div>
  );
};

export default UnderlinedHeading;
