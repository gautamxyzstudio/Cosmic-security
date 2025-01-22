"use client";
import React, { useState } from "react";
import TextInput from "../textinput/TextInput";
import Button from "../button/Button";

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
  customStyle = " ",
}) => {
  const [formData, setFormData] = useState<IState>({
    name: "",
    email: "",
    website: "",
    message: "",
  });

  const updateFormData = (key: string, value: string) => {
    setFormData({ ...formData, [key]: value });
  };
  const spacing = isContactPage
    ? `px-4 xl:px-6 gap-y-6 xl:gap-y-14 `
    : `px-12 gap-y-6  xl:gap-y-12 `;
  return (
    <form className="w-full h-full">
      <div
        className={
          "bg-black justify-between h-full z-[4] flex flex-col pt-6 xl:pt-12 w-full " +
          customStyle
        }
      >
        <div className={spacing + "flex flex-col"}>
          <TextInput
            value={formData.name}
            onChangeText={(e) => updateFormData("name", e.target.value)}
            placeHolder={"Name"}
          />
          <TextInput
            value={formData.email}
            onChangeText={(e) => updateFormData("email", e.target.value)}
            placeHolder={"Email"}
          />
          <TextInput
            value={formData.website}
            onChangeText={(e) => updateFormData("website", e.target.value)}
            placeHolder={"Company"}
          />
          <TextInput
            value={formData.message}
            onChangeText={(e) => updateFormData("message", e.target.value)}
            placeHolder={"Message"}
          />
        </div>
        {isContactPage ? (
          <div className="px-4 pb-6 mt-10 xl:mt-[112px] xl:px-6 xl:pb-12 w-full">
            <Button customStyles="rounded-md h-12 md:h-14 xl:h-20 w-full" title="Send us Quote" />
          </div>
        ) : (
          <Button customStyles=" py-3 md:py-4 xl:py-6 w-full h-12 md:h-14 xl:h-20 " title="Send us Quote" />
        )}
      </div>
    </form>
  );
};

export default Form;
