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
    <div className={headingProps.customClasses}>
      <div className={' inline-block flex-col items-start justify-start '}>
        <Heading {...headingProps} />
        {underlined && (
          <div className=" ml-auto w-[124px] bg-primary mt-2  h-[2px] " />
        )}
      </div>
    </div>
  );
};

export default UnderlinedHeading;
