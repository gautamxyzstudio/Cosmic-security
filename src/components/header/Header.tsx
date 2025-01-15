'use client';
import Image from 'next/image';
import React from 'react';
import { icons } from '../../../public/exporter';
import { STRINGS } from '@/constants/en';
import { route } from '@/constants/route';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathName = usePathname();
  const navRoutes = [
    {
      id: 1,
      name: STRINGS.home,
      link: route.home,
    },
    {
      id: 2,
      name: STRINGS.services,
      link: route.services,
    },
    {
      id: 3,
      name: STRINGS.about,
      link: route.about,
    },
    {
      id: 4,
      name: STRINGS.meetOurTeam,
      link: route.meetOurTeam,
    },
    {
      id: 5,
      name: STRINGS.contact,
      link: route.contact,
    },
  ];
  return (
    <header className="pt-4 w-full max-w-screen-2xl z-50 left-1/2 transform -translate-x-1/2 fixed mx-auto flex flex-row justify-between items-center px-20">
      <Image alt="" src={icons.LOGO} />
      <nav className="flex flex-row gap-x-14">
        {navRoutes.map((route) => (
          <Link
            className={
              route.link === pathName
                ? 'text-primary text-2xl'
                : 'text-white text-2xl hover:text-primary'
            }
            key={route.id}
            href={route.link}
          >
            {route.name}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
