import Image from "next/image";
import Container from "../Container";

const WhyUs = () => {
  return (
    <div
      id="whyUs"
      className=" bg-gradient-to-b from-[#010c13] to-[#021c18] overflow-hidden h-screen"
    >
      <Container>
        <div className="flex justify-between items-center h-screen">
          <div className="left_side flex flex-col items-start justify-start w-5/12">
            <h4 className="mb-2 font-normal text-white/70 leading-loose tracking-tight text-lg">
              WHY CHOOSE US
            </h4>
            <h3 className="mb-6 text-5xl font-semibold leading-[77px] lead tracking-wide">
              Build a Brand That Your Customers Love
            </h3>
            <p className="mb-6 text-opacity-70 text-lg font-thin tracking-tight">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae
              consequuntur.
            </p>
            <a
              href="#"
              className="relative w-36 h-12 inline-flex items-center justify-center px-4 py-1.5 overflow-hidden font-medium text-sm text-indigo-600 rounded-full shadow-2xl group mr-2 "
            >
              <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-green-600 rounded-full blur-md ease"></span>
              <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-teal-500 rounded-full blur-md"></span>
                <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-sky-600 rounded-full blur-md"></span>
              </span>
              <span className="relative text-white text-lg">Get Started</span>
            </a>
          </div>
          <div className="right_side w-1/2 flex justify-center items-center">
            <div id="circle_orbit_container">
              <div className="inner_orbit animate-spin animate-infinite animate-duration-[30000ms] animate-ease-linear relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="125"
                  height="125"
                  viewBox="0 0 125 125"
                  fill="none"
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M25.6625 18.4759C1.41367 38.8231 -1.74925 74.9754 18.598 99.2243C38.9452 123.473 75.0974 126.636 99.3463 106.289C123.595 85.9416 126.758 49.7894 106.411 25.5405C86.0636 1.29165 49.9114 -1.87126 25.6625 18.4759ZM22.4486 14.6457C-3.91565 36.7679 -7.35448 76.074 14.7677 102.438C36.89 128.802 76.196 132.241 102.56 110.119C128.924 87.9968 132.363 48.6908 110.241 22.3266C88.1188 -4.03766 48.8128 -7.4765 22.4486 14.6457Z"
                    fill="url(#paint0_linear_310_773)"
                    fill-opacity="0.3"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_310_773"
                      x1="158.482"
                      y1="209.366"
                      x2="-35.1621"
                      y2="107.214"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0.00887753" stop-color="#DEF9FA" />
                      <stop offset="0.1723" stop-color="#BEF3F5" />
                      <stop offset="0.4204" stop-color="#9DEDF0" />
                      <stop offset="0.5512" stop-color="#7DE7EB" />
                      <stop offset="0.7154" stop-color="#5CE1E6" />
                      <stop offset="1" stop-color="#33BBCF" />
                    </linearGradient>
                  </defs>
                </svg>
                <Image
                  src="/RLink_Logo1.png"
                  alt="logo"
                  width={120}
                  height={120}
                  className="object-contain"
                />
                <div className="animate-spin animate-infinite animate-duration-[30000ms] animate-ease-linear animate-reverse absolute left-0 top-0 inner_orbit_cirlces w-64 h-[238px] bg-gradient-to-br from-white/10 to-teal-950/20 flex justify-center items-center rounded-3xl shadow-1g ring-1 ring-black/5 backdrop-blur-1g z-20">
                  Hello
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WhyUs;
