import React from "react";
import Image from "next/image";

const Services = () => {
  return (
    <div className="p-4 flex flex-col space-y-6">
      <div className="flex justify-between space-x-10">
        <small className="w-1/3 flex items-center h-40 text-[#008932] text-base uppercase">
          Quality products
        </small>
        <div className="w-2/3">
          <p className="text-[#06150a] text-5xl font-semibold">
            We provide our growers with the best quality products available
          </p>
          <p className="pt-8 font-extralight opacity-50 w-[50rem]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga
            debitis iste nihil temporibus corrupti aliquid laudantium quas.
            Repellat iure repudiandae aliquam necessitatibus neque dolore sequi
            aperiam, pariatur, tempore, sint esse?
          </p>
        </div>
      </div>
      {/* Service cards */}
      <div className="flex w-full space-x-5 pt-10">
        <div className="w-1/3 flex space-x-4 items-center p-14 border-2 border-gray-200 hover:border-[#008932]">
          <div className="w-1/3 relative h-28">
            <Image src="/assets/service-06.png" alt="service-photo" fill />
          </div>
          <div className="w-1/2">
            <p className="text-3xl font-normal">Natural Products</p>
          </div>
        </div>
        <div className="w-1/3 flex space-x-4 items-center p-14 border-2 border-gray-200 hover:border-[#008932]">
          <div className="w-1/3 relative h-28">
            <Image src="/assets/service-07-1.png" alt="service-photo" fill />
          </div>
          <div className="w-1/2">
            <p
              className="text-2xl font-normal">
              Innovation And Expertice
            </p>
          </div>
        </div>
        <div className="w-1/3 flex space-x-4 items-center p-14 border-2 border-gray-200 hover:border-[#008932]">
          <div className="w-1/3 relative h-28">
            <Image src="/assets/service-08.png" alt="service-photo" fill />
          </div>
          <div className="w-1/2">
            <p className="text-3xl font-normal">Nutruition products</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
