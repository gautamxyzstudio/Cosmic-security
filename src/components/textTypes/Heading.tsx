import { Heebo } from 'next/font/google';
import React, { JSX } from 'react';
const heeboSans = Heebo({
  variable: '--font-heebo-mono',
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});
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
  heading20 = 'heading20',
  heading16 = 'heading16',
}

const getHeadingStyles = (type: IHeadingTypes) => {
  switch (type) {
    case IHeadingTypes.heading80:
      return `lg:text-heading-80 text-heading-40  `;
    case IHeadingTypes.heading56:
      return `lg:text-heading-56 text-2xl `;
    case IHeadingTypes.heading40:
      return `lg:text-heading-40 text-2xl `;
    case IHeadingTypes.heading24:
      return ` lg:text-2xl text-base `;
    case IHeadingTypes.heading20:
      return `lg:text-xl text-sm`;
    case IHeadingTypes.heading16:
      return `text-text-12 lg:text-base  `;
    default:
      return `lg:text-heading-80 `;
  }
};

const Heading: React.FC<IHeadingProps> = ({
  customClasses = ' ',
  content = 'content',
  tagType = IHeadingTags.h1,
  type = IHeadingTypes.heading56,
  compRef,
}) => {
  const headingStyles = getHeadingStyles(type);
  const Tag = tagType as keyof Pick<
    JSX.IntrinsicElements,
    'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  >;
  const textColor = Tag === 'h3' ? ' text-primary ' : ' text-white ';
  return (
    <Tag
      ref={compRef}
      className={
        headingStyles + textColor + customClasses + ` ${heeboSans.className} `
      }
    >
      {content}
    </Tag>
  );
};

export default Heading;
