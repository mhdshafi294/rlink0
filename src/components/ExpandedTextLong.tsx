"use client";

import { Plus } from "lucide-react";
import React, { useState } from "react";

interface ExpandedTextProps {
  label: string;
  details: string;
  isOpen?: boolean;
}

const ExpandedText: React.FC<ExpandedTextProps> = ({
  label,
  details,
  isOpen = false,
}) => {
  const [expand, setExpand] = useState(isOpen);

  const toggleExpand = () => {
    setExpand((prev) => !prev);
  };

  return (
    <div className="w-full">
      <div
        className="group flex justify-between items-center w-full py-5 border-y backdrop-blur-lg cursor-pointer"
        onClick={toggleExpand}
      >
        <h4 className="text-lg md:text-2xl font-semibold text-slate-300 group-hover:text-white duration-200">
          {label}
        </h4>
        <div className={`${expand ? "rotate-45" : "rotate-0"}  duration-300 `}>
          <Plus strokeWidth={2.5} />
        </div>
      </div>
      <div
        className={`${
          expand ? "h-56 md:h-32" : "h-0"
        } overflow-hidden duration-700 flex flex-col justify-center items-start tracking-wider text-slate-100 text-sm md:text-base`}
      >
        <p className="text-slate-200 font-light">{details}</p>
      </div>
    </div>
  );
};

export default ExpandedText;
