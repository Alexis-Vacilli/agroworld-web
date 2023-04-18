import React, { useState, useContext } from "react";
import Image from "next/image";
import { FaLightbulb } from "react-icons/fa";
import { CiDark } from "react-icons/ci";
import {SiThymeleaf} from "react-icons/si"
import { RiArrowDropDownLine } from "react-icons/ri";
import DropDown from "./DropDown";
import { ThemeContext } from "../context/themeContext";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const [menu, setMenu] = useState(true);
  const [themes, setThemes] = useState(true)
  const { isLightTheme, light, dark, toggleTheme } = useContext(ThemeContext)
  const theme = isLightTheme ? light : dark;

  const toggleDropdown = () => {
    return setDropdown(!dropdown);
  };

  const handleClick = () => {
    console.log(menu);
    return setMenu(!menu);
  };

  const changeTheme = (e) => {
    console.log("Theme changed!")
    setThemes(!themes);
    toggleTheme();
  }

  console.log(theme.background);
  return (
    <nav className={`w-full fixed z-10 top-0 ${theme.background}`}>
      <div className="w-full flex flex-wrap items-center justify-between mx-auto px-4 py-8">
        <a href="#" className="flex items-center font-bold">
          <SiThymeleaf className="text-[#008932] text-4xl mr-1"/>
          <div className="text-2xl font-serif text-[#06150a]">AW</div>
        </a>
        <button
          type="button"
          className={`inline-flex items-center p-2 ml-3 text-sm rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 ${theme.text}`}
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
          <ul className="flex flex-col font-bold p-4 md:p-0 border md:flex-row md:space-x-16 md:border-0 md:mt-2 sm:flex-col text-[#06150a]">
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-white bg-[#008932] rounded md:bg-transparent md:text-[#008932] md:p-0"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`block py-2 pl-3 pr-4 font-normal rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#008932] md:p-0 ${theme.text}`}
              >
                About
              </a>
            </li>
            <li className="relative">
              <button
                id="dropdownNavbarLink"
                onClick={toggleDropdown}
                className={`flex items-center justify-between w-full py-2 pl-3 pr-4 font-normal border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#008932] md:p-0 md:w-auto ${theme.text}`}
              >
                Services{" "}
                  <RiArrowDropDownLine className={` text-1xl ${theme.text}`} />
              </button>
              {dropdown ? <DropDown /> : <></>}
            </li>
            <li>
              <a
                href="#"
                className={`block py-2 pl-3 pr-4 font-normal rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#008932] md:p-0 ${theme.text}`}
              >
                Store
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`block py-2 pl-3 pr-4 font-normal rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#008932] md:p-0 ${theme.text}`}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <button className="py-3 px-8 mr-2 mb-2 text-sm font-medium text-[#008932] focus:outline-none bg-white  border border-[#008932] hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-200" onClick={changeTheme}>
          Contact Us
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
