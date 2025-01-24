"use client";
import React from "react";
import { HorizontalTicker } from "react-infinite-ticker";
import HomeTickerCard, { IHomeTickerCardProps } from "./HomeTickerCard";
import { icons } from "../../../public/exporter";

const HomeTicker = () => {
  const isClient = typeof window !== "undefined";

  const RenderItem = () => (
    <div className="flex my-10 md:my-14 xl:my-[110px] flex-row">
      {data.map((item, index) => (
        <HomeTickerCard key={index} {...item} />
      ))}
    </div>
  );

  if (!isClient) {
    return null;
  }

  return (
    <div className="w-full">
      <HorizontalTicker duration={25000}>
        <RenderItem />
      </HorizontalTicker>
    </div>
  );
};

export default HomeTicker;

interface IHomeTickerCardData extends IHomeTickerCardProps {
  id: number;
}
const data: IHomeTickerCardData[] = [
  {
    name: "Happy clients",
    icon: icons.PERSON_ICON,
    count: "99",
    id: 1,
  },
  {
    name: "Events served",
    icon: icons.CLEANER_ICON,
    count: "2200",
    id: 2,
  },
  {
    name: "Years of experience",
    icon: icons.EXPERIENCE_ICON,
    count: "6",
    id: 3,
  },
  {
    name: "Licensed officer",
    icon: icons.LICENSE_ICON,
    count: "2000",
    id: 4,
  },
];
