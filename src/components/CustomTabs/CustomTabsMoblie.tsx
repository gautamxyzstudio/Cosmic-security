import React, { useRef } from "react";

export const CustomTabsMobile = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const items = Array.from({ length: 10 }, (_, i) => `Item ${i + 1}`);

  const scrollToIndex = (index: number) => {
    if (containerRef.current) {
      const itemWidth = 400; // Height of each item
      const scrollPosition = index * itemWidth;
      containerRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full xl:hidden flex">
      <div
        ref={containerRef}
        className="flex flex-row  overflow-x-scroll"
      >
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToIndex(index)}
            className="flex items-center gap-x-1 w-full max-w-[212px] h-12 py-4 text-sm"
          >
            Scroll to {index}
          </button>
        ))}
      </div>
    </div>
  );
};
