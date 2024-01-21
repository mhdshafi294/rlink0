"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const variants = {
  visible: {
    scale: 1,
    opacity: 1,
    y: 0,
  },
  hidden: {
    scale: 0.9,
    opacity: 0.5,
    y: 150,
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
  return (
    <motion.div
      className="group justify-between relative flex flex-col hover:items-center duration-300"
      initial="hidden"
      whileInView="visible"
      transition={{ delay: 0.2 * index }}
      variants={variants}
    >
      <div className="group-hover:-translate-y-6 duration-500">
        <div>
          <Image
            className="group-hover:translate-x-[90%] duration-300"
            src={icon}
            alt={`${label} icon`}
            width={90}
            height={90}
          />
        </div>
        <h4 className="font-PP-Mori text-xl md:text-2xl leading-6 md:leading-[29px] text-white mt-2">
          {label}
        </h4>
        <p className="lg:leading-6 font-PP-Mori text-sm leading-7 font-PP-Mori mt-4 !text-ts-black300 w-11/12 text-justify">
          {description}
        </p>
      </div>
      <div className="lg:w-max mt-4 mb-4 md:mb-0" />
    </motion.div>
  );
};

export default ServiceCard;
