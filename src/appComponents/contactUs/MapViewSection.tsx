"use client";
import CustomTabs from "@/components/CustomTabs/CustomTabs";
import IconWithText from "@/components/iconWithText/IconWithText";
import React, { useState } from "react";
import { icons } from "../../../public/exporter";
import { emailAddress, phoneNumber } from "@/utils/mockdata";
import { CustomTabsMobile } from "@/components/CustomTabs/CustomTabsMoblie";

const MapViewSection = () => {
  const [selectedTabItemIndex, setSelectedTabItemIndex] = useState(0);

  const tabs = [
    { id: 1, label: "HEAD OFFICE", onClickAction: () => setSelectedTabItemIndex(0) },
    { id: 2, label: "ALBERTA OFFICE", onClickAction: () => setSelectedTabItemIndex(1) },
    { id: 3, label: "KELOWNA OFFICE", onClickAction: () => setSelectedTabItemIndex(2) },
    { id: 4, label: "SASKATCHEWAN OFFICE", onClickAction: () => setSelectedTabItemIndex(3) },
  ];

  const contactInfo = [
    { icon: icons.EMAIL, content: emailAddress },
    { icon: icons.CALL_SECONDARY_ICON, content: phoneNumber },
  ];

  // Map URLs for each office
  const mapsUrl = [
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4201.1645231381!2d-123.11668170359391!3d49.28468915714396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485d981f6abba61%3A0x539759ce98c8e0e9!2sCosmic%20Security!5e0!3m2!1sen!2sin!4v1737523532393!5m2!1sen!2sin",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d626.2549751090891!2d-113.96908573034284!3d51.10809299823283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x81b04752c849c0ef%3A0x3b2501174f082fce!2sCosmic%20Security!5e0!3m2!1sen!2sin!4v1737523278681!5m2!1sen!2sin",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2570.751457889!2d-119.49780852359733!3d49.884693871489695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537df4a8cf723419%3A0x53fc0c94024955fb!2s1638%20Pandosy%20St%20Suite%206%2C%20Kelowna%2C%20BC%20V1Y%201P8%2C%20Canada!5e0!3m2!1sen!2sin!4v1737524361562!5m2!1sen!2sin",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2132.807197852225!2d-106.64354794891537!3d52.129851207000584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5304f790abbe5f67%3A0x75b4257da7825c11!2sCosmic%20Security!5e0!3m2!1sen!2sin!4v1737522782019!5m2!1sen!2sin",
  ];

  return (
    <section className="w-full h-full flex flex-col justify-center gap-y-6 lg:gap-y-12">
      <CustomTabs tabs={tabs} />
      <CustomTabsMobile items={tabs} />
      <div className="flex flex-col gap-y-4 lg:gap-y-6">
        <div className="flex flex-col gap-y-3 lg:flex-row lg:justify-between">
          {contactInfo.map((data, index) => (
            <IconWithText
              key={index}
              icon={data.icon}
              content={data.content}
              customClasses="gap-x-1 lg:gap-x-2"
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
