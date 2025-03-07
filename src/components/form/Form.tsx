'use client';
import React, { useState, useRef } from 'react';
import TextInput from '../textinput/TextInput';
import Button from '../button/Button';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';

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
  customStyle = '',
}) => {
  const [formData, setFormData] = useState<IState>({
    name: '',
    email: '',
    website: '',
    message: '',
  });
  const [status, setStatus] = useState<string>('');
  const [errors, setErrors] = useState<Partial<IState>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  // Validating functions
  const validators = {
    name: (value: string) => {
      const nameRegex = /^[A-Za-z\s]{2,50}$/;
      if (!value.trim() || !nameRegex.test(value)) {
        return 'Name must be 2-50 characters and contain only letters';
      }
      return '';
    },
    email: (value: string) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value.trim() || !emailRegex.test(value)) {
        return 'Invalid email format';
      }
      return '';
    },
    website: (value: string) => {
      // Skip validation if empty since it's optional
      if (!value.trim()) return '';

      // More permissive regex that allows common company name characters
      const websiteRegex = /^[A-Za-z0-9\s&.,'-]{0,50}$/;
      if (!websiteRegex.test(value)) {
        return "Company name can only contain letters, numbers, spaces, and common symbols (&.,-')";
      }
      return '';
    },
    message: (value: string) => {
      const messageRegex = /^[\w\s.,!?-]{3,500}$/;
      if (!value.trim() || !messageRegex.test(value)) {
        return 'Message must be between 3 and 500 characters';
      }
      return '';
    },
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {
      name: validators.name(formData.name),
      email: validators.email(formData.email),
      website: validators.website(formData.website),
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
      setErrors((prev) => ({ ...prev, [key]: '' }));
    }
  };

  const clearForm = () => {
    setFormData({
      name: '',
      email: '',
      website: '',
      message: '',
    });
  };

  const updateStatus = (message: string, duration = 3000) => {
    setStatus(message);
    if (message) {
      setTimeout(() => setStatus(''), duration);
    }
  };

  // Add verification function
  const verifyCaptcha = async (token: string) => {
    try {
      const response = await fetch('/api/verify-recaptcha', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      if (data.success) {
        await sendEmail();
        return true;
      }
      return false;
    } catch {
      updateStatus('Captcha verification failed. Please try again.');
      return false;
    }
  };

  const handleCaptchaChange = async (token: string | null) => {
    if (token) {
      await verifyCaptcha(token);
    }
  };

  // Updated handleSubmit function
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    recaptchaRef.current?.execute();
  };

  // Updated sendEmail function
  const sendEmail = async () => {
    setIsSubmitting(true);
    setStatus('Sending...');

    try {
      const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const userID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

      if (!serviceID || !templateID || !userID) {
        throw new Error('Missing email service configuration');
      }

      const response = await emailjs.send(
        serviceID,
        templateID,
        formData,
        userID
      );

      if (response.status === 200) {
        updateStatus('Message sent successfully!');
        clearForm();
      }
    } catch (error) {
      console.error('EmailJS error:', error);
      updateStatus('Error sending message. Please try again.');
    } finally {
      setIsSubmitting(false);
      recaptchaRef.current?.reset();
    }
  };

  const spacing = isContactPage ? 'px-4 xl:px-6' : 'px-4 md:px-6 xl:px-12 ';

  const buttonStyles = isContactPage
    ? 'rounded-md h-12 md:h-14 xl:h-20 w-full'
    : 'py-3 md:py-4 xl:py-6 w-full h-12 md:h-14 xl:h-20';

  return (
    <form className="w-full h-full" onSubmit={handleSubmit}>
      <div
        className={`bg-black justify-between h-full z-[4] flex flex-col pt-6 xl:pt-12 w-full ${customStyle}`}
      >
        <div
          className={`${spacing} flex flex-col gap-y-6 md:gap-y-10 xl:gap-y-12`}
        >
          <TextInput
            value={formData.name}
            onChangeText={(e) => updateFormData('name', e.target.value)}
            placeHolder="Name"
            error={errors.name}
          />
          <TextInput
            value={formData.email}
            onChangeText={(e) => updateFormData('email', e.target.value)}
            placeHolder="Email"
            error={errors.email}
          />
          <TextInput
            value={formData.website}
            onChangeText={(e) => updateFormData('website', e.target.value)}
            placeHolder="Company (optional)"
          />
          <TextInput
            value={formData.message}
            onChangeText={(e) => updateFormData('message', e.target.value)}
            placeHolder="Message"
            error={errors.message}
          />
        </div>

        {status && (
          <div className="px-4 py-1 w-full">
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
      <div className="hidden">
        <ReCAPTCHA
          ref={recaptchaRef}
          size="invisible"
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? ''}
          onChange={handleCaptchaChange}
        />
      </div>
    </form>
  );
};

export default Form;
