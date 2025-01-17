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
  dec12_static= 'dec12',
}

const getDescriptionStyles = (type: IDescriptionTypes) => {
  switch (type) {
    case IDescriptionTypes.dec24:
      return ` font-normal lg:text-2xl text-sm text-white `;
    case IDescriptionTypes.dec20:
      return ` font-normal lg:text-xl text-sm text-white `;
    case IDescriptionTypes.dec16:
      return ` font-normal text-text-12 lg:text-base  text-white `;
    case IDescriptionTypes.dec12_static:
      return ` font-normal text-text-12  text-white `;
    default:
      return ` font-normal w-full  text-xl lg:text-3xl `;
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
