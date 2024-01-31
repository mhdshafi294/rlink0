import { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import Image from "next/image";

interface CommunityLinkProps {
  link: string;
  Icon: string | any;
  name?: string;
  className: string | undefined;
}

const tailwindClasses =
  "bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-pink-500/5 hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 bg-blue-700/5 hover:bg-blue-700 bg-red-700/5 hover:bg-red-700 bg-green-700/5 hover:bg-green-700 bg-sky-700/10 hover:bg-sky-700";

const CommunityLink: React.FC<CommunityLinkProps> = ({
  className,
  link,
  Icon,
  name,
}) => {
  // console.log(`${name} className: ${className}`);
  // console.log(typeof className);
  return (
    <div
      className={cn(
        "flex justify-center items-center mx-2 p-4 rounded-full border border-white hover:scale-110 duration-300 transition-all group",
        className
      )}
    >
      <a href={link} target="_blank" rel="">
        {typeof Icon === "string" ? (
          <Image
            className=""
            src={Icon}
            alt={`${name} icon`}
            width={24}
            height={24}
          />
        ) : (
          <Icon />
        )}
      </a>
    </div>
  );
};

export default CommunityLink;
