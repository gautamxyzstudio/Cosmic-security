import React from "react";

type IButtonProps = {
  customStyles?: string;
  title: string;
  comRef?: React.Ref<HTMLButtonElement>;
  onClick?: () => void;
  disabled?: boolean;
};

const Button: React.FC<IButtonProps> = ({
  customStyles = " ",
  title,
  comRef,
  onClick,
  disabled = false,
}) => {
  return (
    <button
      ref={comRef}
      type="submit"
      onClick={onClick}
      className={
        ` ${
          disabled
            ? "bg-disabled cursor-not-allowed"
            : "bg-buttonGradient cursor-pointer"
        } xl:text-2xl md:text-base text-sm text-center text-white ` +
        customStyles
      }
      disabled={disabled}
    >
      {title}
    </button>
  );
};

export default Button;
