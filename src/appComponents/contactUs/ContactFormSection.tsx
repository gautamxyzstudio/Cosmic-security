import Form from "@/components/form/Form";
import Description from "@/components/textTypes/Description";
import Heading, {
  IHeadingTags,
  IHeadingTypes,
} from "@/components/textTypes/Heading";
import UnderlinedHeading from "@/components/underlinedHeading/UnderlinedHeading";
import { STRINGS } from "@/constants/en";
import React from "react";

const ContactFormSection = () => {
  return (
    <section className="flex flex-col gap-y-4 xl:gap-y-3 w-full h-full overflow-hidden xl:pt-14 xl:mt-20 items-center xl:items-stretch pt-[68px]">
      <UnderlinedHeading
        content={STRINGS.con_us}
        tagType={IHeadingTags.h1}
        type={IHeadingTypes.heading56}
        customClasses="capitalize"
      />
      <div className="flex flex-col gap-y-10 xl:flex-row items-center justify-end relative">
        <div className="xl:bg-[#484848] xl:py-12 xl:pl-[132px] xl:pr-6 rounded-lg">
          <div className="flex flex-col gap-y-3 lg:gap-x-6 xl:w-[612px]">
            <Heading
              content={STRINGS.free_contact_us}
              type={IHeadingTypes.heading56}
              tagType={IHeadingTags.h2}
            />
            <div className="flex flex-col gap-y-1 lg:gap-y-2">
              <Description content={STRINGS.contact_des} />
              <Description
                content={STRINGS.contact_thanks_message}
                customClasses="xl:w-[85%]"
              />
            </div>
          </div>
        </div>
        <div className="w-full h-[368px] xl:absolute xl:z-10  xl:w-[47%] xl:h-[648px] xl:left-0">
          <Form isContactPage={true} customStyle="rounded-lg" />
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
