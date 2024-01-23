import {
  Facebook,
  Instagram,
  Linkedin,
  LinkedinIcon,
  Mail,
} from "lucide-react";

import Link from "next/link";
import Container from "./Container";

import { NAV_LINKS } from "@/config";
import Image from "next/image";

const Footer = () => {
  return (
    <div className=" py-20 bg-gradient-to-b from-black">
      <Container>
        <div className="flex justify-between items-end w-full mb-6">
          <div className="flex flex-col justify-end items-start">
            <h3 className="my-5 text-white text-4xl tracking-widest">R-LINK</h3>
            <h6 className="my-5 text-white text-lg">
              Location Al-malki-Damascus-Syria
            </h6>
          </div>
          <div className="flex flex-col justify-end items-start">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.value}
                href={link.value}
                className="transition duration-200 pt-3 text-slate-300 hover:text-white text-base font-semibold leading-tight "
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col justify-end items-start">
            <h6 className="mt-5 mb-4 tracking-widest text-2xl ">
              Join Our Community
            </h6>
            <div className="mt-5 flex">
              <div className="flex justify-center items-center mx-2 p-4 rounded-full border border-white hover:scale-110 duration-300 transition-all group bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500">
                <a
                  href="https://instagram.com/r_link.io?igshid=OGQ5ZDc2ODk2ZA=="
                  target="_blank"
                  rel=""
                >
                  <Instagram />
                </a>
              </div>
              <div className="flex justify-center items-center mx-2 p-4 rounded-full border border-white hover:scale-110 duration-300 transition-all group bg-blue-700/10 hover:bg-blue-700">
                <a
                  href="https://www.facebook.com/werlink.co?mibextid=ZbWKwL"
                  target="_blank"
                  rel=""
                >
                  <Facebook />
                </a>
              </div>
              <div className="flex justify-center items-center mx-2 p-4 rounded-full border border-white hover:scale-110 duration-300 transition-all group bg-green-700/10 hover:bg-green-700">
                <a href="tel:+963 994778777" target="_blank" rel=" text-white">
                  <Image
                    className=""
                    src="/whatsapp.svg"
                    alt={`whatsapp icon`}
                    width={24}
                    height={24}
                  />
                </a>
              </div>
              <div className="flex justify-center items-center mx-2 p-4 rounded-full border border-white hover:scale-110 duration-300 transition-all group bg-red-700/10 hover:bg-red-700">
                <a href="mailto:info@r-link.io" target="_blank" rel="">
                  <Mail />
                </a>
              </div>
              <div className="flex justify-center items-center mx-2 p-4 rounded-full border border-white hover:scale-110 duration-300 transition-all group bg-sky-700/10 hover:bg-sky-700">
                <a
                  href="https://www.linkedin.com/company/werlinkco/"
                  target="_blank"
                  rel=""
                >
                  <Linkedin />
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr className="w-full my-9" />
        <div className="flex justify-center items-center mb-6">
          <p>© Copyright 2023 | © All rights reserved</p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
