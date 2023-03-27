import React from "react";
import logo from "../assets/logo.jpg";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex justify-between px-6 items-center">
      <div className="left">
        <h3 className="text-3xl">Covid Info</h3>
      </div>
      <div className="right">
        <Image
          className="mix-blend-multiply contrast-200"
          src={logo}
          alt="logo"
          width={110}
          height={110}
          priority={true}
        />
      </div>
    </div>
  );
};

export default Navbar;
