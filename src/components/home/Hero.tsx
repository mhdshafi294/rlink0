import Link from "next/link";

import Stars from "../Stars";

const Hero = () => {
  return (
    <div id="hero" className=" relative">
      <Stars />
      <div className="flex flex-col justify-center items-center h-[97vh] w-full px-5 lg:px-0">
        <div className="flex flex-col justify-center items-center gap-5">
          <div className="group isolate px-6 py-2 rounded-3xl bg-[#041d18f5] shadow-none hover:shadow-lg overflow-hidden fancy relative w-40 h-10 transition-all duration-500">
            <p className="z-10 bg-transparent absolute inset-0 text-center text-lg pt-1.5 text-white/70 group-hover:text-white duration-200">
              R-Link features
            </p>
          </div>
          <h1 className="text-center text-[40px] leading-[48px] sm:text-7xl font-bold tracking-[-0.02em] sm:leading-[80px] mb-3">
            Your Digital Growth Ally
          </h1>
          <p className="text-center text-base leading-6 mb-6 sm:text-xl font-normal  sm:leading-7">
            Want something fun, creative, and professional?
            <br />
            You just arrived at your final destination!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
