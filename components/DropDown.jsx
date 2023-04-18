import React, {useContext} from "react";
import { ThemeContext } from "../context/themeContext";

const DropDown = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  

  return (
    <div className={`absolute top-8 z-10  divide-y divide-gray-100 rounded-lg shadow w-44 ${theme.background}`}>
      <ul className={`py-2 text-sm ${theme.text}`}>
        <li>
          <a href="#" className={`block px-4 py-2 hover:${theme.hover}`}>
            Logistics
          </a>
        </li>
        <li>
          <a href="#" className={`block px-4 py-2 hover:${theme.hover}`}>
            Consultancy
          </a>
        </li>
        <li>
          <a href="#" className={`"]block px-4 py-2 hover:${theme.hover}`}>
            Store
          </a>
        </li>
      </ul>
    </div>
  );
};

export default DropDown;
