import React from 'react';

type IButtonProps = {
  customStyles?: string;
  title?: string;
};

const Button: React.FC<IButtonProps> = ({ customStyles = ' ', title }) => {
  return (
    <div
      className={
        'bg-buttonGradient cursor-pointer text-2xl text-center rounded-lg text-white py-3 ' +
        customStyles
      }
    >
      {title}
    </div>
  );
};

export default Button;
