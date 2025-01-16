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
      <div className="flex justify-start items-center">
        <Image alt="Cosmic Security" src={icons.LOGO} />
      </div>
      <div className="flex flex-col gap-y-10">
        <div className="flex items-center justify-between">
          <div></div>
          {/*Quick Links */}
          <QuickLinks />
          
        </div>
        <div className=" hidden md:flex justify-between items-center pt-6 border-t border-borderStroke">
          <Description
            customClasses="!text-lightGrey"
            content="Copyright © 2024 Cosmic Security"
            type={IDescriptionTypes.dec16}
          />
          <Description
            customClasses="!text-lightGrey"
            content="All rights reserved"
            type={IDescriptionTypes.dec16}
          />
        </div>
      </div>
      <div className="flex flex-col px-6 py-2 border-t border-borderStroke  md:hidden">
        <Description
          customClasses="!text-lightGrey"
          content="Copyright © 2024 Cosmic Security"
          type={IDescriptionTypes.dec16}
        />
        <Description
          customClasses="!text-lightGrey"
          content="All rights reserved"
          type={IDescriptionTypes.dec16}
        />
      </div>
    </footer>
  );
};

export default Footer;

export const informationData = [
  {
    description: "515 W Pender St Unit 229, Vancouver, BC V6B 1V5 +1",
  },
  {
    description: "email@fitjattfitness.com",
  },
  {
    description: "(844)999-7836",
  },
];
