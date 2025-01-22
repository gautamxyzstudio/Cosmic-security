import Image from "next/image";
import React, { useRef, useState } from "react";
import { icons } from "../../../public/exporter";
import Description, { IDescriptionTypes } from "../textTypes/Description";

interface ICustomTabsMobileProps {
  items: {
    id: number;
    label: string;
    onClickAction: () => void;
  }[];
}

export const CustomTabsMobile: React.FC<ICustomTabsMobileProps> = ({ items }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedId, setSelectedId] = useState(0);

  const handleItemClick = (index: number) => {
    if (containerRef.current) {
      const itemWidth = 212; // Match min-width from className
      const scrollPosition = index * itemWidth;
      containerRef.current.scrollLeft = scrollPosition;
      setSelectedId(index);
      
      // Find and execute the matching item's action
      const selectedItem = items[index];
      if (selectedItem) {
        selectedItem.onClickAction();
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className="flex flex-row max-w-screen-sm lg:hidden items-center justify-start overflow-x-auto"
    >
      {items.map((item, index) => {
        const isSelected = selectedId === index;
        return (
          <div
            key={item.id}
            onClick={() => handleItemClick(index)}
            className={`flex items-center justify-center min-w-[212px] py-4 text-sm ${
              isSelected ? "bg-buttonGradient" : "bg-transparent"
            } cursor-pointer transition-all duration-300`}
          >
            <Image
              src={isSelected ? icons.LOCATION_WHITE : icons.LOCATION_DARK}
              alt={item.label}
              className="w-4 h-4 lg:w-6 lg:h-6 mx-2"
            />
            <Description
              content={item.label}
              type={IDescriptionTypes.dec24}
              customClasses={isSelected ? "text-white" : "text-disabled"}
            />
          </div>
        );
      })}
    </div>
  );
};
