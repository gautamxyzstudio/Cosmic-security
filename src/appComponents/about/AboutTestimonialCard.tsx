import Description, {
  IDescriptionTypes,
} from "@/components/textTypes/Description";
import Image from "next/image";
import React from "react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

type IAboutTestimonialCard = {
  userName: string;
  userReview: string;
  userImage: StaticImport;
  reviewFrom: string;
};

const AboutTestimonialCard = ({
  userName,
  userReview,
  userImage,
  reviewFrom,
}: IAboutTestimonialCard) => {
  return (
    <div className="w-[90%] flex  cursor-grab flex-col items-center rounded-xl relative top-0 left-0 bg-[#1B1B1B] py-6 px-4">
      <p className="text-[80px]  absolute top-0 leading-[40px] ">“</p>
      <Description type={IDescriptionTypes.dec16_sec} content={userReview} />
      <div className="flex items-center w-full mt-4  gap-x-3 flex-row">
        <Image className="w-10 h-10 rounded-full" src={userImage} alt="user" />
        <div>
          <Description type={IDescriptionTypes.dec16_sec} content={userName} />
          <p className="text-disabled text-text-12 md:text-sm">{reviewFrom}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutTestimonialCard;
