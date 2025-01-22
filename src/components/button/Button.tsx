import React from "react";

type IButtonProps = {
  customStyles?: string;
  title: string;
  comRef?: React.Ref<HTMLButtonElement>;
  onClick?: () => void;
};

const Button: React.FC<IButtonProps> = ({
  customStyles = " ",
  title,
  comRef,
  onClick,
}) => {
  return (
    <button
      ref={comRef}
      type="submit"
      onClick={onClick}
      className={
        "bg-buttonGradient cursor-pointer xl:text-2xl md:text-base text-sm text-center text-white  " +
        customStyles
      }
    >
      {title}
    </button>
  );
};

export default Button;
