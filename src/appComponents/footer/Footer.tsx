import React from "react";
import Description, {
  IDescriptionTypes,
} from "@/components/textTypes/Description";
import QuickLinks from "@/components/footerComponent/QuickLinks";
import LogoAndDesc from "@/components/footerComponent/LogoAndDesc";
import ContactInformation from "@/components/footerComponent/ContactInformation";

const Footer = () => {
  return (
    <footer className="bg-black">
      {/* Desktop View */}
      <div className="hidden lg:flex flex-col gap-y-6 px-20 lg:py-6 border-t border-stroke">
        <div className="flex items-start justify-between gap-x-[130px]">
          {/* Logo & Description */}
          <LogoAndDesc />
          {/*Quick Links & Follow us */}
          <QuickLinks />
          {/* Contact & Office Address */}
          <ContactInformation />
        </div>

        <div className="flex justify-between items-center pt-2 border-t border-borderStroke">
          <Description
            customClasses="!text-lightGrey"
            content="Copyright © 2024 Cosmic Security"
            type={IDescriptionTypes.dec16}
          />
          <div className="flex flex-row items-center gap-1">
            <Description
              customClasses="!text-lightGrey"
              content="Media Partner"
              type={IDescriptionTypes.dec16}
            />{" "}
            <Description
              customClasses="!text-primary"
              content=" XYZ Studio"
              type={IDescriptionTypes.dec16}
            />
          </div>
        </div>
      </div>
      {/* End Desktop */}

      {/* Mobile  view*/}
      <div className="lg:hidden flex flex-col gap-y-6 p-6">
        {/* Logo & Description */}
        <LogoAndDesc />
        <div className="flex flex-row items-start justify-between">
          {/* Contact & Office Address */}
          <ContactInformation />
          {/* Quick Links & Follow us */}
          <QuickLinks />
        </div>
      </div>
      <div className="flex flex-col px-6 py-2 border-t border-borderStroke  lg:hidden">
        <Description
          customClasses="!text-lightGrey"
          content="Copyright © 2024 Cosmic Security"
          type={IDescriptionTypes.dec12_static}
        />
        <div className="flex flex-row items-center gap-1">
          <Description
            customClasses="!text-lightGrey"
            content="Media Partner"
            type={IDescriptionTypes.dec12_static}
          />{" "}
          <Description
            customClasses="!text-primary"
            content=" XYZ Studio"
            type={IDescriptionTypes.dec12_static}
          />
        </div>
      </div>
      {/* End Mobile */}
    </footer>
  );
};

export default Footer;
