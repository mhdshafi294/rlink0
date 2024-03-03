import Link from "next/link";

import {
  Facebook,
  Instagram,
  Linkedin,
  LinkedinIcon,
  Mail,
} from "lucide-react";

import Container from "./Container";

import { COMMUNITY_LINKS, NAV_LINKS } from "@/config";
import CommunityLink from "./CommunityLink";

const Footer = () => {
  return (
    <div className=" pt-20 pb-5 bg-gradient-to-b from-black">
      <Container>
        <div className="flex flex-col-reverse md:flex-row justify-between items-start md:items-end w-full mb-6">
          <div className="flex flex-col justify-end items-start">
            <h3 className="my-5 text-white text-4xl tracking-widest">R-LINK</h3>
            <h6 className="my-5 text-white text-lg">
              Location Al-malki-Damascus-Syria
            </h6>
          </div>
          <div className="gap-2 grid grid-cols-2 w-full md:w-auto py-7 md:pt-0 justify-between items-center flex-wrap">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.value}
                href={link.value}
                className="transition duration-200 pt-3 text-slate-300 hover:text-white text-base font-semibold leading-tight md:ml-5"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col justify-end items-start">
            <h6 className="mt-5 mb-4 tracking-widest text-2xl ">
              Join Our Community
            </h6>
            <div className="mt-5 flex gap-3">
              {COMMUNITY_LINKS.map((link, index) => (
                <CommunityLink
                  key={link.link}
                  className={link.className}
                  link={link.link}
                  Icon={link.Icon}
                  name={link.name}
                />
              ))}
            </div>
          </div>
        </div>
        <hr className="w-full my-9" />
        <div className="flex justify-center items-center mb-6">
          <p>© Copyright 2024 | © All rights reserved</p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
