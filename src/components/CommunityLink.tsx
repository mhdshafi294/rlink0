import { LucideIcon } from "lucide-react";
import React from "react";

interface CommunityLinkProps {
  link: string;
  icon: string | LucideIcon;
  bg: string;
}

const CommunityLink: React.FC<CommunityLinkProps> = ({ link, icon, bg }) => {
  return (
    <div className="flex justify-center items-center mx-2 p-4 rounded-full border border-white hover:scale-110 duration-300 transition-all group bg-blue-700/10 hover:bg-blue-700">
      <a
        href="https://www.facebook.com/werlink.co?mibextid=ZbWKwL"
        target="_blank"
        rel=""
      ></a>
    </div>
  );
};

export default CommunityLink;
