import React from "react";
import Search from "./Search";

function Hero() {
  return (
    <div className="w-full h-screen relative">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hero-banner.jpeg')",
          opacity: 0.4,
        }}
      ></div>

      <div className="relative flex flex-col items-center p-10 py-20 gap-6 w-full bg-opacity-90 h-[600px] ">
        <h2 className="text-xl font-normal">
          Find cars for sale and for rent near by you
        </h2>
        <h2 className="text-[60px] font-bold">Find Your Dream Car</h2>
        <Search />
        <img src="/images/tesla.png" className="mt-10" />
      </div>
    </div>
  );
}

export default Hero;
