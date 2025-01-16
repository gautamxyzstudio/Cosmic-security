import Image from "next/image";
import React from "react";
import { icons } from "../../../public/exporter";
import Description, { IDescriptionTypes } from "@/components/textTypes/Description";

const Footer = () => {
  return (
    <footer className="px-20 py-10 bg-black border-t border-borderStroke flex flex-col gap-y-14">
      <div className="flex justify-start items-center">
        <Image alt="Cosmic Security" src={icons.LOGO} />
      </div>
      <div className="flex flex-col gap-y-10">
        <div></div>
        <div className="flex justify-between items-center pt-6 border-t border-borderStroke text-base">
            <Description customClasses="!text-neutralSilver" content="Copyright © 2024 Cosmic Security" type={IDescriptionTypes.dec16}/>
            <Description customClasses="!text-neutralSilver" content="All rights reserved" type={IDescriptionTypes.dec16}/>
        </div>
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
