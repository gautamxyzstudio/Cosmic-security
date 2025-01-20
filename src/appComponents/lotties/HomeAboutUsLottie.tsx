'use client';
import dynamic from 'next/dynamic';
import animationData from './aboutIllustration.json';
import React from 'react';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });
const HomeAboutUsLottie = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center">
      <Lottie
        animationData={animationData}
        className="w-[365px] h-[365px]"
        loop={true}
      />
    </div>
  );
};

export default HomeAboutUsLottie;
