import Heading, {
  IHeadingTags,
  IHeadingTypes,
} from "@/components/textTypes/Heading";
import Image from "next/image";
import React from "react";
import { images } from "../../../public/exporter";
import Description, {
  IDescriptionTypes,
} from "@/components/textTypes/Description";

const OurTeamBottom = () => {
  return (
    <section className="px-20 w-full h-full flex flex-col gap-y-14">
      <div className="flex flex-col items-end gap-y-2 w-fit">
        <Heading
          tagType={IHeadingTags.h2}
          type={IHeadingTypes.heading56}
          content="Cosmic Beings"
        />
        <div className="bg-primary h-0.5 w-[128px] mt-2" />
      </div>
      <div className="flex gap-x-10 w-full h-full items-center justify-between">
        {[
          { path: images.SHERRY, name: "Sherry Sidhu", role: "Ceo/founder" },
          { path: images.PARAMJIT, name: "Paramjit Kaur", role: "Co-founder" },
          {
            path: images.AMRIT,
            name: "Amritpal Singh",
            role: "Sr. Account Manager",
          },
          {
            path: images.KUNAL,
            name: "Kunal Sethi",
            role: "Vice president of business development",
          },
          { path: images.JASMINE, name: "Jasmine", role: "Operations Manager" },
        ].map((item, index) => {
          return (
            <div key={index} className="flex flex-col w-[224px] h-[300px]">
              <Image
                alt={item.name}
                src={item.path}
                className="w-[224px] h-[212px] rounded-t-xl"
              />
              <div className="bg-black p-3 rounded-b-xl flex flex-col w-full h-[88px]">
                <Description
                  customClasses="!text-primary"
                  content={item.name}
                  type={IDescriptionTypes.dec16}
                />
                <Description
                  content={item.role}
                  type={IDescriptionTypes.dec12_static}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default OurTeamBottom;
