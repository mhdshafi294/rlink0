import Image from "next/image";
import { BookOpenCheck, SquareDashedBottomCode } from "lucide-react";

import Container from "../Container";
import Link from "next/link";

const WhyUs = () => {
  return (
    <div
      id="whyUs"
      className="bg-gradient-to-b from-[#010c13] to-[#021c18] overflow-hidden py-28 md:py-0 md:min-h-screen"
    >
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center md:h-screen">
          <div className="left_side flex flex-col items-start justify-start md:w-5/12">
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
            <Link
              href="/register"
              className="relative w-36 h-12 inline-flex items-center justify-center px-4 py-1.5 overflow-hidden font-medium text-sm text-indigo-600 rounded-full shadow-2xl group mr-2 "
            >
              <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-green-600 rounded-full blur-md ease"></span>
              <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-teal-500 rounded-full blur-md"></span>
                <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-sky-600 rounded-full blur-md"></span>
              </span>
              <span className="relative text-white text-lg">Get Started</span>
            </Link>
          </div>
          <div className="right_side md:w-1/2 flex justify-center items-center relative min-h-screen">
            <div id="circle_orbit_container relative w-full h-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="125"
                height="125"
                viewBox="0 0 125 125"
                fill="none"
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 "
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M25.6625 18.4759C1.41367 38.8231 -1.74925 74.9754 18.598 99.2243C38.9452 123.473 75.0974 126.636 99.3463 106.289C123.595 85.9416 126.758 49.7894 106.411 25.5405C86.0636 1.29165 49.9114 -1.87126 25.6625 18.4759ZM22.4486 14.6457C-3.91565 36.7679 -7.35448 76.074 14.7677 102.438C36.89 128.802 76.196 132.241 102.56 110.119C128.924 87.9968 132.363 48.6908 110.241 22.3266C88.1188 -4.03766 48.8128 -7.4765 22.4486 14.6457Z"
                  fill="url(#paint0_linear_310_773)"
                  fillOpacity="0.3"
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
                    <stop offset="0.00887753" stopColor="#DEF9FA" />
                    <stop offset="0.1723" stopColor="#BEF3F5" />
                    <stop offset="0.4204" stopColor="#9DEDF0" />
                    <stop offset="0.5512" stopColor="#7DE7EB" />
                    <stop offset="0.7154" stopColor="#5CE1E6" />
                    <stop offset="1" stopColor="#33BBCF" />
                  </linearGradient>
                </defs>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="255"
                height="255"
                viewBox="0 0 255 255"
                fill="none"
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 "
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M49.3111 34.1955C-2.15468 77.3804 -8.86765 154.11 34.3173 205.576C77.5022 257.042 154.232 263.755 205.698 220.57C257.163 177.385 263.876 100.655 220.691 49.1894C177.506 -2.27642 100.777 -8.9894 49.3111 34.1955ZM46.0972 30.3653C-7.48399 75.3252 -14.4729 155.209 30.487 208.79C75.447 262.371 155.33 269.36 208.911 224.4C262.493 179.44 269.481 99.5566 224.522 45.9754C179.562 -7.60574 99.6783 -14.5946 46.0972 30.3653Z"
                  fill="url(#paint0_linear_310_772)"
                  fillOpacity="0.3"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_310_772"
                    x1="322.564"
                    y1="426.104"
                    x2="-70.9875"
                    y2="218.496"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.00887753" stopColor="#DEF9FA" />
                    <stop offset="0.1723" stopColor="#BEF3F5" />
                    <stop offset="0.4204" stopColor="#9DEDF0" />
                    <stop offset="0.5512" stopColor="#7DE7EB" />
                    <stop offset="0.7154" stopColor="#5CE1E6" />
                    <stop offset="1" stopColor="#3BBCF" />
                  </linearGradient>
                </defs>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="381"
                height="382"
                viewBox="0 0 381 382"
                fill="none"
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M190.504 371.883C290.192 371.883 371.004 291.07 371.004 191.383C371.004 91.6952 290.192 10.8826 190.504 10.8826C90.8168 10.8826 10.0042 91.6952 10.0042 191.383C10.0042 291.07 90.8168 371.883 190.504 371.883ZM190.504 381.883C295.714 381.883 381.004 296.593 381.004 191.383C381.004 86.1723 295.714 0.882568 190.504 0.882568C85.294 0.882568 0.00421143 86.1723 0.00421143 191.383C0.00421143 296.593 85.294 381.883 190.504 381.883Z"
                  fill="url(#paint0_linear_310_771)"
                  fillOpacity="0.3"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_310_771"
                    x1="254.568"
                    y1="-341.422"
                    x2="507.315"
                    y2="278.31"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.00887753" stopColor="#DEF9FA" />
                    <stop offset="0.1723" stopColor="#BEF3F5" />
                    <stop offset="0.4204" stopColor="#9DEDF0" />
                    <stop offset="0.5512" stopColor="#7DE7EB" />
                    <stop offset="0.7154" stopColor="#5CE1E6" />
                    <stop offset="1" stopColor="#33BBCF" />
                  </linearGradient>
                </defs>
              </svg>
              <Image
                src="/RLink_Logo1.png"
                alt="logo"
                width={120}
                height={120}
                className="object-contain animate-spin animate-infinite animate-duration-[15000ms] animate-ease-linear"
              />
              <div className="mid animate-spin animate-infinite animate-duration-[60000ms] animate-delay-[16000ms] animate-ease-linear relative">
                <div className="animate-spin animate-infinite animate-duration-[60000ms] animate-delay-[16000ms] animate-ease-linear animate-reverse absolute left-28 top-1/3 inner_orbit_cirlces w-64 h-[140px] bg-gradient-to-br from-white/5 to-teal-950/10 flex justify-center items-center rounded-3xl shadow-1g ring-1 ring-black/5 backdrop-blur-lg z-20">
                  <div className="h-full w-full flex flex-col gap-4 justify-start items-start p-7">
                    <div className="flex justify-between items-center w-[90%]">
                      <h5 className="text-white text-lg font-semibold capitalize leading-tight">
                        Quality
                      </h5>
                      <div className="p-2 rounded-lg bg-[#010c13] shadow-lg ring-1 ring-black/5">
                        <SquareDashedBottomCode
                          className="text-lg text-cyan-300"
                          strokeWidth={2.5}
                        />
                      </div>
                    </div>
                    <p className="text-opacity-70 text-xs font-thin tracking-tight">
                      High end quality, Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Maxime.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mid animate-spin animate-infinite animate-duration-[60000ms] animate-delay-[35000ms] animate-ease-linear relative">
                <div className="animate-spin animate-infinite animate-duration-[60000ms] animate-delay-[35000ms] animate-ease-linear animate-reverse absolute left-28 top-1/3 inner_orbit_cirlces w-64 h-[180px] bg-gradient-to-br from-white/5 to-teal-950/10 flex justify-center items-center rounded-3xl shadow-1g ring-1 ring-black/5 backdrop-blur-lg z-20">
                  <div className="h-full w-full flex flex-col justify-center items-center p-7 gap-3">
                    <div className=" p-2 rounded-lg bg-gradient-to-t from-[#010c13] to-[#010c13] shadow-lg ring-1 ring-black/5">
                      <BookOpenCheck
                        className="text-lg text-emerald-300"
                        strokeWidth={2.5}
                      />
                    </div>
                    <h5 className="text-white text-base font-semibold capitalize leading-tight text-center">
                      Reliability
                    </h5>
                    <p className="text-opacity-70 text-xs font-thin tracking-tight text-center">
                      High end quality, Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Maxime.
                    </p>
                  </div>
                </div>
              </div>
              <div className="inner_orbit animate-spin animate-infinite animate-duration-[60000ms] animate-ease-linear relative z-0">
                <div className="animate-spin animate-infinite animate-duration-[60000ms] animate-ease-linear animate-reverse absolute left-12 top-0 inner_orbit_cirlces w-[256px] h-[238px] bg-gradient-to-br from-white/5 to-teal-950/5 flex justify-center items-center rounded-3xl shadow-1g ring-1 ring-black/5 backdrop-blur-lg z-20 p-7">
                  <div className="h-full w-full lex justify-center items-center">
                    <Image
                      src="/onlineAnalysis.svg"
                      alt="logo"
                      width={216}
                      height={194}
                      className="object-contain"
                    />
                  </div>
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
