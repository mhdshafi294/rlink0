"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AlignRight } from "lucide-react";

import Container from "./Container";
import NavItem from "./NavItem";
import DropDown from "./DropDown";

import { NAV_LINKS } from "@/config";

const Nav = () => {
  const [user, setUser] = useState(false);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  return (
    <div className="w-full self-center max-w-7xl lg:w-7xl lg:px-0 md:px-6 px-3">
      <nav className="  flex justify-between items-center w-full pt-3 z-20 mx-auto max-w-7xl md:px-0 px-5">
        <Link href="/" className="flex justify-start items-center gap-2">
          <Image
            src="/RLink_Logo1.png"
            alt="logo"
            width={60}
            height={60}
            className="object-contain"
          />
          <p className="logo_text">R-LINK</p>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex">
          <ul className="flex items-center justify-between ">
            {NAV_LINKS.map((item) => (
              <NavItem key={item.value} label={item.label} value={item.value} />
            ))}
          </ul>
        </div>
        <div className="hidden md:flex">
          {user ? (
            <div className="flex gap-3 md:gap-5">
              <button
                type="button"
                onClick={() => {
                  setUser(false);
                }}
                className="font-medium text-white text-sm px-2 py-2 hover:bg-transparent hover:shadow-lg"
              >
                Sign Out
              </button>
              <Link href="/profile">
                <Image
                  src="/profilePic.webp"
                  width={37}
                  height={37}
                  className="rounded-full"
                  objectFit="cover"
                  alt="profile"
                />
              </Link>
            </div>
          ) : (
            <div className="flex items-center gap-3 md:gap-5">
              <button
                type="button"
                onClick={() => {
                  setUser(true);
                }}
                className="font-medium text-white text-sm px-2 py-2 hover:bg-transparent hover:shadow-lg"
              >
                Log in
              </button>
              <a
                href="#"
                className="relative inline-flex items-center justify-center px-4 py-1.5 overflow-hidden font-medium text-sm text-indigo-600 rounded-full shadow-2xl group mr-2 "
              >
                <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-green-600 rounded-full blur-md ease"></span>
                <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                  <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-teal-500 rounded-full blur-md"></span>
                  <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-sky-600 rounded-full blur-md"></span>
                </span>
                <span className="relative text-white">Sign Up</span>
              </a>
            </div>
          )}
        </div>

        {/* Mobile Navigation */}
        <div className="relative flex flex-col md:hidden">
          <div
            onClick={() => setToggleDropdown(!toggleDropdown)}
            className="mr-2 absolute right-1 -top-2 z-50"
          >
            <AlignRight className="h-5 w-5" />
          </div>

          <DropDown isOpen={toggleDropdown}>
            {user ? (
              <div className="flex flex-col items-center justify-center gap-10 mx-auto my-auto w-screen h-screen">
                {NAV_LINKS.map((item) => (
                  <NavItem
                    key={item.value}
                    label={item.label}
                    value={item.value}
                  />
                ))}
                <Link
                  href="/profile"
                  className="text-xl"
                  onClick={() => setToggleDropdown(false)}
                >
                  My Profile
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    setUser(false);
                    setToggleDropdown(false);
                  }}
                  className="text-xl"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center gap-10 mx-auto my-auto w-screen h-screen">
                {NAV_LINKS.map((item) => (
                  <NavItem
                    key={item.value}
                    label={item.label}
                    value={item.value}
                  />
                ))}
                <button
                  type="button"
                  onClick={() => {
                    setUser(true);
                    setToggleDropdown(false);
                  }}
                  className="text-xl"
                >
                  Log In
                </button>
              </div>
            )}
          </DropDown>
        </div>
      </nav>

      <hr className="mt-4 mx-auto h-px w-[65%] border-t-0 bg-transparent bg-gradient-to-r from-transparent from-5% via-emerald-500 via-50% to-transparent to-95% opacity-85 " />
    </div>
  );
};

export default Nav;
