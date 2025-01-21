'use client';
import React, { useState } from 'react';
import TextInput from '../textinput/TextInput';
import Button from '../button/Button';

type IState = {
  name: string;
  email: string;
  website: string;
  message: string;
};

interface IFrom {
  isContactPage?: boolean;
  customStyle?: string;
}

const Form: React.FC<IFrom> = ({
  isContactPage = false,
  customStyle = ' ',
}) => {
  const [formData, setFormData] = useState<IState>({
    name: '',
    email: '',
    website: '',
    message: '',
  });

  const updateFormData = (key: string, value: string) => {
    setFormData({ ...formData, [key]: value });
  };
  const spacing = isContactPage
    ? `px-4 xl:px-6 gap-y-6 xl:gap-y-14 `
    : `px-12 gap-y-6  xl:gap-y-12 `;
  return (
    <div
      className={
        'bg-black justify-between h-full z-[4] flex flex-col pt-6 xl:pt-12 w-full ' +
        customStyle
      }
    >
      <div className={spacing + 'flex flex-col'}>
        <TextInput
          value={formData.name}
          onChangeText={(e) => updateFormData('name', e.target.value)}
          placeHolder={'Name'}
        />
        <TextInput
          value={formData.email}
          onChangeText={(e) => updateFormData('email', e.target.value)}
          placeHolder={'Email'}
        />
        <TextInput
          value={formData.website}
          onChangeText={(e) => updateFormData('website', e.target.value)}
          placeHolder={'Company'}
        />
        <TextInput
          value={formData.message}
          onChangeText={(e) => updateFormData('message', e.target.value)}
          placeHolder={'Message'}
        />
      </div>
      {isContactPage ? (
        <div className="px-4 pb-6 mt-10 xl:mt-[112px] xl:px-6 xl:pb-12">
          <Button customStyles="!py-6 " title="Send us Quote" />
        </div>
      ) : (
        <Button
          customStyles="xl:!py-6 py-3 !rounded-none "
          title="Send us Quote"
        />
      )}
    </div>
  );
};

export default Form;
