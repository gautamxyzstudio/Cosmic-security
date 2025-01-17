import Image from "next/image";
import React from "react";
import { icons } from "../../../public/exporter";
import Description, {
  IDescriptionTypes,
} from "@/components/textTypes/Description";
import QuickLinks from "@/components/footerComponent/QuickLinks";

const Footer = () => {
  return (
    <footer className=" pt-4 lg:px-20 lg:py-10 bg-black border-t border-borderStroke flex flex-col gap-y-10  lg:gap-y-14">
      {/* Desktop View */}
      <div className="hidden lg:flex flex-col gap-y-10">
        <div className="flex items-start justify-between">
          <div className="flex justify-start items-center">
            <Image alt="Cosmic Security" src={icons.LOGO} />
            
          </div>
          <div></div>
          {/*Quick Links & Follow us */}
          <QuickLinks />
          {/* End */}
        </div>
        
        <div className=" hidden lg:flex justify-between items-center pt-2 border-t border-borderStroke">
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
