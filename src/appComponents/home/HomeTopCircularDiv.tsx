'use client'
import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
const HomeTopCircularDiv = () => {
  const divRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    gsap.to(divRef.current, {
      rotate: 360,
      ease: 'none',
      duration: 10,
      repeat: -1,
      paused: false,
    });
  });
  return (
    <div className="relative top-0 flex flex-row justify-center items-center left-0">
      <div
        ref={divRef}
        className="w-[100px] h-[100px]  rounded-full bg-white flex items-center justify-center"
      >
        <svg viewBox="0 0 100 100">
          <path
            id="circlePath"
            fill="none"
            stroke="transparent"
            d="
            M 15, 50
            a 35,35 0 1,1 70,0
            35,35 0 1,1 -70,0
          "
          />
          <text>
            <textPath
              className="text-[12px] tracking-[0.15rem]"
              href="#circlePath"
            >
              Explore More Explore More
            </textPath>
          </text>
        </svg>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="36"
        className="absolute"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
      >
        <path
          d="M16.9406 34.0605C17.2219 34.3417 17.6034 34.4997 18.0011 34.4997C18.3988 34.4997 18.7803 34.3417 19.0616 34.0605L28.0616 25.0605C28.3348 24.7776 28.486 24.3987 28.4826 24.0054C28.4792 23.6121 28.3214 23.2359 28.0433 22.9578C27.7652 22.6797 27.389 22.5219 26.9957 22.5185C26.6024 22.5151 26.2235 22.6663 25.9406 22.9395L19.5011 29.379V3C19.5011 2.60218 19.3431 2.22064 19.0618 1.93934C18.7805 1.65804 18.3989 1.5 18.0011 1.5C17.6033 1.5 17.2217 1.65804 16.9404 1.93934C16.6591 2.22064 16.5011 2.60218 16.5011 3V29.379L10.0616 22.9395C9.7787 22.6663 9.39979 22.5151 9.0065 22.5185C8.6132 22.5219 8.23698 22.6797 7.95887 22.9578C7.68076 23.2359 7.52301 23.6121 7.51959 24.0054C7.51617 24.3987 7.66736 24.7776 7.9406 25.0605L16.9406 34.0605Z"
          fill="#121212"
        />
      </svg>
    </div>
  );
};

export default HomeTopCircularDiv;
