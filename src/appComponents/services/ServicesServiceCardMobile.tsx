import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Heading, {
  IHeadingTags,
  IHeadingTypes,
} from "@/components/textTypes/Heading";
import Description, {
  IDescriptionTypes,
} from "@/components/textTypes/Description";

export interface IServicesServiceCardMobileProps {
  title: string;
  description: string;
  poster: StaticImport;
}

const ServicesServiceCardMobile: React.FC<IServicesServiceCardMobileProps> = ({
  title,
  description,
  poster,
}) => {
  return (
    <div>
      <Accordion className="!bg-black rounded-sm">
        <AccordionSummary
          className="!bg-black rounded-sm"
          expandIcon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M4 16L12 8L20 16"
                stroke="#868686"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          }
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Heading
            type={IHeadingTypes.heading28}
            tagType={IHeadingTags.h3}
            content={title}
          />
        </AccordionSummary>
        <AccordionDetails>
          <Image
            className="h-[148px] md:h-[224px] rounded-md w-full my-3 md:my-4"
            src={poster}
            alt={title}
          />
          <Description
            content={description}
            type={IDescriptionTypes.dec16_sec}
          />
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default ServicesServiceCardMobile;
