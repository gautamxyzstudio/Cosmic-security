import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

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
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          }
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <p className="text-xl text-primary">{title}</p>
        </AccordionSummary>
        <AccordionDetails>
          <Image
            className="h-[148px] object-fill rounded-md w-full my-3"
            src={poster}
            alt={title}
          />
          <p className="text-sm">{description}</p>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default ServicesServiceCardMobile;
