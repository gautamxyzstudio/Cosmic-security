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

const Form = () => {
  const [formData, setFormData] = useState<IState>({
    name: '',
    email: '',
    website: '',
    message: '',
  });

  const updateFormData = (key: string, value: string) => {
    setFormData({ ...formData, [key]: value });
  };
  return (
    <div className="bg-black z-[4]  justify-between h-full pt-6  xl:pt-12 flex flex-col  w-full ">
      <div className="px-6 xl:px-12   flex flex-col gap-y-6  xl:gap-y-12 ">
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
      <Button
        customStyles="py-3 xl:!py-6  !rounded-none "
        title="Send us Quote"
      />
    </div>
  );
};

export default Form;
