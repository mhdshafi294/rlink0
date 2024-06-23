"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";

const variants = {
  visible: {
    scale: 1,
    opacity: 1,
    y: 0,
  },
  hidden: {
    scale: 0.9,
    opacity: 0,
    y: 100,
  },
};

interface ServiceCardProps {
  label: string;
  description: string;
  icon: string;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  label,
  description,
  icon,
  index,
}) => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            controls.start("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 } // Adjust threshold as needed
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls]);

  return (
    <motion.div
      ref={ref}
      className="group justify-between relative flex flex-col items-center md:items-start hover:items-center duration-500"
      initial="hidden"
      animate={controls}
      transition={{ delay: 0.2 * index }}
      variants={variants}
    >
      <div className="group-hover:scale-110 duration-500">
        <div className="w-full flex justify-center md:justify-start duration-500">
          {/* <Image
            className="group-hover:translate-x-[90%] duration-300"
            src={icon}
            alt={`${label} icon`}
            width={90}
            height={90}
          /> */}
          <img
            src={icon}
            alt={`${label} icon`}
            className="w-[90px] h-[90px] group-hover:md:translate-x-[90%] duration-500"
          />
        </div>
        <h4 className="font-PP-Mori text-xl md:text-2xl text-center md:text-left leading-6 md:leading-[29px] text-white mt-2">
          {label}
        </h4>
        <p className="lg:leading-6 font-PP-Mori text-sm leading-7 font-PP-Mori mt-4 !text-ts-black300 md:w-11/12 text-center md:text-justify">
          {description}
        </p>
      </div>
      <div className="lg:w-max mt-4 mb-4 md:mb-0" />
    </motion.div>
  );
};

export default ServiceCard;
