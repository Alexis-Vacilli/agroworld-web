import React, { useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import Image from "next/image";

const Header = () => {
  const handleToggle = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };
  return (
    <div className="flex space-x-5">
      <div className="w-1/3 h-[80vh] relative">
          <Image src="/assets/fertilizer.jpeg" alt="fertilizer" fill objectFit="cover" />
      </div>
      <div className="w-2/3 px-12 flex justify-between items-center">
        <div className="flex flex-col space-y-5">
          <h5 className="text-[#008932] font-normal text-sm">AGRO WORLD</h5>
          <p className="text-6xl text-[#06150a] w-[45rem] font-semibold uppercase">
            HAVE A SAFE AND PRODUCTIVE HARVEST
          </p>
          <p className="w-[29rem] font-extralight text-sm text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
            dicta voluptatum adipisci delectus ab aperiam eaque nulla ex vero
            similique.
          </p>
          <button className="py-4 px-8 w-[30%] mt-10 text-sm font-medium text-white focus:outline-none bg-[#008932] border border-[#008932] focus:z-10 focus:ring-4 focus:ring-gray-200">
            Learn more
          </button>
        </div>
        <div>
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  );
};

export default Header;
