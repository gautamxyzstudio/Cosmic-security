import React from 'react';

type IDescriptionProps = {
  content?: string;
  customClasses?: string;
  type?: IDescriptionTypes;
  compRef?: React.Ref<HTMLHeadingElement> | undefined;
};

export enum IDescriptionTypes {
  dec24 = 'dec24',
  dec20 = 'dec20',
  dec16 = 'dec16',
  dec12= 'dec12',
}

const getDescriptionStyles = (type: IDescriptionTypes) => {
  switch (type) {
    case IDescriptionTypes.dec24:
      return ` font-normal text-2xl text-white `;
    case IDescriptionTypes.dec20:
      return ` font-normal text-xl text-white `;
    case IDescriptionTypes.dec16:
      return ` font-normal text-base text-white `;
    case IDescriptionTypes.dec12:
      return ` font-normal text-text-12  text-white `;
    default:
      return `text-grey font-normal w-full text-font-m md:text-xl xl:text-3xl `;
  }
};

const Description: React.FC<IDescriptionProps> = ({
  customClasses= ' ',
  content,
  type = IDescriptionTypes.dec24,
  compRef,
}) => {
  const styles = getDescriptionStyles(type);
  return (
    <p ref={compRef} className={styles + customClasses + ' '}>
      {content}
    </p>
  );
};

export default Description;
