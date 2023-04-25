import React from "react";
import Image from "next/image";

const Card = ({ title, name, post, testimonial, currentIndex, index }) => {
//   const activeClass = currentIndex === index ? "opacity-100" : "opacity-0";

  return (
    <div className="w-2/3">
      {/* <div className="bg-white rounded-lg shadow-lg mx-auto w-full max-w-md"></div> */}
      <div className="border-2 border-gray-100 p-8">
        <div className="pb-2 text-[#008932] text-lg font-semibold">{title}</div>
        <p className="text-base font-thin text-gray-700">{testimonial}</p>
        <div className="py-5 flex space-x-5">
          <div className="relative h-12 w-14 rounded-full">
            <Image src="/assets/service-06.png" alt="profile" fill objectFit="cover" />
          </div>
          <div className="flex flex-col">
            <span className="uppercase text-md text-gray-500">{name}</span>
            <span className="text-sm text-gray-900">{post}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
