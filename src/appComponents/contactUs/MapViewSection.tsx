"use client";
import CustomTabs from "@/components/CustomTabs/CustomTabs";
import IconWithText from "@/components/iconWithText/IconWithText";
import React, { useState } from "react";
import { icons } from "../../../public/exporter";
import { emailAddress, phoneNumber } from "@/utils/mockdata";

const MapViewSection = () => {
  const [selectedTabItemIndex, setSelectedTabItemIndex] = useState(0);
  const tabs = [
    { label: "HEAD OFFICE", onClickAction: () => setSelectedTabItemIndex(0) },
    {
      label: "ALBERTA OFFICE",
      onClickAction: () => setSelectedTabItemIndex(1),
    },
    {
      label: "KELOWNA OFFICE",
      onClickAction: () => setSelectedTabItemIndex(2),
    },
    {
      label: "SASKATCHEWAN OFFICE",
      onClickAction: () => setSelectedTabItemIndex(3),
    },
  ];
  const contactInfo = [
    { icon: icons.EMAIL, content: emailAddress },
    { icon: icons.CALL_SECONDARY_ICON, content: phoneNumber },
  ];
  // Map URLs for each office
  const mapsUrl = [
    "https://maps.google.com/maps?q=Cosmic%20Security%20515%20W%20Pender%20St%20Unit%20229%2C%20Vancouver%2C%20BC%20V6B%201V5&t=m&z=16&output=embed&iwloc=near",
    "https://maps.google.com/maps?q=1638%20Pandosy%20Street%20Suite%206%2C%20Kelowna%2C%20BC.%20V1Y%201P7&t=m&z=16&output=embed&iwloc=near",
    "https://maps.google.com/maps?q=Cosmic%20Security%2013032%20Westwinds%20Crescent%20NE%20Unit%20104%2C%20Calgary%2C%20AB%20T3J%205H2&t=m&z=16&output=embed&iwloc=near",
    "https://maps.google.com/maps?q=Cosmic%20Security%201121%20College%20Drive%20Unit%20313%2C%20Saskatoon%2C%20Saskatchewan.%20S7N%200W3&t=m&z=16&output=embed&iwloc=near",
  ];

  return (
    <section className="w-full h-full flex flex-col  justify-center gap-y-6 lg:gap-y-12">
      <CustomTabs tabs={tabs} />
      <div className="flex flex-col gap-y-4 lg:gap-y-6">
        <div className="flex flex-col gap-y-3 lg:flex-row lg:justify-between ">
          {contactInfo.map((data, index) => (
            <IconWithText
              key={index}
              icon={data.icon}
              content={data.content}
              customClasses={" gap-x-1 lg:gap-x-2"}
              customIconsStyles="w-5 h-5 lg:w-6 lg:h-6"
            />
          ))}
        </div>
        <div className="w-full xl:max-h-[516px] max-h-[340px] overflow-y-hidden">
          <iframe
            src={mapsUrl[selectedTabItemIndex]}
            allowFullScreen={false}
            className="w-full xl:h-[516px] h-[340px]"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default MapViewSection;
