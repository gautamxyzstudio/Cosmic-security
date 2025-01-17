import { STRINGS } from "@/constants/en";
import { route } from "@/constants/route";
import Link from "next/link";
import React from "react";
import Description, { IDescriptionTypes } from "../textTypes/Description";
import Heading, { IHeadingTags, IHeadingTypes } from "../textTypes/Heading";
import FollowUs from "./FollowUs";

const QuickLinks = () => {
  const quickLinks = [
    {
      id: 1,
      title: STRINGS.home,
      href: route.home,
    },
    {
      id: 2,
      title: STRINGS.services,
      href: route.services,
    },
    {
      id: 3,
      title: STRINGS.about,
      href: route.about,
    },
    {
      id: 4,
      title: STRINGS.meet_our,
      href: route.meetOurTeam,
    },
    {
      id: 5,
      title: STRINGS.con_us,
      href: route.contact,
    },
  ];
  return (
    <div className="flex flex-col items-start justify-between gap-y-4 lg:gap-y-6 w-fit">
      <div className="flex flex-col gap-y-2 lg:gap-y-4">
        <Heading
          tagType={IHeadingTags.h4}
          content="Quick Links"
          type={IHeadingTypes.heading20}
        />
        <div className="flex flex-col gap-y-1 lg:gap-y-2 ">
          {quickLinks.map((link) => (
            <Link key={link.id} href={link.href}>
              <Description
                content={link.title}
                customClasses="!text-lightGrey cursor-pointer"
                type={IDescriptionTypes.dec16}
              />
            </Link>
          ))}
        </div>
      </div>
      <FollowUs />
    </div>
  );
};

export default QuickLinks;
