import Image from 'next/image';
import React from 'react';
import { images } from '../../../public/exporter';
const WhyNeedSecurityCard = () => {
  return (
    <div className="clip-path-mypolygon  p-3 w-[28%] bg-red-950 h-[516px]">
      <Image
        alt="home-top-one  "
        className="clip-path-mypolygonImage w-[384px] h-[184px]"
        width={384}
        height={184}
        src={images.HOME_TOP_ONE}
      />
    </div>
  );
};

export default WhyNeedSecurityCard;
