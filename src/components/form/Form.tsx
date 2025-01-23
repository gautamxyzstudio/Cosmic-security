"use client";
import React, { useState } from "react";
import TextInput from "../textinput/TextInput";
import Button from "../button/Button";
import emailjs from "@emailjs/browser";

type IState = {
  name: string;
  email: string;
  website: string;
  message: string;
};

interface IFormProps {
  isContactPage?: boolean;
  customStyle?: string;
}

const Form: React.FC<IFormProps> = ({
  isContactPage = false,
  customStyle = "",
}) => {
  const [formData, setFormData] = useState<IState>({
    name: "",
    email: "",
    website: "",
    message: "",
  });
  const [status, setStatus] = useState<string>("");
  const [errors, setErrors] = useState<Partial<IState>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Validating functions
  const validators = {
    name: (value: string) => {
      const nameRegex = /^[A-Za-z\s]{2,50}$/;
      if (!value.trim() || !nameRegex.test(value)) {
        return "Name must be 2-50 characters and contain only letters";
      }
      return "";
    },
    email: (value: string) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value.trim() || !emailRegex.test(value)) {
        return "Invalid email format";
      }
      return "";
    },
    message: (value: string) => {
      const messageRegex = /^[\w\s.,!?-]{3,500}$/;
      if (!value.trim() || !messageRegex.test(value)) {
        return "Message must be between 3 and 500 characters";
      }
      return "";
    },
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {
      name: validators.name(formData.name),
      email: validators.email(formData.email),
      message: validators.message(formData.message),
    };

    setErrors(newErrors);
    return !Object.values(newErrors).some(Boolean);
  };

  // Update form data
  const updateFormData = (key: keyof IState, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
    // Clear error when user starts typing
    if (errors[key]) {
      setErrors((prev) => ({ ...prev, [key]: "" }));
    }
  };

  const clearForm = () => {
    setFormData({
      name: "",
      email: "",
      website: "",
      message: "",
    });
  };

  const updateStatus = (message: string, duration = 3000) => {
    setStatus(message);
    if (message) {
      setTimeout(() => setStatus(""), duration);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setStatus("Sending...");

    try {
      const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_1;
      const userID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

      if (!serviceID || !templateID || !userID) {
        throw new Error("Missing email service configuration");
      }

      const response = await emailjs.send(
        serviceID,
        templateID,
        formData,
        userID
      );

      if (response.status === 200) {
        updateStatus("Message sent successfully!");
        clearForm();
      }
    } catch (error) {
      console.error("EmailJS error:", error);
      updateStatus("Error sending message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const spacing = isContactPage
    ? "px-4 xl:px-6 gap-y-6 xl:gap-y-14"
    : "px-4 md:px-6 xl:px-12 gap-y-6 md:gap-y-10 xl:gap-y-12";

  const buttonStyles = isContactPage
    ? "rounded-md h-12 md:h-14 xl:h-20 w-full"
    : "py-3 md:py-4 xl:py-6 w-full h-12 md:h-14 xl:h-20";

  return (
    <form className="w-full h-full" onSubmit={handleSubmit}>
      <div
        className={`bg-black justify-between h-full z-[4] flex flex-col pt-6 xl:pt-12 w-full ${customStyle}`}
      >
        <div className={`${spacing} flex flex-col`}>
          <TextInput
            value={formData.name}
            onChangeText={(e) => updateFormData("name", e.target.value)}
            placeHolder="Name"
            error={errors.name}
          />
          <TextInput
            value={formData.email}
            onChangeText={(e) => updateFormData("email", e.target.value)}
            placeHolder="Email"
            error={errors.email}
          />
          <TextInput
            value={formData.website}
            onChangeText={(e) => updateFormData("website", e.target.value)}
            placeHolder="Company (optional)"
          />
          <TextInput
            value={formData.message}
            onChangeText={(e) => updateFormData("message", e.target.value)}
            placeHolder="Message"
            error={errors.message}
          />
        </div>

        {status && (
          <div className="px-4 pb-6 xl:px-6 xl:pb-12 w-full">
            <span className="text-lightGrey text-center text-sm block">
              {status}
            </span>
          </div>
        )}

        {isContactPage ? (
          <div className="px-4 pb-6 mt-10 xl:mt-[112px] xl:px-6 xl:pb-12 w-full">
            <Button
              customStyles={buttonStyles}
              title="Send us Quote"
              disabled={isSubmitting}
            />
          </div>
        ) : (
          <Button
            customStyles={buttonStyles}
            title="Send us Quote"
            disabled={isSubmitting}
          />
        )}
      </div>
    </form>
  );
};

export default Form;
