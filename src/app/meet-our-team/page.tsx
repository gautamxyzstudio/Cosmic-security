import OurTeamBottom from "@/appComponents/ourTeam/OurTeamBottom";
import OurTeamMiddle from "@/appComponents/ourTeam/OurTeamMiddle";
import OurTeamTop from "@/appComponents/ourTeam/OurTeamTop";
import React from "react";

const MeetOurTeam = () => {
  return (
    <div className="max-w-screen-2xl bg-webBg mx-auto flex flex-col lg:gap-y-32 pb-32 bg-cover">
      <OurTeamTop />
      <OurTeamMiddle />
      <OurTeamBottom />
    </div>
  );
};

export default MeetOurTeam;
