import React, {useState} from "react";
import { FiSun, FiMoon } from "react-icons/fi";

const ThemeSwitcher = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
    // add code to update the theme of the page here
  };
  return (
    <button
      className="bg-gray-300 dark:bg-gray-900 w-10 h-20 rounded-full p-1 flex flex-col items-center justify-center transition-colors duration-300 focus:outline-none transform rotate-180"
      onClick={toggleDarkMode}
    >
      <span className="sr-only">Toggle Theme</span>
      {isDarkMode ? (
        <FiSun className="h-6 w-6 text-gray-400 transition-colors duration-300 transform rotate-180" />
      ) : (
        <FiMoon className="h-6 w-6 text-white transition-colors duration-300 transform rotate-180" />
      )}
    </button>
  );
};

export default ThemeSwitcher;
