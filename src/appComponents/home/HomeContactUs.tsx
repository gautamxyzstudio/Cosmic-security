import Description, {
  IDescriptionTypes,
} from '@/components/textTypes/Description';
import { IHeadingTags, IHeadingTypes } from '@/components/textTypes/Heading';
import UnderlinedHeading from '@/components/underlinedHeading/UnderlinedHeading';
import { STRINGS } from '@/constants/en';
import Image from 'next/image';
import React from 'react';
import { icons } from '../../../public/exporter';
import Form from '@/components/form/Form';

const HomeContactUs = () => {
  return (
    <div className=" mx-6  xl:mx-20">
      <UnderlinedHeading
        tagType={IHeadingTags.h2}
        content={STRINGS.request_information}
        type={IHeadingTypes.heading56}
      />
      <Description
        customClasses="xl:mt-6 mt-4 "
        type={IDescriptionTypes.dec24}
        content={STRINGS.request_info_dec}
      />
      <div className="flex mt-3 xl:mt-14 flex-row flex-wrap xl:flex-nowrap items-center justify-between gap-x-20">
        <div className="w-full  xl:w-[30%]">
          <Description
            type={IDescriptionTypes.dec24}
            content="Thank you for choosing Cosmic Security to meet your safety needs. Once you’ve submitted the form, our dedicated team will promptly review your requirements. A security specialist will then reach out to discuss tailored solutions that align with your unique needs. "
          />
          <div className="mt-3 xl:mt-10 items-center  flex flex-row gap-x-2">
            <Image
              className="w-6 h-6 xl:w-10 xl:h-10"
              src={icons.PHONE_ICON}
              alt="phone-icon"
            />
            <Description content="1-833-926-7642" />
          </div>
          <div className="mt-3 flex flex-row items-center  gap-x-2 ">
            <Image
              className="w-6 h-6 xl:w-10 xl:h-10"
              src={icons.MESSAGE_ICON}
              alt="phone-icon"
            />
            <Description content="info@thecosmicsecurity.com" />
          </div>
        </div>
        <div className="pb-5 xl:pb-10 pl-5 xl:pl-10 w-full xl:w-[55%] relative h-[370px] top-0 left-0  xl:h-[670px] mt-6 xl:mt-0 bg-contain bg-left-bottom bg-no-repeat bg-contactLines">
          <Form />
          <div className="bg-black absolute top-[12%] rotate-45 left-3 w-4 h-4  xl:w-[54px] xl:h-[54px]" />
        </div>
      </div>
    </div>
  );
};

export default HomeContactUs;
