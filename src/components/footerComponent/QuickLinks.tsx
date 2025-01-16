import Description, {
    IDescriptionTypes,
  } from "@/components/TextTypes/description";
  import Heading, { IHeadingTags, IHeadingTypes } from "@/components/TextTypes/Heading";
  import { STRINGS } from "@/constants/en";
  import { route } from "@/constants/route";
  import Link from "next/link";
  import React from "react";
  import FollowUs from "./FollowUs";
  
  const QuickLinks = () => {
    const quickLinks = [
      {
        id: 1,
        title: STRINGS.about,
        href: route.about,
      },
      {
        id: 3,
        title: STRINGS.services,
        href: route.services,
      },
      {
        id: 4,
        title: STRINGS.meetOurTeam,
        href: route.meetOurTeam,
      },
      {
        id: 5,
        title: STRINGS.contact,
        href: route.contact,
      },
    ];
    return (
      <div className="flex md:flex-col items-start justify-between md:gap-y-6 w-full md:w-fit">
        <div className="flex flex-col gap-y-6">
          <Heading tagType={IHeadingTags.h3} content="Quick Links" type={IHeadingTypes.heading20} />
          <div className="flex flex-col gap-y-3 ">
            {quickLinks.map((link) => (
              <Link key={link.id} href={link.href}>
                <Description
                  content={link.title}
                  customClasses="!text-sm cursor-pointer"
                
                />
              </Link>
            ))}
          </div>
        </div>
        
      </div>
    );
  };
  
  export default QuickLinks;
  