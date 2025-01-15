import Description, {
  IDescriptionTypes,
} from '@/components/textTypes/Description';
import { IHeadingTags, IHeadingTypes } from '@/components/textTypes/Heading';
import UnderlinedHeading from '@/components/underlinedHeading/UnderlinedHeading';
import { STRINGS } from '@/constants/en';
import Image from 'next/image';
import React from 'react';
import { icons } from '../../../public/exporter';

const HomeContactUs = () => {
  return (
    <div className="mt-[128px] mx-20">
      <UnderlinedHeading
        tagType={IHeadingTags.h2}
        content={STRINGS.request_information}
        type={IHeadingTypes.heading56}
      />
      <Description
        customClasses="mt-6"
        type={IDescriptionTypes.dec24}
        content={STRINGS.request_info_dec}
      />
      <div>
        <div>
          <Description
            type={IDescriptionTypes.dec24}
            content="Thank you for choosing Cosmic Security to meet your safety needs. Once you’ve submitted the form, our dedicated team will promptly review your requirements. A security specialist will then reach out to discuss tailored solutions that align with your unique needs. "
          />
          <div className="mt-12 flex flex-col gap-y-1">
            <Image src={icons.PHONE_ICON} alt="phone-icon" />
            <Description content="1-833-926-7642" />
          </div>
          <div className="mt-3 flex flex-col gap-y-1">
            <Image src={icons.MESSAGE_ICON} alt="phone-icon" />
            <Description content="info@thecosmicsecurity.com" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContactUs;
