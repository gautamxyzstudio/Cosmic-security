'use client';

import React, { useRef } from 'react';
import HomeGuardingCard from './HomeGuardingCard';
import { icons } from '../../../public/exporter';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const HomeGuardingView = () => {
  const cardOneRef = useRef<HTMLDivElement | null>(null);
  const cardTwoRef = useRef<HTMLDivElement | null>(null);
  const cardThreeRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    gsap.set(cardOneRef.current, {
      rotate: '-23deg',
      xPercent: -75,
    });
    gsap.set(cardTwoRef.current, {
      rotate: '-10deg',
      xPercent: -25,
    });
    gsap.set(cardThreeRef.current, {
      rotate: '4deg',
    });
  });

  const onMouseOverCardOne = () => {
    gsap.to(cardOneRef.current, {
      rotate: 0,
      zIndex: 10,
    });
    gsap.to([cardTwoRef.current, cardThreeRef.current], {
      filter: 'blur(2px)',
    });
  };

  const onMouseOutCardOne = () => {
    gsap.to(cardOneRef.current, {
      zIndex: 0,
      rotate: '-23deg',
      yPercent: 0,
    });
    gsap.to([cardTwoRef.current, cardThreeRef.current], {
      filter: 'none',
    });
  };

  const onMouseOverCardTwo = () => {
    gsap.to(cardTwoRef.current, {
      rotate: 0,
      yPercent: -30,
      zIndex: 10,
    });
    gsap.to([cardOneRef.current, cardThreeRef.current], {
      filter: 'blur(2px)',
    });
  };

  const onMouseOutCardTwo = () => {
    gsap.to(cardTwoRef.current, {
      zIndex: 0,
      yPercent: 0,
      rotate: '-10deg',
    });
    gsap.to([cardOneRef.current, cardThreeRef.current], {
      filter: 'none',
    });
  };

  const onMouseOverCardThree = () => {
    gsap.to(cardThreeRef.current, {
      rotate: 0,
      yPercent: 10,
      zIndex: 10,
    });
    gsap.to([cardOneRef.current, cardTwoRef.current], {
      filter: 'blur(2px)',
    });
  };

  const onMouseOutCardThree = () => {
    gsap.to(cardThreeRef.current, {
      zIndex: 0,
      yPercent: 0,
      rotate: '4deg',
    });
    gsap.to([cardOneRef.current, cardTwoRef.current], {
      filter: 'none',
    });
  };

  return (
    <div className="relative top-0 h-full left-0">
      <HomeGuardingCard
        customClass={'absolute !bottom-[70px]  right-0  '}
        image={icons.REMOTE_GUARDING_ICON}
        title={'Remote Guarding'}
        description={
          "Cosmic Security redefines security with remote guarding, integrating state-of-the-art CCTV technology for proactive surveillance and immediate response. Your property's protection is our priority, even from a distance."
        }
        compRef={cardOneRef}
        onMouseOver={onMouseOverCardOne}
        onMouseOut={onMouseOutCardOne}
      />
      <HomeGuardingCard
        customClass={
          '!bg-guardingGradientThree !shadow-none absolute   !z-[1]  right-0 !bottom-0 '
        }
        image={icons.ONSITE_GUARDING_ICON}
        title={'On Site Guarding'}
        description={
          "Cosmic Security redefines security with remote guarding, integrating state-of-the-art CCTV technology for proactive surveillance and immediate response. Your property's protection is our priority, even from a distance."
        }
        compRef={cardTwoRef}
        onMouseOver={onMouseOverCardTwo}
        onMouseOut={onMouseOutCardTwo}
      />
      <HomeGuardingCard
        customClass={
          '!bg-guardingGradientTwo !shadow-[0_0_44px_0_#86ABC9] absolute    right-0  !bottom-[120px]  '
        }
        image={icons.MOBILE_GUARDING_ICON}
        title={'Mobile Guarding'}
        description={
          "Cosmic Security redefines security with remote guarding, integrating state-of-the-art CCTV technology for proactive surveillance and immediate response. Your property's protection is our priority, even from a distance."
        }
        compRef={cardThreeRef}
        onMouseOver={onMouseOverCardThree}
        onMouseOut={onMouseOutCardThree}
      />
    </div>
  );
};

export default HomeGuardingView;
