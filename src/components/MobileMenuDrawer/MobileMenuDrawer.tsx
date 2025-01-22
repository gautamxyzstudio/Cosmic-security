import { Drawer } from "@mui/material";
import Image from "next/image";
import React from "react";
import { icons, images } from "../../../public/exporter";

interface IMobileMenuDrawer {
  open: boolean;
  children: React.ReactNode;
  onClickCross: () => void;
}
const MobileMenuDrawer: React.FC<IMobileMenuDrawer> = ({
  open,
  children,
  onClickCross,
}) => {
  return (
    <Drawer
      anchor="right"
      PaperProps={{
        sx: {
          width: "80%",
        },
      }}
      sx={{
        "@media(max-width: 1210px)": {
          display: "block",
        },
        display: "none",
      }}
      open={open}
    >
      {/* Menu content */}
      <div className="p-[16px_16px_24px_24px] flex justify-between items-center">
        <Image
          alt="Cosmic Security"
          width={73}
          height={32}
          src={images.LOGO}
        />
        <Image
          alt="Close"
          src={icons.CROSS}
          width={18}
          height={18}
          onClick={onClickCross}
        />
      </div>
      <div className="flex flex-col justify-start">{children}</div>
      {/*... */}
    </Drawer>
  );
};

export default MobileMenuDrawer;
