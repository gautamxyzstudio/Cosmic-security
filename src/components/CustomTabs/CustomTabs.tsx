'use client'
import { Tabs, Tab, TabsProps } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import { icons } from "../../../public/exporter";

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}
interface TabItemProps {
  label: string;
  onClickAction?: () => void; // Add onClick action if needed
}
export interface ICustomTabProps extends TabsProps {
  tabs: TabItemProps[];
  tabOuterDivStyle?: string;
  tabInnerDivStyle?: string;
}
const CustomTabs: React.FC<ICustomTabProps> = ({ tabs, ...props }) => {
  const [value, setValue] = useState<number>(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Tabs
      {...props}
      value={value}
      onChange={handleChange}
      aria-label="map tabs"
      variant="scrollable"
    >
      {tabs.map((item, index) => {
        const isSelected = value === index;
        return (
          <Tab
            key={index}
            label={item.label}
            onClick={item.onClickAction}
            icon={
              <Image
                src={isSelected ? icons.LOCATION_WHITE : icons.LOCATION_DARK}
                alt={item.label}
                className="w-4 h-4 lg:w-6 lg:h-6"
              />
            }
            {...a11yProps(index)}
          />
        );
      })}
    </Tabs>
  );
};

export default CustomTabs;
