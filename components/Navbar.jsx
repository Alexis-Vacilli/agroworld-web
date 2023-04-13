import React, { useState } from "react";
import Image from "next/image";
import { BsLightbulb } from "react-icons/bs";
import { CiDark } from "react-icons/ci";
import DropDown from "./DropDown";
import { ThemeContext } from "../context/Themecontext";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const [menu, setMenu] = useState(true);

  const toggleDropdown = () => {
    return setDropdown(!dropdown);
  };

  const handleClick = () => {
    console.log(menu);
    return setMenu(!menu);
  };
  return (
    <nav className="w-full fixed top-0 bg-transparent shadow-xs">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
        <a href="#" className="flex relative h-16 w-40">
          <Image
            src="/assets/logo.png"
            alt="logo"
            fill
            objectFit="cover"
          />
        </a>
        <button
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-700 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          onClick={handleClick}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path>
          </svg>
        </button>
        <div
          className={`${menu ? "w-full md:block md:w-auto" : "hidden"}`}
          id="navbar-multi-level"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-5 md:border-0 md:bg-white sm:flex-col">
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-white bg-[#8AC33E] rounded md:bg-transparent md:text-[#8AC33E] md:p-0"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-700 font-normal rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#8AC33E] md:p-0"
              >
                About
              </a>
            </li>
            <li className="relative">
              <button
                id="dropdownNavbarLink"
                onClick={toggleDropdown}
                className="flex items-center justify-between w-full py-2 pl-3 pr-4  text-gray-700 font-normal border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#8AC33E] md:p-0 md:w-auto"
              >
                Services{" "}
                <svg
                  className="w-5 h-5 ml-1"
                  aria-hidden="true"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"></path>
                </svg>
              </button>
              {dropdown ? <DropDown /> : <></>}
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-700 font-normal rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#8AC33E] md:p-0"
              >
                Store
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-700 font-normal rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#8AC33E] md:p-0"
              >
                Contact
              </a>
            </li>
            <li className="flex items-center cursor-pointer">
              <BsLightbulb />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
