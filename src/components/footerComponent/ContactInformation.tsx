import React from "react";
import Heading, { IHeadingTags, IHeadingTypes } from "../textTypes/Heading";
import { STRINGS } from "@/constants/en";
import IconWithText from "../iconWithText/IconWithText";
import { icons } from "../../../public/exporter";
import Description, { IDescriptionTypes } from "../textTypes/Description";
import { emailAddress, phoneNumber } from "@/utils/mockdata";

const ContactInformation = () => {
  return (
    <div className="flex flex-col gap-y-2 xl:gap-y-4 w-[57%] md:w-[60%] xl:w-[40%]">
      <Heading
        content={STRINGS.con_us}
        tagType={IHeadingTags.h5}
        type={IHeadingTypes.heading20}
      />
      {ContactUs.map((item) => {
        return (
          <IconWithText
            key={item.id}
            icon={item.icons}
            content={item.content}
            customClasses="gap-x-2  text-text-12 lg:text-base text-lightGrey "
          />
        );
      })}
      <div className="flex flex-col gap-y-4 md:flex-row md:gap-6 md:flex-wrap">
        {OfficeAddress.map((item) => {
          return (
            <div
              key={item.id}
              className="flex flex-col lg:gap-y-2 w-[180px] md:w-[416px] xl:w-[240px]"
            >
              <Heading
                content={item.title}
                tagType={IHeadingTags.h3}
                type={IHeadingTypes.heading16_footer}
              />
              <Description
                content={item.address}
                type={IDescriptionTypes.dec16_footer}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ContactInformation;

export const OfficeAddress = [
  {
    id: 1,
    title: "HEAD OFFICE",
    address: "515 W Pender St Unit 229, Vancouver, BC V6B 1V5 +1",
  },
  {
    id: 2,
    title: "ALBERTA OFFICE",
    address: "13032 Westwinds Crescent NE Unit 104,Calgary, AB T3J 5H2",
  },
  {
    id: 3,
    title: "KELOWNA OFFICE",
    address: "1638 Pandosy Street Suite 6,Kelowna, BC. V1Y 1P7",
  },
  {
    id: 4,
    title: "SASKATCHEWAN OFFICE",
    address: "1121 College Drive Unit 313,Saskatoon, Saskatchewan. S7N 0W3",
  },
];

export const ContactUs = [
  {
    id: 1,
    icons: icons.F_CALL,
    content: phoneNumber,
  },
  {
    id: 2,
    icons: icons.F_EMAIL,
    content: emailAddress,
  },
];
