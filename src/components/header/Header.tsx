"use client";
import Image from "next/image";
import React, { useState } from "react";
import { icons, images } from "../../../public/exporter";
import { STRINGS } from "@/constants/en";
import { route } from "@/constants/route";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileMenuDrawer from "../MobileMenuDrawer/MobileMenuDrawer";

const Header = () => {
  const pathName = usePathname();
  const [openDrawer, setOpenDrawer] = useState(false);
  const handleDrawerToggle = () => {
    setOpenDrawer(!openDrawer);
  };
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
    <header className="pt-5 xl:pt-6 xl:pb-3 w-full max-w-screen-2xl z-50 left-1/2 transform -translate-x-1/2 fixed mx-auto flex flex-row justify-between items-center px-6 xl:px-20 ">
      <Image
        alt="Cosmic Security"
        src={images.LOGO}
        className="w-20 h-6 lg:w-[144px] lg:h-11"
      />
      <nav className="hidden xl:flex flex-row gap-x-14">
        {navRoutes.map((route) => (
          <Link
            className={
              route.link === pathName
                ? "text-primary text-2xl"
                : "text-white text-2xl hover:text-primary"
            }
            key={route.id}
            href={route.link}
          >
            {route.name}
          </Link>
        ))}
      </nav>
      <Image
        alt="Hamburger"
        src={icons.HUMBUG}
        className="xl:hidden flex"
        onClick={handleDrawerToggle}
      />
      <MobileMenuDrawer open={openDrawer} onClickCross={handleDrawerToggle}>
        {navRoutes.map((route) => (
          <Link
            key={route.id}
            className="py-[18px] px-6 text-font-m border-b border-stroke"
            href={route.link}
            onClick={handleDrawerToggle}
          >
            {route.name}
          </Link>
        ))}
      </MobileMenuDrawer>
    </header>
  );
};

export default Header;
