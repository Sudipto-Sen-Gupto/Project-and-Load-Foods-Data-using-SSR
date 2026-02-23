import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="relative h-[400px] w-full md:h-[800px]">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover  bg-center  h-[400px] w-full md:h-[800px]"
      
      >
        <Image src={"/restaurant.jpg"} alt="restaurant picture"  fill
        priority
        className="object-cover" />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Optional Content */}
      <div className="relative z-10 flex items-center justify-center h-full text-white">
        <h1 className="text-4xl font-bold">Welcome to Our Restaurant</h1>
      </div>

    </div>
  );
};

export default Banner;
