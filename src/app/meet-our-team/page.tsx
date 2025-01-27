import OurTeamBottom from "@/appComponents/ourTeam/OurTeamBottom";
import OurTeamMiddle from "@/appComponents/ourTeam/OurTeamMiddle";
import OurTeamTop from "@/appComponents/ourTeam/OurTeamTop";
import React from "react";

const MeetOurTeam = () => {
  return (
    <div className="max-w-screen-2xl bg-webBg mx-auto flex flex-col gap-y-10 md:gap-y-14 lg:gap-y-20 xl:gap-y-32 pb-10 md:pb-14 lg:pb-20 xl:pb-32 bg-cover">
      <OurTeamTop />
      <OurTeamMiddle />
      <OurTeamBottom />
    </div>
  );
};

export default MeetOurTeam;
