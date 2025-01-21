import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";

interface IIconWithTextProps {
  icon: StaticImport;
  content: string;
  customClasses: string;
  customIconsStyles?: string;
}
const IconWithText: React.FC<IIconWithTextProps> = ({
  customClasses,
  icon,
  content,
  customIconsStyles = "",
}) => {
  return (
    <div className={`flex items-center ${customClasses || ""}`}>
      <Image alt={content} src={icon} className={customIconsStyles} />
      <span>{content}</span>
    </div>
  );
};

export default IconWithText;
