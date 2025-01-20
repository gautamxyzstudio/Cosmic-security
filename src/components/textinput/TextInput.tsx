'use client';
import { useGSAP } from '@gsap/react';
import React, { ChangeEventHandler, useRef } from 'react';
import gsap from 'gsap';
type ITextInputProps = {
  value: string;
  isMobile?: boolean;
  placeHolder: string;
  onChangeText?: ChangeEventHandler<HTMLInputElement>;
};

const TextInput: React.FC<ITextInputProps> = ({
  value,
  placeHolder,
  onChangeText,
}) => {
  const divRef = useRef<HTMLHeadingElement | null>(null);

  useGSAP(() =>
    gsap.set(divRef.current, {
      bottom: 0,
    })
  );

  const onFocus = () => {
    gsap.to(divRef.current, {
      scale: 0.5,
      yPercent: -75,
      xPercent: -25,
      duration: 0.2,
      ease: 'none',
    });
  };
  const onBlur = () => {
    if (value.length === 0) {
      gsap.to(divRef.current, {
        scale: 1,
        yPercent: 0,
        xPercent: 0,
        duration: 0.2,
        ease: 'none',
      });
    }
  };

  return (
    <div>
      <div className="w-full pt-2 xl:pt-5 relative top-0 left-0    rounded-[4px] ">
        <h3
          ref={divRef}
          className=" pointer-events-none h-8 inline-block text-base xl:text-2xl text-white  absolute"
        >
          {placeHolder}
        </h3>
        <input
          onFocus={onFocus}
          onBlur={onBlur}
          type="text"
          value={value}
          onChange={onChangeText}
          className=" w-full placeholder-white  outline-none text-sm md:text-font-m xl:text-xl bg-black  text-white"
        />
      </div>
      <div className="h-[1px] mt-2 xl:mt-3 bg-background w-full " />
    </div>
  );
};

export default TextInput;
