import ContactFormSection from "@/appComponents/contactUs/ContactFormSection";
import React from "react";

const Contact = () => {
  return (
    <div className="max-w-screen-2xl mx-auto flex flex-col gap-y-10 pb-10 lg:gap-y-32 lg:pb-32 px-6 lg:px-20">
      <ContactFormSection />
    </div>
  );
};

export default Contact;
