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
      <div className="hidden xl:flex flex-col gap-y-6 px-20 lg:py-6 border-t border-stroke">
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
            content="Copyright © 2024 Cosmic Security"
            type={IDescriptionTypes.dec16_footer}
          />
          <div className="flex flex-row items-center gap-1">
            <Description
              content="Media Partner"
              type={IDescriptionTypes.dec16_footer}
            />{" "}
            <Description
              customClasses="!text-primary"
              content=" XYZ Studio"
              type={IDescriptionTypes.dec16_footer}
            />
          </div>
        </div>
      </div>
      {/* End Desktop */}

      {/* Mobile  view*/}
      <div className="xl:hidden flex flex-col gap-y-6 p-6">
        {/* Logo & Description */}
        <LogoAndDesc />
        <div className="flex flex-row items-start gap-x-12 md:gap-x-14">
          {/* Contact & Office Address */}
          <ContactInformation />
          {/* Quick Links & Follow us */}
          <QuickLinks />
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between px-6 py-2 border-t border-borderStroke  xl:hidden">
        <Description
          content="Copyright © 2024 Cosmic Security"
          type={IDescriptionTypes.dec16_footer}
        />
        <div className="flex flex-row items-center gap-1">
          <Description
            content="Media Partner"
            type={IDescriptionTypes.dec16_footer}
          />{" "}
          <Description
            customClasses="!text-primary"
            content=" XYZ Studio"
            type={IDescriptionTypes.dec16}
          />
        </div>
      </div>
      {/* End Mobile */}
    </footer>
  );
};

export default Footer;
