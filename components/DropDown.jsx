import React from "react";

const DropDown = () => {
  return (
    <div className="absolute top-8 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
      <ul className="py-2 text-sm text-gray-700">
        <li>
          <a href="#" className="block px-4 py-2 hover:bg-gray-100">
            Logistics
          </a>
        </li>
        <li>
          <a href="#" className="block px-4 py-2 hover:bg-gray-100">
            Consultancy
          </a>
        </li>
        <li>
          <a href="#" className="block px-4 py-2 hover:bg-gray-100">
            Store
          </a>
        </li>
      </ul>
    </div>
  );
};

export default DropDown;
