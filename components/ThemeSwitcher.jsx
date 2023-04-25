import React, { useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

const ThemeSwitcher = () => {
  const [isDarkMode, setIsDarkMode] = useState("bg-white");

  const toggleDarkMode = () => {
    setIsDarkMode("bg-gray-900");
    // add code to update the theme of the page here
  };

  const toggleLightMode = () => {
    setIsDarkMode("bg-white");
  }

  return (
    <div className={`flex flex-col space-y-8 shadow-sm ${isDarkMode}  p-3 border-2 border-gray-100 rounded-full fixed top-[50%] translate-y-[-50%] right-7 cursor-pointer`}>
      <div onClick={toggleLightMode}>
        <FiSun className="text-gray-900" />
      </div>
      <div onClick={toggleDarkMode}>
        <FiMoon className="text-gray-900" />
      </div>
    </div>
  );
};

export default ThemeSwitcher;
