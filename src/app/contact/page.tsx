import ContactFormSection from "@/appComponents/contactUs/ContactFormSection";
import MapViewSection from "@/appComponents/contactUs/MapViewSection";
import React from "react";

const Contact = () => {
  return (
    <div className="max-w-screen-2xl mx-auto flex flex-col pb-10 md:pb-14 xl:pb-32 gap-y-10 md:gap-y-14 xl:gap-y-32  px-6 xl:px-20">
      <ContactFormSection />
      <MapViewSection/>
    </div>
  );
};

export default Contact;
