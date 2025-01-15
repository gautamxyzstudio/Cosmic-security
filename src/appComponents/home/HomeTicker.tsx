'use client';
import React, { useRef } from 'react';
import HomeTickerCard from './HomeTickerCard';
import { icons } from '../../../public/exporter';
import { useGSAP } from '@gsap/react';
import { horizontalLoop } from '../../utils/gsap.utils';

const HomeTicker = () => {
  const divRef = useRef<HTMLDivElement | null>(null);
  useGSAP(
    () => {
      horizontalLoop('.box', { repeat: -1 });
    },
    {
      scope: divRef,
    }
  );

  return (
    <div ref={divRef} className="my-[128px] flex  overflow-hidden">
      <HomeTickerCard
        name={'Happy clients'}
        icon={icons.PERSON_ICON}
        count={'99'}
        customClass="box"
      />
      <div className="w-14 box" />
      <HomeTickerCard
        name={'Events served'}
        icon={icons.CLEANER_ICON}
        count={'2200'}
        customClass="box"
      />
      <div className="w-14 box" />
      <HomeTickerCard
        name={'Years of experience'}
        icon={icons.EXPERIENCE_ICON}
        count={'6'}
        customClass="box"
      />
      <div className="w-14 box " />
      <HomeTickerCard
        name={'Licensed officer'}
        icon={icons.LICENSE_ICON}
        count={'2000'}
        customClass="box"
      />
      <div className="w-16 box " />
    </div>
  );
};

export default HomeTicker;
