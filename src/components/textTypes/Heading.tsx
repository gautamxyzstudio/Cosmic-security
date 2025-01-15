import React, { JSX } from 'react';

export interface IHeadingProps {
  content?: string;
  customClasses?: string;
  tagType?: IHeadingTags;
  underline?: boolean;
  type?: IHeadingTypes;
  compRef?: React.Ref<HTMLHeadingElement>;
}
export enum IHeadingTags {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  h6 = 'h6',
}

export enum IHeadingTypes {
  heading80 = 'heading80',
  heading56 = 'heading56',
  heading40 = 'heading40',
  heading24 = 'heading24',
}

const getHeadingStyles = (type: IHeadingTypes) => {
  switch (type) {
    case IHeadingTypes.heading80:
      return `xl:text-heading-80 text-white font-medium`;
    case IHeadingTypes.heading40:
      return `xl:text-heading-80 text-white font-medium`;
    case IHeadingTypes.heading24:
      return ` xl:text-2xl text-white font-medium`;
    case IHeadingTypes.heading56:
      return `xl:text-heading-56 text-white font-medium`;
    default:
      return `xl:text-heading-80 `;
  }
};

const Heading: React.FC<IHeadingProps> = ({
  customClasses = ' ',
  content = 'content',
  tagType = IHeadingTags.h1,
  type = IHeadingTypes.heading80,
  compRef,
}) => {
  const headingStyles = getHeadingStyles(type);
  const Tag = tagType as keyof Pick<
    JSX.IntrinsicElements,
    'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  >;
  const textColor = Tag === 'h3' ? ' text-white ' : ' text-orange ';
  return (
    <Tag
      ref={compRef}
      className={headingStyles + textColor + customClasses + ' '}
    >
      {content}
    </Tag>
  );
};

export default Heading;
