import Link from "next/link";

import Stars from "../Stars";

const Hero = () => {
  return (
    <div id="hero" className=" relative">
      <Stars />
      <div className="flex flex-col justify-center items-center h-[100vh] w-full">
        <div className="flex flex-col justify-center items-center gap-5">
          <h5 className="isolate px-4 py-2 rounded-3xl bg-white/5 shadow-lg ring-1 ring-black/5 backdrop-blur-sm uppercase">
            R-Link features
          </h5>
          <h1 className="text-center text-[40px] leading-[48px] sm:text-7xl font-bold tracking-[-0.02em] sm:leading-[80px] mb-3">
            Unlock Higher Ranking
          </h1>
          <p className="text-center text-base leading-6 mb-6 sm:text-xl font-normal tracking-[-0.01em] sm:leading-7">
            Find out what&apos;s working and what&apos;s not to get more search
            traffic.
            <br />
            Like an SEO consultant who can analyze millions of data.
          </p>
          <div className="group isolate px-6 py-2 rounded-3xl bg-teal-950/90 shadow-none hover:shadow-lg overflow-hidden fancy relative w-40 h-10 transition-all duration-500">
            <Link
              href={`#`}
              className="z-10 bg-transparent absolute inset-0 text-center text-lg pt-1.5 text-white/70 group-hover:text-white"
            >
              Subscribe
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
