import React from "react";

type IButtonProps = {
  customStyles?: string;
  title?: string;
  comRef?: React.Ref<HTMLDivElement>;
};

const Button: React.FC<IButtonProps> = ({
  customStyles = " ",
  title,
  comRef,
}) => {
  return (
    <div
      ref={comRef}
      className={
        "bg-buttonGradient cursor-pointer text-base text-center rounded-md text-white py-[9px] " +
        customStyles
      }
    >
      {title}
    </div>
  );
};

export default Button;
