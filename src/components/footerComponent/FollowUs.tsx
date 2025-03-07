import Image from 'next/image';
import React from 'react';
import { icons } from '../../../public/exporter';
import Heading, {
  IHeadingTags,
  IHeadingTypes,
} from '@/components/textTypes/Heading';

import Link from 'next/link';

const FollowUs = () => {
  return (
    <div className="flex flex-col gap-y-2 w-[116px] lg:gap-y-4 lg:w-40">
      <Heading
        tagType={IHeadingTags.h4}
        content="Follow us"
        type={IHeadingTypes.heading20}
      />

      <div className="flex flex-row gap-x-3 items-center">
        <Link target="_blank" href={socialLinks[0].href}>
          <Image
            alt="facebook"
            className="w-5 h-5 cursor-pointer lg:w-6 lg:h-6"
            src={icons.FACEBOOK_ICON}
          />
        </Link>
        <Link target="_blank" href={socialLinks[1].href}>
          <Image
            alt="instagram"
            className="w-5 h-5 cursor-pointer lg:w-6 lg:h-6"
            src={icons.INSTAGRAM_ICON}
          />
        </Link>
        <Link target="_blank" href={socialLinks[2].href}>
          <Image
            alt="linkedIn"
            className="w-5 h-5 cursor-pointer lg:w-6 lg:h-6"
            src={icons.LINKEDIN_ICON}
          />
        </Link>
      </div>
    </div>
  );
};

export default FollowUs;

const socialLinks = [
  {
    id: 1,
    href: 'https://www.facebook.com/thecosmiccanada/',
  },
  {
    id: 2,
    href: 'https://www.instagram.com/thecosmicsecurity/?hl=en',
  },
  {
    id: 3,
    href: 'https://www.linkedin.com/company/cosmicsecurity/?originalSubdomain=ca',
  },
];
