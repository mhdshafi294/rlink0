import { useState } from "react";
import { motion } from "framer-motion";

const variants = {
  open: {
    clipPath: "circle(1200px at calc(100% - 1rem) 1rem)",
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    clipPath: "circle(0px at calc(100% - 1rem) 1rem)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

interface DropDownProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose?: () => void;
}

const DropDown: React.FC<DropDownProps> = ({ children, isOpen, onClose }) => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center text-white bg-slate-950 "
      animate={isOpen ? "open" : "closed"}
    >
      <motion.div
        className=" z-40 fixed top-0 right-0 bottom-0 w-screen bg-slate-950"
        variants={variants}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default DropDown;
