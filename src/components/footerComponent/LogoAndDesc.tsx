import Image from "next/image";
import React from "react";
import { images } from "../../../public/exporter";
import Description, { IDescriptionTypes } from "../textTypes/Description";
import { STRINGS } from "@/constants/en";

const LogoAndDesc = () => {
  return (
    <div className="flex flex-col gap-y-4 xl:gap-y-6 w-full xl:w-[28%] ">
      <Image
        className="w-[118px] h-9 lg:w-[144px] lg:h-11"
        alt="Cosmic Security"
        src={images.LOGO}
      />
      <Description
        content={STRINGS.footer_desc}
        type={IDescriptionTypes.dec16_footer}
      />
    </div>
  );
};

export default LogoAndDesc;
