import { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface CommunityLinkProps {
  link: string;
  Icon: string | any;
  name?: string;
  className: string | undefined;
}

const tailwindClasses =
  "bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-pink-500/5 hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 bg-[#0e76a810]  hover:bg-[#0e76a8] bg-[#923a2a10] hover:bg-[#923a2a] bg-[#25D36610] hover:bg-[#25D366] bg-[#4267B210] hover:bg-[#4267B2]";

const CommunityLink: React.FC<CommunityLinkProps> = ({
  className,
  link,
  Icon,
  name,
}) => {
  // console.log(`${name} className: ${className}`);
  // console.log(typeof className);
  return (
    <Link
      href={link}
      target="_blank"
      className={cn(
        "flex justify-center items-center p-2 md:p-4 rounded-full border border-white hover:scale-110 duration-300 transition-all group cursor-pointer",
        className
      )}
    >
      <div>
        {typeof Icon === "string" ? (
          // <Image
          //   className=""
          //   src={Icon}
          //   alt={`${name} icon`}
          //   width={24}
          //   height={24}
          // />
          <img src={Icon} alt={`${name} icon`} className="w-6 h-6" />
        ) : (
          <Icon />
        )}
      </div>
    </Link>
  );
};

export default CommunityLink;
