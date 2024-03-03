import { useState } from "react";
import { motion } from "framer-motion";

const variants = {
  open: {
    clipPath: "circle(1200px at calc(100% - 2.5rem) 2.5rem)",
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    clipPath: "circle(0px at calc(100% - 2.5rem) 2.5rem)",
    transition: {
      delay: 0,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

interface DropDownProps {
  children: React.ReactNode;
  isOpen: boolean;
}

const DropDown: React.FC<DropDownProps> = ({ children, isOpen }) => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center text-white bg-slate-950"
      animate={isOpen ? "open" : "closed"}
    >
      <motion.div
        className=" z-[998] fixed top-0 right-0 bottom-0 w-screen bg-slate-950"
        variants={variants}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default DropDown;
