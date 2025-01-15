import React from 'react';

type IButtonProps = {
  customStyles?: string;
  title?: string;
};

const Button: React.FC<IButtonProps> = ({ customStyles = ' ', title }) => {
  return (
    <div
      className={
        'bg-buttonGradient cursor-pointer text-font-m  text-center rounded-md text-white py-[9px] ' +
        customStyles
      }
    >
      {title}
    </div>
  );
};

export default Button;
