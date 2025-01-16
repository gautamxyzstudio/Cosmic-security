import Image from "next/image";
import React from "react";
import { icons } from "../../../public/exporter";
import Description, {
  IDescriptionTypes,
} from "@/components/textTypes/Description";
import QuickLinks from "@/components/footerComponent/QuickLinks";

const Footer = () => {
  return (
    <footer className=" pt-4 md:px-20 md:py-10 bg-black border-t border-borderStroke flex flex-col gap-y-10  md:gap-y-14">
      {/* Desktop View */}
      <div className="hidden md:flex flex-col gap-y-10">
        <div className="flex items-start justify-between">
          <div className="flex justify-start items-center">
            <Image alt="Cosmic Security" src={icons.LOGO} />
            
          </div>
          <div></div>
          {/*Quick Links & Follow us */}
          <QuickLinks />
          {/* End */}
        </div>
        
        <div className=" hidden md:flex justify-between items-center pt-2 border-t border-borderStroke">
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
      <div className="flex flex-col px-6 py-2 border-t border-borderStroke  md:hidden">
        <Description
          customClasses="!text-lightGrey"
          content="Copyright © 2024 Cosmic Security"
          type={IDescriptionTypes.dec12}
        />
        <div className="flex flex-row items-center gap-1">
          <Description
            customClasses="!text-lightGrey"
            content="Media Partner"
            type={IDescriptionTypes.dec12}
          />{" "}
          <Description
            customClasses="!text-primary"
            content=" XYZ Studio"
            type={IDescriptionTypes.dec12}
          />
        </div>
      </div>
      {/* End Mobile */}
    </footer>
  );
};

export default Footer;
