import { useState } from "react";
import { motion } from "framer-motion";

interface DropDownProps {
  children: React.ReactNode;
  isOpen: boolean;
}

const DropDown: React.FC<DropDownProps> = ({ children, isOpen }) => {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
};

export default DropDown;
