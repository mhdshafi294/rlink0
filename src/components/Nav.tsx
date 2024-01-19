"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AlignRight } from "lucide-react";

import Container from "./Container";
import NavItem from "./NavItem";

import { NAV_LINKS } from "@/config";

const Nav = () => {
  const [user, setUser] = useState(false);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  return (
    <Container>
      <nav className="flex justify-between items-center mb-16 w-full pt-3">
        <Link href="/" className="flex justify-start items-center  gap-2">
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
          <ul className="flex items-center justify-between md:gap-12">
            {NAV_LINKS.map((item) => (
              <NavItem key={item.value} label={item.label} value={item.value} />
            ))}
          </ul>
        </div>
        <div className="hidden md:flex">
          {user ? (
            <div className="flex gap-3 md:gap-5">
              <Link href="/create-prompt" className="">
                Create Post
              </Link>

              <button
                type="button"
                onClick={() => {
                  setUser(false);
                }}
                className=""
              >
                Sign Out
              </button>

              <Link href="/profile">
                <Image
                  src="/vercel.svg"
                  width={37}
                  height={37}
                  className="rounded-full"
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
                className="font-medium text-white text-sm px-2 py-2"
              >
                Log in
              </button>

              {/* <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-full group bg-gradient-to-br from-green-400 to-sky-600 group-hover:from-green-400 group-hover:to-sky-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-teal-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-black rounded-3xl group-hover:bg-opacity-0">
                  Sign Up
                </span>
              </button> */}
              {/* <a
                href="#_"
                className="relative inline-flex items-center justify-center px-4 py-2 overflow-hidden font-medium text-sm text-white rounded-full shadow-2xl group"
              >
                <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-green-400 via-sky-600 to-green-400 group-hover:opacity-100"></span>
            
                <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3 rounded-full"></span>
                
                <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5 rounded-full"></span>
              
                <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5 rounded-full"></span>
                
                <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5 rounded-full"></span>
                <span className="absolute inset-0 w-full h-full border border-white opacity-10 rounded-full"></span>
                <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5 "></span>
                <span className="relative">Sign Up</span>
              </a> */}
              <a
                href="#_"
                className="relative inline-flex items-center justify-center inline-block px-4 py-2 overflow-hidden font-medium text-sm text-indigo-600 rounded-full shadow-2xl group"
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
        <div className="relative flex md:hidden">
          {!toggleDropdown && (
            <div onClick={() => setToggleDropdown(!toggleDropdown)}>
              <AlignRight className="h-5 w-5" />
            </div>
          )}
          {toggleDropdown && (
            <div className="flex">
              {user ? (
                <div className="dropdown">
                  <Link
                    href="/profile"
                    className="dropdown_link"
                    onClick={() => setToggleDropdown(false)}
                  >
                    My Profile
                  </Link>
                  <Link
                    href="/create-prompt"
                    className="dropdown_link"
                    onClick={() => setToggleDropdown(false)}
                  >
                    Create Prompt
                  </Link>
                  <button
                    type="button"
                    onClick={() => {
                      setToggleDropdown(false);
                      () => {
                        setUser(false);
                      };
                    }}
                    className="black_btn mt-5 w-full"
                  >
                    Sign Out
                  </button>
                </div>
              ) : (
                <div className="dropdown">
                  <button
                    type="button"
                    onClick={() => {
                      setUser(true);
                    }}
                    className=""
                  >
                    Log In
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </nav>
    </Container>
  );
};

export default Nav;
